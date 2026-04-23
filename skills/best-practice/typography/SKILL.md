---
name: typography
description: Foundation guidance for Canopy typography. Trigger when choosing font sizes, font weights, type scales, productive vs expressive text, or applying typography CSS variables in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/docs/foundation/typography/typography.mdx
---

# Canopy Typography — Best Practices

This skill provides guidance on using the Canopy typography system correctly in an Angular project.

Apply this skill when choosing type sizes, weights, families, or applying the `lg-font--expressive` modifier class.

---

## Two Type Systems

Canopy has two type systems. Use the correct one for each context:

| System | Font | Use when |
|--------|------|----------|
| **Productive** (default) | Nunito Sans | All body text, tabular data, interactive elements (buttons, labels). Use in the vast majority of cases. |
| **Expressive** | ABC Otto | Marketing pages, home pages, display headings where brand personality is needed. |

---

## Productive Text

Apply productive styles by default — no class is needed. Productive type is Nunito Sans, available from Google Fonts.

---

## Expressive Text

Apply the expressive modifier class to a heading or text element:

```html
<h1 class="lg-font--expressive">Our products</h1>
```

Or on a Canopy component that supports it:

```html
<lg-content-area-title [headingLevel]="1" class="lg-font--expressive">
  Welcome
</lg-content-area-title>
```

---

## Typography CSS Variables

Use these CSS custom properties to apply typographic styles consistently.

### Font Families

| Variable | Description |
|----------|-------------|
| `--font-family-productive` | Nunito Sans |
| `--font-family-expressive` | ABC Otto |

### Font Weights

| Variable | Value | Description |
|----------|-------|-------------|
| `--font-weight-regular` | 400 | Regular weight |
| `--font-weight-medium` | 500 | Medium weight (used for labels) |
| `--font-weight-bold` | 700 | Bold weight |

### Font Sizes

Sizes are responsive — they change between `sm–md` and `lg` breakpoints.

| Variable | sm–md | lg |
|----------|-------|----|
| `--font-size-0-6` | 12px | 12px |
| `--font-size-0-8` | 14px | 14px |
| `--font-size-1` | 16px | 16px |
| `--font-size-2` | 20px | 20px |
| `--font-size-3` | 24px | 24px |
| `--font-size-4` | 28px | 32px |
| `--font-size-5` | 32px | 40px |
| `--font-size-6` | 40px | 48px |
| `--font-size-7` | 48px | 62px |
| `--font-size-8` | 56px | 76px |
| `--font-size-9` | 68px | 115px |

---

## Dos and Don'ts

### Do

1. **Do** use consistent headings to indicate hierarchy.
2. **Do** use a minimum of 16px (`--font-size-1`) for paragraph text or data points.
3. **Do** use bold text to emphasise information.
4. **Do** check colour contrast of text on backgrounds (see the `colour-foundation` skill).
5. **Do** centre-align text for empty or loading states.

### Don't

1. **Don't** use any font sizes or weights not in the type system.
2. **Don't** use italic text to emphasise information.
3. **Don't** use expressive text for paragraphs or anything below `--font-size-4` (32px).
4. **Don't** centre-align large passages of copy.
