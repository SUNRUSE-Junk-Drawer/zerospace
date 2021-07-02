# Zerospace [![Continuous Integration](https://github.com/jameswilddev/zerospace/workflows/Continuous%20Integration/badge.svg)](https://github.com/jameswilddev/zerospace/actions) [![License](https://img.shields.io/github/license/jameswilddev/zerospace.svg)](https://github.com/jameswilddev/zerospace/blob/master/license) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fzerospace.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fzerospace?ref=badge_shield) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

## Developing

Each of these commands can be accessed from Visual Studio Code by pressing (cmd/ctrl)+shift+B.

First, `npm install`.  Then, either `npm run prod` for a one-off, minified build after tests run, or, `npm run watch` to host locally at [127.0.0.1:8080](127.0.0.1:8080) and rebuild automatically on changes.

### File Structure

[index.pug](./src/index.pug) describes the HTML file loaded at startup.  Use this to show the basic frame of your SPA before React mounts.

[index.sass](./src/index.sass) must reference or contain all styling rules you want to be present.

[index.ts](./src/index.ts) is executed on page load; the root React component is mounted here.

In each directory, there is expected to be the following (see [an example](./src/example-with-tests))

- An [index.ts](./src/example-with-tests/index.ts) file containing the functionality.
- A [unit.ts](./src/example-with-tests/unit.ts) file containing the corresponding unit tests.

## Deployment

The [GitHub Action](./.github/workflows/continuous-integration.yaml) will build the SPA, upload it to a S3 bucket (configured to allow public HTTP reads), then invalidate a Cloudflare cache (which sits in front and provides HTTPS).

### Configuring GitHub secrets

Add the following secrets on GitHub:

#### DOMAIN

This is:

- The name of the S3 bucket which will be uploaded to.
- The public URL which Cloudflare will host.

For example, for `https://www.google.com/`, this would be `www.google.com` - no protocol, no trailing slash.

#### AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY

The access key ID and secret access key of an IAM user with the following permissions against the S3 bucket and objects within:

- `PutObject`
- `PutObjectAcl`
- `GetObject`
- `ListBucket`
- `DeleteObject`
- `GetBucketLocation`

#### CLOUDFLARE_TOKEN/CLOUDFLARE_ZONE

A Cloudflare access token with the `Zone.Cache Purge` permission.  The Zone ID can be found on your domain's dashboard.

### Triggering a deployment

To trigger a deployment, create a GitHub release.  The name/version of the GitHub release will be included in the deployed HTML.

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fzerospace.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fzerospace?ref=badge_large)
