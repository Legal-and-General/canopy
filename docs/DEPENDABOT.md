# Dependency updates with Dependabot

Dependabot is a GitHub-owned product that directly integrates into the GitHub UI and notifies us of new releases to our
dependencies within the npm and GitHub Actions package ecosystems.

> NOTE: The configuration file is found at `/.github/dependabot.yml`
## Dependency Updates

Dependabot takes into consideration the semver ranges within `/package.json` (or GitHub Actions workflow files for
updates to Actions) and will only notify us of updates that fall within the specified ranges. It does this by raising a
PR that updates the relevant files, and includes a link to release notes.

Dependabot creates separate, grouped PRs for GitHub Actions and `npm` updates, prioritising security vulnerabilities with dedicated PRs.
