# Music Discovery

A frontend portfolio project.

## Tech Stack

- Frontend:
  - React
  - Redux Saga
- Documentation:
  - Storybook
- CD/CI, cloud:
  - Github Actions
  - Pulumi
  - AWS S3, Cloudfront, Route53

## How to Run

Run `nvm use` if desired to use the same Node version. It makes use of `.nvmrc` file to use the indicated Node version.

Use `.env.example` to create `.env.local` or `.env.production.local` file. The following API tokens are required:

- [RapidAPI - Deezer](https://rapidapi.com/deezerdevs/api/deezer-1)

### Development

`yarn start` runs app in development mode.

### Production

`yarn build` to build for production
`yarn build-storybook` to build storybook

## Infrastructure

Open terminal in `infrastructure`, install packages by running `npm ci`

### Setup

- Run `pulumi config set [config-name] [value]` for all configs specified under `template` in `Pulumi.yaml`

You'll need to have a AWS SSL Certificate ARN ready for one of the config.

### Deploy

- Run `pulumi preview` to preview changes
- Run `pulumi up` to deploy infrastructure
- Run `pulumi stack output` to see output parameters. Use the `bucketName` output to insert into `AWS_S3_BUCKET_NAME` in the next section below

### Clean Up

- Run `pulumi destroy` to remove all cloud resources.
- Go to Pulumi app and remove the created stack

## CI/CD

Github Actions is set up for branch `release/prod`. It deploys app on AWS S3. The following secrets need to be created in Github settings for the workflow to work:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_S3_BUCKET_NAME`
- `REACT_APP_RAPID_API_KEY`

Storybook is deployed to `storybook/` path.
