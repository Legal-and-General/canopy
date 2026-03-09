# Maintenance Releases

This guide explains how to create maintenance releases for previous versions of Canopy.

## Overview

Maintenance branches allow you to release bug fixes and security patches for older versions while continuing development on the main branch. This is useful when you need to support multiple version lines simultaneously.

## Branch Naming Convention

Maintenance branches follow the pattern: `N.N.x` or `N.x`

Examples:
- `1.x` - Maintains all 1.x versions
- `1.0.x` - Maintains specifically the 1.0.x line
- `2.1.x` - Maintains the 2.1.x line

## Creating a Maintenance Branch

### 1. Create the branch from the appropriate version tag

```bash
# To maintain version 1.x, create from a 1.x tag
git checkout -b 1.x v1.5.0

# Or to maintain a specific minor version
git checkout -b 1.0.x v1.0.3
```

### 2. Push the branch to GitHub

```bash
git push origin 1.x
```

## Making Maintenance Fixes

### 1. Create a feature branch from the maintenance branch

```bash
git checkout 1.x
git pull origin 1.x
git checkout -b fix-issue-description
```

### 2. Make your changes and commit using conventional commits

Use the appropriate commit type:
- `fix:` for bug fixes (triggers a PATCH release)
- `feat:` for new features (triggers a MINOR release)

```bash
git commit -m "fix: resolve security vulnerability in validation"
```

### 3. Create a pull request

Create a PR targeting the maintenance branch (e.g., `1.x`), not `master`.

### 4. Merge and release

Once the PR is merged into the maintenance branch:
- The `Push to master` workflow will automatically run
- semantic-release will create a new patch release (e.g., `1.5.1`)
- The release will be published to npm/GitHub packages
- **Note:** Storybook documentation will NOT be deployed for maintenance branches

## What Happens Automatically

When you push to a maintenance branch:

✅ **Runs:**
- Build the library
- Run tests (via semantic-release)
- Create a GitHub release
- Publish to npm/GitHub packages
- Upload the dist folder as an artifact

❌ **Does NOT run:**
- Storybook build
- GitHub Pages deployment
- Percy visual testing

## Version Range Management

semantic-release automatically manages version ranges:
- Fixes on `1.x` will release as `1.5.1`, `1.5.2`, etc.
- Fixes on `1.0.x` will release as `1.0.4`, `1.0.5`, etc.
- Fixes on `2.1.x` will release as `2.1.1`, `2.1.2`, etc.

The main branch (`master`) continues to release independently (e.g., `3.0.0`, `3.1.0`, etc.).

## Best Practices

### Cherry-picking fixes from master

If a fix was already applied to `master`, you can cherry-pick it:

```bash
git checkout 1.x
git cherry-pick <commit-hash>
git push origin 1.x
```

### Backporting features

Be cautious when backporting features to maintenance branches:
- Only backport if absolutely necessary
- Ensure compatibility with the version line
- Consider if users can upgrade instead

### Keeping maintenance branches updated

Maintenance branches should only receive targeted fixes:
- ✅ Security patches
- ✅ Critical bug fixes
- ✅ Documentation updates
- ❌ New features (unless required for compatibility)
- ❌ Refactoring
- ❌ Dependency updates (unless security-related)

### Communication

When creating a maintenance release:
- Update the CHANGELOG (semantic-release does this automatically)
- Notify users through appropriate channels
- Document which versions are actively maintained

## Example Workflow

### Scenario: Fix a bug in version 1.x while working on version 3.x

1. **Create maintenance branch** (if it doesn't exist):
   ```bash
   git checkout -b 1.x v1.5.0
   git push origin 1.x
   ```

2. **Create fix branch**:
   ```bash
   git checkout 1.x
   git checkout -b fix-validation-error
   ```

3. **Make changes and commit**:
   ```bash
   # Make your changes
   git add .
   git commit -m "fix: correct validation error for email field"
   ```

4. **Push and create PR**:
   ```bash
   git push origin fix-validation-error
   # Create PR targeting 1.x branch
   ```

5. **Merge PR**:
   - Once approved, merge the PR into `1.x`
   - GitHub Actions will automatically run
   - semantic-release will publish `v1.5.1`

6. **Verify the release**:
   - Check GitHub Releases page
   - Verify package was published
   - Test the new version

## Troubleshooting

### Release not created

Check that:
- Your commit message follows conventional commits format
- The maintenance branch name follows the pattern `N.x` (e.g., `1.x`, `2.x`) or `N.N.x` (e.g., `1.0.x`, `2.1.x`)
- GitHub Actions workflow completed successfully
- semantic-release has permission to create releases

### Wrong version number

Ensure:
- The branch name matches the version you want to maintain
- You created the branch from the correct tag
- No conflicting tags exist

## Configuration

The maintenance branch configuration is defined in:

- **`.releaserc`**: Defines which branches trigger releases (matches `N.x` and `N.N.x` patterns)
- **`.github/workflows/master_push.yml`**: Defines which branches trigger CI/CD (uses glob patterns `[0-9]*.x` and `[0-9]*.[0-9]*.x`)

Both are configured to support maintenance branches following the `N.x` or `N.N.x` naming convention.

## Related Documentation

- [Semantic Release Documentation](https://semantic-release.gitbook.io/semantic-release/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [NEXT_BRANCH.md](./NEXT_BRANCH.md)

