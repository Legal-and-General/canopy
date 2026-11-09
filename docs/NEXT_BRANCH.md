# Pre-release `next` Branch

The `next` branch allows the library to be published with a pre-release version. This branch should only be used sporadically in case of a major breaking change, for example the upgrade to a major version of Angular.

See the [releases guide](./RELEASES.md) for the release branches and how commit
messages determine versions.

For additional information, see the [semantic release docs](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#pre-release-branches).

## Workflow

1. Create a branch called `next` from the latest `master`
2. Create the feature branch
3. Once the work is complete, merge the feature branch into `next`
4. When happy with the pre-release, merge `next` into `master`

## Publishing

When changes are pushed to `next`, semantic-release analyses the commits. If
they include a releasable change, it publishes a pre-release version such as
`1.2.3-next.1` to GitHub Packages. Changes that do not warrant a release do not
publish a new package.

In addition to that, the `next` branch will be deployed to [Storybook](https://legal-and-general.github.io/canopy/lg-sb-next/?path=/docs/welcome--docs).
