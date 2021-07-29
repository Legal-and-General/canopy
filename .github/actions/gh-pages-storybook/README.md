# GitHub Pages Storybook action

This action will:
- run the storybook static build
- commit and push the resultant directory to the `gh-pages` branch

The node_modules are not checked in and there is currently no separate build process for the action. For this reason we need to install the node_modules ahead of time.

## Example usage
```
- name: install action dependencies
  run: ci .github/actions/gh-pages-storybook && npm ci
- name: deploy to gh-pages
  uses: ./.github/actions/gh-pages-storybook
```
