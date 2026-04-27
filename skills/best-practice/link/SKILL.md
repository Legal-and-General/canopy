---
name: canopy-link
description: Best practices for Canopy link styles. Trigger when using anchor tags, links with icons, external links, or the lg-unstyled-link class in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/styles/docs/link/guide.mdx
---

# Canopy Link — Best Practices

This skill provides guidance on using links correctly in applications built with Canopy.

Apply this skill whenever you add `<a>` elements, links with icons, or external links.

---

## Basic Usage

Use the standard HTML anchor element — Canopy global CSS automatically applies the correct styles:

```html
<a href="https://example.com">Visit Example</a>
```

No import or component is needed for plain anchor links.

---

## Links with Icons

Include an icon before the link text to provide additional context (e.g. file type):

```html
<a href="#">
  <lg-icon name="pdf"></lg-icon>
  Download PDF guide
</a>
```

---

## External Links

External links must open in a new tab, use the `link-external` icon after the text, and include visually hidden text for screen readers:

```html
<a href="https://example.com" target="_blank">
  Read more about accessibility
  <lg-icon name="link-external"></lg-icon>
  <span class="lg-visually-hidden">opens in a new tab</span>
</a>
```

---

## Accessible Link Text

When the visible link text lacks sufficient context, add visually hidden supplementary text:

```html
<a href="#">Read more<span class="lg-visually-hidden"> about accessibility guidance</span></a>
```

---

## Colour Modes

Links automatically inherit the appropriate colour based on their parent colour theme:

- Default context: blue links.
- Status contexts (success, error): monochrome links.
- Bold backgrounds: white (blue/green/red) or black (yellow).

---

## Removing Link Styles

To remove Canopy link styles from a custom component, use the `lg-unstyled-link` SCSS mixin:

```scss
.my-custom-link {
  @include lg-unstyled-link;
}
```

---

## Dos and Don'ts

### Do

1. **Do** use links for navigation — when the element takes a user to a new page, view, or resource.
2. **Do** write concise, meaningful link text that describes the destination or purpose.
3. **Do** use icons to provide additional context (e.g. file type, external link).
4. **Do** use the external link icon and visually hidden text for links opening in a new tab.
5. **Do** group related links at the end of sections to aid navigation.

### Don't

1. **Don't** use links for primary actions — use a button or quick action instead.
2. **Don't** use generic phrases like "click here" or "read more" without context.
3. **Don't** use unnecessarily long link text — keep it concise without sacrificing clarity.
