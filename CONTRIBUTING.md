# Contributing

Hi, glad you are here all contributions are very much welcome!

## Conventional commits
This repository is set up to work with the [angular version](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) of [conventional commits](https://www.conventionalcommits.org).

A git commit-msg hook will lint your commits to ensure they are of the correct format. To make it easy to follow the correct format you can `npm run commit` which will use the [commitizen](https://github.com/commitizen/cz-cli) cli to run you through the process.

The commit message format is important as it is what drives the semantic versioning. Versioning is currently carried out by the [semantic release](https://semantic-release.gitbook.io/) node module. On merging to the master branch, semantic release will scan the commit messages and determine the next version. It will also tag, package and deploy this version to the [GitHub registry](https://github.com/features/package-registry).

### Breaking Changes

Be particularly aware of any changes which may be deemed a breaking change. In our definition a breaking change is something which may affect the backwards compatibility of pre-existing functionality, when used in a standard way. We can only provide safe versioning under the assumption that a consuming project does not override any css styles.

The format for breaking changes is outlined on the [convention commit docs](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#commit-message-with-description-and-breaking-change-in-body)


### Commit message examples

Fix
```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

Breaking change
```
feat(button): allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

## Commit Signing

To ensure that changes come from an entrusted source all commits must be [signed](https://help.github.com/en/articles/about-commit-signature-verification), Follow the steps below to setup commit signing.

1. [Generating a new GPG Key](https://help.github.com/en/articles/generating-a-new-gpg-key)
    
    Make sure the email address you use, matches your local git email address (`git config --get user.email`) and that of your GitHub account. If not, either change your git email address or add this address to your GitHub account.
  
2. [Adding a new GPG key to your GitHub account](https://help.github.com/en/articles/adding-a-new-gpg-key-to-your-github-account)
3. [Signing commits](https://help.github.com/en/articles/signing-commits)

## Storybook

Canopy uses [Storybook](https://storybook.js.org/) to enable components to be developed in isolation. If you are creating a new component or directive a corresponding story file will be needed. This file will need to be manually added to the [storybook config file](https://github.com/canopy-collective/canopy/blob/master/.storybook/config.js).

It is possible to scan for story files automatically however this caused some issues with Netlify timing out, so in the interim files need to be added manually.

### Netlify Deployments

Pull requests are automatically deployed via [Netlify](https://netlify.com), a status check will be added to any pull request with a link to the deployment which will run the storybook application. [Netlify config](./netlify.toml) is checked into the project

Netlify deployments are currently password protected, speak to a project admin to get hold of the current password.

The master branch is also deployed to netlify, this currently provides the most up to date documentation for the latest version.

https://canopy-e66e57.netlify.com/

When seeking QA approval for your work please provide a link on the PR to the specific component in question, e.g.

https://canopy-e66e57.netlify.com/?path=/story/button--single-button

## Circle CI

The build is currently handled by [Circle CI](http://circleci.com), the config for which is checked into the [.circleci](./.circleci) folder. Contributions to the pipeline process are greatly received, project administrators can provide credentials.
