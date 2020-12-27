import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import { getDomainParts } from "./utils";

const stackConfig = new pulumi.Config("static-website");
const config = {
  envTag: stackConfig.require("envTag"),
  certificateArn: stackConfig.require("certificateArn"),
  targetDomain: stackConfig.require("targetDomain"),
};

const _bucketName = `${config.targetDomain}-${config.envTag}`;
const bucket = new aws.s3.Bucket("bucket", {
  acl: "public-read",
  bucket: _bucketName,
  policy: JSON.stringify({
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "AddPerm",
        Effect: "Allow",
        Principal: "*",
        Action: "s3:GetObject",
        Resource: `arn:aws:s3:::${_bucketName}/*`,
      },
    ],
  }),
  website: {
    indexDocument: "index.html",
    errorDocument: "index.html",
  },
});

const cdn = new aws.cloudfront.Distribution("cdn", {
  aliases: [config.targetDomain],
  defaultCacheBehavior: {
    allowedMethods: ["GET", "HEAD", "OPTIONS"],
    cachedMethods: ["GET", "HEAD", "OPTIONS"],
    defaultTtl: 60 * 5,
    forwardedValues: {
      cookies: { forward: "none" },
      queryString: false,
    },
    minTtl: 0,
    maxTtl: 60 * 5,
    targetOriginId: bucket.arn,
    viewerProtocolPolicy: "redirect-to-https",
  },
  defaultRootObject: "index.html",
  enabled: true,
  isIpv6Enabled: true,
  origins: [
    {
      domainName: bucket.websiteEndpoint,
      originId: bucket.arn,
      customOriginConfig: {
        originProtocolPolicy: "http-only",
        httpPort: 80,
        httpsPort: 443,
        originSslProtocols: ["TLSv1.2"],
      },
    },
  ],
  priceClass: "PriceClass_All",
  restrictions: {
    geoRestriction: {
      restrictionType: "none",
    },
  },
  viewerCertificate: {
    acmCertificateArn: config.certificateArn,
    sslSupportMethod: "sni-only",
  },
});

const domainParts = getDomainParts(config.targetDomain);

const hostedZone = aws.route53.getZone({
  name: domainParts.parentDomain,
});

const aliasRecord = new aws.route53.Record(
  `alias-record-${config.targetDomain}`,
  {
    name: config.targetDomain,
    zoneId: hostedZone.then((x) => x.id),
    type: "A",
    aliases: [
      {
        name: cdn.domainName,
        zoneId: cdn.hostedZoneId,
        evaluateTargetHealth: true,
      },
    ],
  }
);

// Export the name of the bucket
export const bucketName = bucket.id;
export const bucketArn = bucket.arn;
export const bucketUri = pulumi.interpolate`s3://${bucket.bucket}`;
export const bucketEndpoint = bucket.websiteEndpoint;
export const cloudFrontDomain = cdn.domainName;
export const targetDomainEndpoint = `https://${config.targetDomain}`;
