# Dependency updates with Dependabot

Dependabot is a GitHub-owned product that directly integrates into the GitHub UI and notifies us of new releases to our
dependencies within the npm and GitHub Actions package ecosystems.

> **Note:** The configuration file is [`.github/dependabot.yml`](../.github/dependabot.yml).

## Dependency Updates

Dependabot checks the npm dependencies in `package.json` and GitHub Actions
versions in workflow files. Its configuration determines which updates are
considered and how they are grouped. It raises pull requests that update the
relevant files and can include links to release notes.

Dependabot creates separate, grouped pull requests for GitHub Actions and npm
updates. Security updates may be raised separately.

## Dependency Updater agent

The [Dependency Updater agent](./AGENTIC_AI.md#using-an-agent) helps with patch,
minor and major npm updates. It checks existing Dependabot pull requests,
researches breaking changes, applies updates and runs validation.

Select the agent in Copilot Chat, or create a
[Dependency Update issue](https://github.com/Legal-and-General/canopy/issues/new?template=dependency-update.yml),
assign it to `@copilot` and select the agent. Review the proposed changes and
validation results before merging.
