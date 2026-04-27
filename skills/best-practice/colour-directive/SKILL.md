---
name: canopy-colour-directive
description: Best practices for applying colour modes and themes with the Canopy lgColour directive. Trigger when setting colours, themes, or colour modes on Canopy components in an Angular project.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/colour/docs/guide.mdx
---

# Canopy Colour Directive — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lgColour` directive from `@legal-and-general/canopy`.

Apply this skill whenever you use `lgColour` or `lgColourTheme` in an Angular project.

> For the underlying colour palette, design tokens, and brand principles, see the **`colour-foundation`** skill.

---

## Import

```ts
import { LgColourDirective } from '@legal-and-general/canopy';
```

Add to your standalone component's `imports` array.

---

## Basic Usage

Apply a colour mode to any Canopy component by adding the `lgColour` directive. The default colour mode is `blue`; the default theme is `neutral`.

```html
<lg-card lgColour="blue">
  <lg-card-content>Content</lg-card-content>
</lg-card>
```

Combine with `lgColourTheme` for a different visual intensity:

```html
<lg-card lgColour="green" lgColourTheme="bold">
  <lg-card-content>Content</lg-card-content>
</lg-card>
```

---

## Colour Modes

Choose the mode that matches the **semantic meaning** of the content:

| Mode | When to use |
|------|-------------|
| `blue` | Default. Standard components and general content. |
| `green` | Success, positive outcomes, or growth-focused content. |
| `red` | Errors, critical information, or urgent messaging. |
| `yellow` | Warnings or content requiring caution. |

> For status messaging specifically, use the appropriate mode to match the status type — blue for info, green for success, yellow for warning, red for error.

---

## Themes

Themes control the visual intensity of the colour mode:

| Theme | Appearance |
|-------|-----------|
| `neutral` | Light background with coloured accents (default). |
| `neutral-inverse` | Similar to neutral but with inverted contrast. |
| `subtle` | Very light tinted background, minimal contrast. |
| `bold` | Strong, high-contrast solid colour background. |

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `lgColour` | `'blue' \| 'green' \| 'red' \| 'yellow'` | `'blue'` | The colour mode to apply. |
| `lgColourTheme` | `'neutral' \| 'neutral-inverse' \| 'subtle' \| 'bold'` | `'neutral'` | The theme variation to apply. |

---

## Dos and Don'ts

### Do

1. **Do** choose a colour mode that reflects the semantic meaning of the content — use `red` for errors, `yellow` for warnings, `green` for success, and `blue` for neutral/general content.
2. **Do** use design tokens (CSS custom properties) when referencing colours in your own styles — for example `var(--card-background-colour)` — rather than raw hex values.
3. **Do** pair colour with an icon or other non-colour indicator when conveying status or errors, so the information is accessible to users who cannot distinguish colours.
4. **Do** keep colour variation consistent and purposeful within a page — apply a limited, coherent palette so users can rely on colour as a meaningful signal.
5. **Do** verify that any custom colour combinations you introduce meet WCAG contrast requirements (minimum 4.5:1 for normal text, 3:1 for large text).

### Don't

1. **Don't** use `yellow` for general marketing or promotional content — it is reserved for warnings and cautions. Use `blue` instead.
2. **Don't** override the CSS custom property values set by `lgColour` with custom colours (e.g. do not write `--card-background-colour: #42AEEA` in your own styles). This breaks the design token system.
3. **Don't** use raw hex values in place of design tokens — always reference the named token so colour changes propagate correctly.
4. **Don't** apply multiple different colour modes across related components on a single page without semantic purpose — mixing `blue`, `green`, `yellow`, and `red` on one view creates visual noise and dilutes meaning.
5. **Don't** rely on colour alone to convey status or error information — always include a supporting icon (e.g. the error ✕ icon in a red alert), so the message is accessible to all users.
6. **Don't** apply custom background colours directly to component elements via CSS — use the `lgColour` directive instead so all nested components inherit the correct design tokens.

---

## Design Constraints

- The `lgColour` directive adds `lg-mode-{colour}` and `lg-theme-{theme}` classes to the host element. All nested Canopy components automatically inherit and adapt to these classes via CSS custom properties — you do not need to apply the directive to child components.
- Colour modes and themes are defined by the design system. Do not create new modes or extend the existing ones with custom values.
