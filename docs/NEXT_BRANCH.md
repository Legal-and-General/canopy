# Pre-release `next` branch

The `next` branch allows the library to be published with a pre-release version. This branch should only be used sporadically in case of a major breaking change, for example the upgrade to a major version of Angular.

For additional information check the [semantic release docs](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#pre-release-branches).

## The workflow
1. Create a branch called `next` from the latest master
2. Create the feature branch
3. Once the work is complete merge the feature branch into `next`
4. When happy with the pre-release, merge `next` into `master`
5. Delete `next`
