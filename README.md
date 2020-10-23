# Music Discovery

A frontend portfolio project.

## Tech Stack

- React
- Redux Saga
- Storybook
- Github Actions
- AWS S3, Cloudfront

## How to Run

Run `nvm use` if desired to use the same Node version. It makes use of `.nvmrc` file to use the indicated Node version.

Use `.env.example` to create `.env.local` or `.env.production.local` file. The following API tokens are required:

- [RapidAPI - Deezer](https://rapidapi.com/deezerdevs/api/deezer-1)

### Development

`yarn start` runs app in development mode.

### Production

`yarn build` to build for production
`yarn build-storybook` to build storybook

### CI/CD

Github Actions is set up for branch `release/prod`. It deploys app on AWS S3. The following secrets need to be created in Github settings for the workflow to work:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_S3_BUCKET_NAME`
- `REACT_APP_RAPID_API_KEY`

Storybook is deployed to `storybook/` path.
