# Pre-release `next` Branch

The `next` branch allows the library to be published with a pre-release version. This branch should only be used sporadically in case of a major breaking change, for example the upgrade to a major version of Angular.

For additional information, see the [semantic release docs](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#pre-release-branches).

## Workflow

1. Create a branch called `next` from the latest `main`
2. Create the feature branch
3. Once the work is complete, merge the feature branch into `next`
4. When happy with the pre-release, merge `next` into `main`

## Publishing

Once a feature branch is merged into `next`, a pre-release version will be published to npm with the tag `x.x.x-next.x`. This allows users to install the pre-release version.

In addition to that, the `next` branch will be deployed to [Storybook](https://legal-and-general.github.io/canopy/lg-sb-next/?path=/docs/welcome--docs).
