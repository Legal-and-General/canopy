---
name: design-tokens
description: Foundation guidance for Canopy design tokens. Trigger when applying CSS custom properties for colour, typography, spacing, or component styling in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/docs/foundation/design-tokens.mdx
---

# Canopy Design Tokens — Foundation

This skill provides guidance on how to use Canopy design tokens correctly when applying custom styles.

Apply this skill when styling components or pages that are not fully covered by existing Canopy component styles.

---

## Token Tiers

Canopy tokens are organised into three tiers. **Always use the lowest, most specific tier available.**

### 1. Component Tokens (first choice)

Specific to a single component. Use these whenever they exist.

Examples:
- `--button-primary-active-background-colour`
- `--card-border-radius`
- `--nav-button-gap`

### 2. Semantic Tokens (second choice)

Map to UI roles (containers, interactive elements, text). Use when no component token exists.

Examples:
- `--container-background-colour`
- `--interactive-border-radius`
- `--input-background-colour`

### 3. Foundation Tokens (last resort)

Raw atomic values. **Do not use directly in product code unless no other token exists.**

Examples:
- `--colour-blue-100`
- `--font-size-small-1`
- `--dimensions-large-6`

---

## Token Modes

Tokens support multiple modes:

| Mode type | Options |
|-----------|---------|
| **Colour** | Blue (default), Green, Red, Yellow |
| **Layout** | SM, MD, LG, XL, XXL (breakpoint-responsive) |
| **Typography** | Productive, Expressive |
| **Component theme** | Neutral, Neutral inverse, Subtle, Bold |

For example, `--colour-surface-fill-1` returns a different value in each colour mode. `--border-radius-5` is 20px at SM/MD but 24px at LG+.

---

## Usage in Code

If you are using the Canopy Angular library, design tokens are **included automatically**. No additional installation is needed.

For projects that only need the tokens (without Angular components):

```bash
npm install @legal-and-general/canopy-design-tokens
```

---

## Usage Priority Rule

When styling a component:

1. **Use component tokens** — e.g. `--button-primary-rest-background-colour`
2. **Use semantic tokens** — e.g. `--container-background-colour`
3. **Use foundation tokens only as a last resort** — if using one, consider whether a new semantic/component token should be proposed instead

---

## Dos and Don'ts

### Do

1. **Do** use component-tier tokens first when styling Canopy components.
2. **Do** use semantic tokens for layout and UI role styling.
3. **Do** check whether a token already exists before writing a raw value.

### Don't

1. **Don't** use foundation tokens in product code if a semantic or component token exists.
2. **Don't** hardcode raw values (e.g. `#005dba`) where a token is available.
