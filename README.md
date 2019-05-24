# Canopy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Conventional commits
This repository is set up to work with the [angular version](https://www.npmjs.com/package/@commitlint/config-angular) of [conventional commits](https://www.conventionalcommits.org).

A git commit-msg hook will lint your commits to ensure they are of the correct format. To make it easy to follow the correct format you can `npm run commit` which will use the commitizen cli to run you through the process.

## Development server

Run `ng serve canopy-docs` to load the documentation. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build canopy` to build the library.
Run `ng build canopy-docs --prod` to build the documentation application

Note that, since version 6.1, Angular CLI always builds libraries in production mode so we don’t use the --prod flag. Unlike a library, when building the documentation we do use the --prod flag.

The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test canopy` to execute the library unit tests.
Run `ng test canopy-docs` to execute the documentation unit tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contributing

### Pre-Requisites

The below items are required for any commits / contributions to the project.

#### ✅ All commits must be signed

1. [Generating a new GPG Key](https://help.github.com/en/articles/generating-a-new-gpg-key)
    
    Make sure the email address you use, matches your local git email address (`git config --get user.email`) and that of your GitHub account. If not, either change your git email address or add this address to your GitHub account.
  
2. [Adding a new GPG key to your GitHub account](https://help.github.com/en/articles/adding-a-new-gpg-key-to-your-github-account)
3. [Signing commits](https://help.github.com/en/articles/signing-commits)

#### ✅ Abide by the following git commit message format

The project uses pre-commit hooks to validate commit messages using [commitlint](https://github.com/conventional-changelog/commitlint).

Example of a valid commit messages:
```
docs: update `README.md`

* Update the `README.md` to include a Contributing section.
```
* Subject has a lowerCase type ('docs' for example).
* Subject is not sentence-case, start-case, pascal-case or upper-case, and does not have a full stop.
* Body is separated from the subject with a blank line.
* See [config-angular](https://www.npmjs.com/package/@commitlint/config-angular) for the complete, up-to-date ruleset.
