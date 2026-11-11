# Releases

Canopy uses [semantic-release](https://semantic-release.gitbook.io/) to version
and publish the library from its configured release branches.

## Mainline releases

The main release line is published only from `master`. A push to `master`,
usually from a merged pull request, triggers a GitHub Actions workflow that
builds the library and runs semantic-release. It analyses commits since the last
release and, when they include a releasable change, creates a GitHub release
and publishes the package to GitHub Packages. Not every merge creates a release.

The `master` Storybook deployment runs separately, so a documentation-only
change can update Storybook without publishing a new package.

## Conventional commits

Canopy follows the Angular convention for
[Conventional Commits](https://www.conventionalcommits.org/). Commit messages
tell semantic-release whether to publish a release and which mainline version
to use. On `master`:

- `fix:` and `perf:` changes produce a patch release.
- `feat:` changes produce a minor release.
- A `BREAKING CHANGE:` footer produces a major release.
- A `docs:` or `test:` commit without a breaking-change footer does not create
  a release on its own.

When multiple changes are released together, the highest applicable version
increase is used. For a breaking change, include a footer after a blank line:

```text
feat: change the button API

BREAKING CHANGE: remove the legacy button input
```

Do not use the `!` marker, such as `feat!:`. Canopy's Angular commitlint
configuration rejects it, and the release parser does not recognise it as a
breaking-change marker. See the
[contributing guide](./CONTRIBUTING.md#conventional-commits) for commit
formatting and more examples.

## Other release branches

- `next` and `legacy` are pre-release branches. See the
  [pre-release branch guide](./NEXT_BRANCH.md) for the `next` workflow.
- `N.x` and `N.N.x` are maintenance branches for older versions. See the
  [maintenance releases guide](./MAINTENANCE_RELEASES.md).

The branch configuration is in [`.releaserc`](../.releaserc), and the workflow
is in [`.github/workflows/master_push.yml`](../.github/workflows/master_push.yml).
