# Contributing

Hi, glad you are here all contributions are very much welcome!

Before you start Contributing to Canopy it is worth familiarising yourself with the [best practice](./BEST_PRACTICE.md) guidelines.

## Storybook

Canopy uses [Storybook](https://storybook.js.org/) to enable components to be developed in isolation. If you are creating a new component or directive a corresponding story file will be needed.

Running `npm start` will run storybook locally, this will hot reload any changes and is the most seamless way to modify or create existing components.

### Netlify Deployments

Pull requests are automatically deployed via [Netlify](https://netlify.com), a status check will be added to any pull request with a link to the deployment which will run the storybook application. [Netlify config](./netlify.toml) is checked into the project

The master branch is also deployed to netlify, this currently provides the most up to date documentation for the latest version.

https://legal-and-general-canopy.netlify.app/

When seeking QA approval for your work please provide a link on the PR to the specific component in question, e.g.

https://legal-and-general-canopy.netlify.app/?path=/story/components-button--primary-button

## Build

Run `npm run build` to build the library and global styles.

The build artifacts will be stored in the `dist/` directory.

### Build test application

A test application is located in the `projects/canopy-test-app` folder. This application helps to capture any issues with exported modules. Run `npm run build:test-app` to build the test application, this happens automatically as part of the pull request pipeline.

The test application includes a test page which contains all of the Canopy components to ensure that they layout correctly. This page is also accessible in storybook via the main navigation, where possible all new components should be added to the test page.

## Running unit tests

Run `npm test` to execute the library unit tests, this step is also run as part of the pull request pipeline.

## Running lint

Run `npm run lint` to execute the library unit tests, this step is also run as part of the pull request pipeline.

Current linting includes

- `tslint` for typescript files
- `stylelint` for scss file

## Conventional commits

This repository is set up to work with the [angular version](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) of [conventional commits](https://www.conventionalcommits.org).

A git commit-msg hook will lint your commits to ensure they are of the correct format. To make it easy to follow the correct format you can `npm run commit` which will use the [commitizen](https://github.com/commitizen/cz-cli) cli to run you through the process.

The commit message format is important as it is what drives the semantic versioning. Versioning is currently carried out by the [semantic release](https://semantic-release.gitbook.io/) node module. On merging to the master branch, semantic release will scan the commit messages and determine the next version. It will also tag, package and deploy this version to the [GitHub registry](https://github.com/features/package-registry).

### Breaking Changes

Be particularly aware of any changes which may be deemed a breaking change. Refer to our [guide of what is and is not considered a breaking change](./BREAKING_CHANGES.md)

The format for breaking changes is outlined on the [convention commit docs](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#commit-message-with-description-and-breaking-change-in-body)

Whenever introducing a breaking change consider using the `next` branch. Refer to the [next docs](./NEXT_BRANCH.md).

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

## Review Process

Pull requests require two successful approvals before they can be merged. One review must be from a [CODEWONER](./.github/CODEOWNERS). We also require that developers working on a specific project seek review from someone on a different project. The aim being that by removing any immediate delivery pressure we can ensure a high level of quality and negate the risk of factions forming within the codebase, currently we cannot automate this process and so it must be based on trust.

### Code Owners

Code Owners are chosen based on a history of consistent contributions. Code Owners should have an understanding of the current issues list and have a wider view of the technical direction of the project. They should help to steer technical direction via pull request reviews and be focused on the longer term success of the project. Code Owners are not limited to being from our particular organisation.

## Github Actions

The build is currently handled by [Github Actions](https://help.github.com/en/actions), the config for which is checked into the [.github](./.github) directory. The build will run on every pull request and run standard verification tasks e.g. linting, unit testing, test build. The build will need to be green in order for a pull request to pass.

## InVision DSM

To ensure the Canopy implementation keeps in sync with the design expectations we use the [InVision Design System Manager](https://legalandgeneral.invisionapp.com/dsm/legalandgeneral/canopy). InVision DSM has a storybook integration which allows us to publish stories directly to the DSM interface, this helps us to keep the design and implementation in sync.

Each time a merge is made to the master branch we run the `dsm-storybook publish` command from GitHub actions, this publishes the latest change to DSM. Some additional markup is required to link a story to it's corresponding DSM page, for comprehensive instructions refer to the [InVision DSM Storybook documentation](https://support.invisionapp.com/hc/en-us/articles/360028510211-Configuring-the-Storybook-DSM-Integration). In the majority of cases it should be as simple as adding an Angular code tab to the relevant DSM page, you will then be provided with an ID that can be added to the config of the story.

```js
  'in-dsm': {
    id: '5ec4dbf0c4b3aed7e94e8886'
  },
```

## SVG Icons

To add a new SVG icon to Canopy simply add the file to either the `icons` or `brand-icons` folder within `assets`.

When committing the new icons [lint-staged](https://github.com/okonet/lint-staged) will run and generate all the `ts` files automatically.

After that remember to add the new icons to the story, as they are not automatically added at present.
