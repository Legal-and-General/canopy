---
name: colour-foundation
description: Best practices for Canopy's colour palette, design tokens, colour modes, tones, and accessibility principles. Trigger when choosing colours, referencing colour tokens, or structuring colour usage across an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/docs/foundation/colours/colours.mdx
---

# Canopy Colour Foundation — Best Practices

This skill covers Canopy's colour principles, palette, design tokens, colour modes, tonal themes, and status colours.

Apply this skill when deciding which colours to use, referencing colour tokens, or structuring colour across any Canopy-based Angular project.

> To apply a colour mode programmatically to a Canopy component, see the **`colour-directive`** skill (`lgColour` / `lgColourTheme`).

---

## Setup

Import the Canopy stylesheet in your `angular.json` to activate all colour tokens:

```json
"styles": [
  "node_modules/@legal-and-general/canopy/canopy.css"
]
```

---

## Colour Principles

1. **Use only approved tokens** — always use the design tokens specified in the component guidance, never raw hex values or custom tokens.
2. **Clarity and accessibility** — all Canopy colour combinations meet or exceed WCAG 2.2 AA contrast standards.
3. **Consistency** — apply the same colour roles across all products; never mix colour modes within a single view (card, panel, content area, or page).
4. **Favour neutral backgrounds** — use off-white or white as the default background; white space is a key brand device.
5. **Flat design language** — gradients and shadows are not permitted.

---

## Colour Modes

Blue is the default and preferred mode for all Canopy products. Only use other modes when there is a clear, approved branding requirement.

| Mode | Brand name | Typical use |
|------|-----------|-------------|
| `blue` | Breezy Blue | Default. Standard products and general content. |
| `green` | Plush Green | Positive outcomes, growth-focused content. |
| `red` | Crimson Blaze | Errors, critical information, urgent messaging. |
| `yellow` | Golden Sun | Warnings, cautions. |

> Lead with blue. Most experiences should use blue as the primary mode. Green, red, and yellow may be used sparingly for brand personality but must **never be mixed within the same view**.

---

## Tonal Themes

Within each colour mode, four tones control visual intensity:

| Tone | When to use |
|------|-------------|
| `neutral` | Default. Productive environments — dashboards, forms, product pages. |
| `neutral-inverse` | Reversed contrast scenarios. |
| `subtle` | Gentle brand expression, highlight key messages or promotions. |
| `bold` | Strong brand presence — marketing pages, onboarding, branded apps. |

Apply tones purposefully to ensure clarity, hierarchy, and accessibility.

---

## Status Colours

Status colours communicate feedback states. They are consistent regardless of the parent container's colour mode.

| Status | Meaning |
|--------|---------|
| Info | General information and guidance. |
| Success | Successful actions or positive outcomes. |
| Warning | Cautionary or potentially risky situations. |
| Error | Problems, failures, or required user action. |
| Generic | Messages that require attention but don't fit the above. |

**Always pair status colours with an appropriate icon** — never rely on colour alone to convey meaning.

Status colours are only used on specific components: inline message, details, and banner.

---

## Design Tokens

Reference colour tokens using CSS custom properties — never use raw hex values:

```scss
// Correct
color: var(--colour-blue-600);
background: var(--colour-greyscale-100);

// Wrong
color: #0076D6;
```

Available token families: `--colour-blue-{N}`, `--colour-green-{N}`, `--colour-red-{N}`, `--colour-yellow-{N}`, `--colour-greyscale-{N}` where `N` is a numeric scale value (e.g. 200, 400, 600, 800).

---

## Dos and Don'ts

### Do

1. **Do** lead with `blue` — it is the default mode for all Canopy products and experiences.
2. **Do** use only the approved Canopy colour tokens specified in the component guidance — never invent your own or use raw colour values.
3. **Do** use only one colour mode per view — mixing modes within the same card, panel, content area, or page is not permitted.
4. **Do** apply tones purposefully — use `neutral` for productivity UIs and `bold` for brand-led moments.
5. **Do** check colour contrast — ensure all combinations meet WCAG 2.2 AA (4.5:1 for normal text, 3:1 for large text and UI components).
6. **Do** favour neutral backgrounds and embrace white space — use off-white or white as the default background.
7. **Do** always pair status colours with an appropriate icon — never rely on colour alone to communicate status.

### Don't

1. **Don't** use `green`, `red`, or `yellow` modes unless there is a clear, approved branding requirement — `blue` must be the default.
2. **Don't** reference or hard-code raw brand colour values — always use the design tokens from the component guidance.
3. **Don't** mix colour modes within a single view — consistency within each view is essential for brand recognition and accessibility.
4. **Don't** use gradients or shadows — the Canopy design language is flat.
5. **Don't** override or customise tokens — unapproved changes risk breaking consistency and accessibility.
6. **Don't** use bold or signature brand colours excessively — reserve them for emphasis or key brand moments, not as default backgrounds.
7. **Don't** use colour combinations that fail WCAG 2.2 AA contrast requirements.

---

## Accessibility

- Normal text: minimum 4.5:1 contrast ratio.
- Large text (≥18pt/24px, or ≥14pt/18.66px bold): minimum 3:1.
- UI components and icons: minimum 3:1.

Using Canopy's colour modes and tokens correctly will ensure these standards are met. Always verify your own colour choices when combining elements or creating custom layouts.
