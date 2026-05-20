---
name: canopy-footer
description: Best practices for the Canopy Footer component. Trigger when adding a site footer, footer navigation, or footer logos in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/footer/docs/guide.mdx
---

# Canopy Footer — Best Practices

This skill provides usage guidance and input reference for the Canopy footer components from `@legal-and-general/canopy`.

Apply this skill whenever you use the `lg-footer` attribute selector or `LgFooterComponent`.

---

## Import

```ts
import {
  LgFooterComponent,
  LgFooterNavComponent,
  LgFooterNavItemComponent,
  LgFooterLogoComponent,
  LgFooterCopyrightComponent,
  LgFooterSocialComponent,
  LgFooterStickersComponent,
  LgFooterFootnoteComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

The footer uses an **attribute selector** — apply `lg-footer` to a native `<footer>` element.

```html
<footer lg-footer>
  <lg-footer-footnote>
    Important disclaimer text
  </lg-footer-footnote>

  <lg-footer-social>
    <a href="https://facebook.com/company" aria-label="Facebook">
      <lg-icon name="facebook" size="sm"></lg-icon>
    </a>
  </lg-footer-social>

  <lg-footer-nav>
    <lg-footer-nav-item>
      <a href="/account">My account</a>
    </lg-footer-nav-item>
    <lg-footer-nav-item>
      <a href="/privacy">Privacy</a>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-logo src="/assets/logo.svg" alt="Company name"></lg-footer-logo>
  <lg-footer-copyright>© Company 2024</lg-footer-copyright>
</footer>
```

---

## Migration from Previous Versions

The footer component has been updated to simplify its structure and add new features.

### Changes

1. **Primary and secondary links merged**: The `variant` input has been removed from `lg-footer-nav`. All links now go in a single `lg-footer-nav` component.

2. **New components added**:
   - `lg-footer-social` - For social media icons (maximum 8)
   - `lg-footer-stickers` - For award badges and co-branding logos
   - `lg-footer-footnote` - For disclaimers and floating text

### Before (deprecated)

```html
<footer lg-footer>
  <lg-footer-nav variant="primary">
    <lg-footer-nav-item>
      <a href="/account">My account</a>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-nav variant="secondary">
    <lg-footer-nav-item>
      <a href="/privacy">Privacy</a>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-logo src="logo.svg" alt="Company"></lg-footer-logo>
  <lg-footer-copyright>© Company 2024</lg-footer-copyright>
</footer>
```

### After (new structure)

```html
<footer lg-footer>
  <lg-footer-footnote>
    Important disclaimer text
  </lg-footer-footnote>

  <lg-footer-social>
    <a href="https://facebook.com/company" aria-label="Facebook">
      <lg-icon name="facebook" size="sm"></lg-icon>
    </a>
  </lg-footer-social>

  <lg-footer-nav>
    <lg-footer-nav-item>
      <a href="/account">My account</a>
    </lg-footer-nav-item>
    <lg-footer-nav-item>
      <a href="/privacy">Privacy</a>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-logo src="logo.svg" alt="Company"></lg-footer-logo>
  <lg-footer-copyright>© Company 2024</lg-footer-copyright>
</footer>
```

---

## Component Details

### LgFooterComponent

This component uses an attribute selector which allows the use of the HTML `<footer>` element as the host.

### LgFooterNavComponent

Container for navigation items. The component now accepts a single merged list of all footer links (previously separated into primary and secondary variants).

- Anchor tags projected into `lg-footer-nav` automatically receive `rel="noopener"`.
- Button tags projected into `lg-footer-nav` automatically receive `type="button"`.

### LgFooterNavItemComponent

Container for individual navigation items. Supports both `<a>` and `<button>` elements.

### LgFooterSocialComponent

Container for social media icon links. **Maximum of 8 icons** recommended for optimal display. A console warning will be logged if more than 8 links are detected.

Icons should be wrapped in anchor or button elements with appropriate `aria-label` attributes for accessibility.

```html
<lg-footer-social>
  <a href="https://facebook.com/company" aria-label="Facebook">
    <lg-icon name="facebook" size="sm"></lg-icon>
  </a>
  <a href="https://linkedin.com/company" aria-label="LinkedIn">
    <lg-icon name="linkedin" size="sm"></lg-icon>
  </a>
</lg-footer-social>
```

### LgFooterStickersComponent

Container for award badges, certifications, or co-branding partner logos. These appear below the main footer logo on mobile and to the left of the logo on desktop.

```html
<lg-footer-stickers>
  <img src="award-badge.svg" alt="Best Company Award 2024" />
  <img src="certification.svg" alt="ISO Certified" />
</lg-footer-stickers>
```

### LgFooterFootnoteComponent

Container for disclaimer text or additional information. Displays at the top of the footer structure with a separator line.

```html
<lg-footer-footnote>
  Important disclaimer text
</lg-footer-footnote>
```

### LgFooterCopyrightComponent

Container for copyright text. On desktop, appears on the left side of the footer. On mobile, appears below the logo and stickers.

```html
<lg-footer-copyright>© Company 2024</lg-footer-copyright>
```

### LgFooterLogoComponent

Displays the main footer logo. For co-branding, use two `lg-footer-logo` components — they will display side by side with the L&G logo (primary) on the left and the partner logo (secondary) on the right.

---

## LgFooterLogoComponent Inputs

| Input | Type     | Default     | Required | Description            |
|-------|----------|-------------|----------|------------------------|
| `src` | `string` | `undefined` | Yes      | Logo image URL.        |
| `alt` | `string` | `''`        | Yes      | Alt text for the logo. |

---

## Responsive Behaviour

### Desktop Layout

- Copyright text appears on the left
- Stickers appear in the centre (when present)
- Logo appears on the right
- For co-branded logos: L&G logo on the left, partner logo on the right

### Mobile Layout

- Logo appears at the top
- Stickers appear below the logo
- Copyright text appears below the stickers

---

## Design Constraints

- Logo height is set internally and cannot be modified
- Override logo widths with CSS custom properties:

```css
--footer-logo-size: 120px;
--footer-second-logo-width: 80px;
--footer-second-logo-width-lg: 100px;
```

- Maximum of 8 social media links recommended (component will warn in console if exceeded)
- Footer navigation link states use mono link colours:
  - Hover: `--link-mono-hover-colour`
  - Focus: `--link-mono-focus-colour` (with visible border)
  - Active: `--link-mono-active-colour`
  - Visited: `--link-mono-visited-colour`
