---
name: canopy-accessibility
description: Accessibility guidance for Canopy applications. Trigger when implementing accessible HTML, ARIA attributes, keyboard navigation, skip links, screen reader support, or form accessibility in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/docs/principles/accessibility/developer.mdx
---

# Canopy Accessibility — Best Practices

This skill provides developer-focused accessibility guidance for applications built with Canopy.

Apply this skill when implementing any HTML structure, forms, navigation, or dynamic content.

> All Canopy components are built to be accessible. This skill covers what you need to do in your application code beyond using Canopy components.

---

## Document Language

Always declare the page language so assistive technologies use the correct voice profile:

```html
<html lang="en">
```

For inline language switches:

```html
<p>You could have <i lang="it">una frase in italiano</i></p>
```

---

## Skip to Main Content

Provide a skip link so keyboard users can bypass repeated header/nav content. Use the `skip-content` CSS class:

```html
<a href="#main" class="skip-content">Skip to main content</a>
...
<main id="main">...</main>
```

> `lg-page` automatically provides this link — you do not need to add it manually when using the Page component.

---

## Images

- Provide descriptive `alt` text for all **content images**.
- Set `alt=""` (empty string) for decorative images.
- Never omit the `alt` attribute entirely.

```html
<img src="chart.png" alt="Bar chart showing quarterly revenue growth" />
<img src="decorative-divider.png" alt="" />
```

---

## Videos and Audio

Provide a transcript for all video and audio content. Use the Canopy `lg-details` component to house the transcript in a collapsible section. Add captions for videos (transcript synchronised with audio).

---

## Tables

- Use `<th>` for header cells and `<td>` for data cells.
- Add `scope="col"` or `scope="row"` for tables where the header direction is ambiguous.
- Provide a `<caption>` to identify the table's topic.

> Use the Canopy `lg-table` component — it follows these standards automatically.

---

## Forms

- Every form control must have a `<label>` linked via `for`/`id`, or wrapped around the control.
- Group related controls (checkboxes, radio buttons) with `<fieldset>` and `<legend>`.
- Mark required controls with the `required` attribute.

> Canopy form components handle label association and grouping automatically.

---

## Hiding Content

| Goal | Method |
|------|--------|
| Hide from all users | `visibility: hidden` or `display: none` |
| Hide from screen readers only | `aria-hidden="true"` |
| Show to screen readers only | `class="lg-visually-hidden"` |

```html
<lg-icon name="arrow-right" aria-hidden="true"></lg-icon>
<span class="lg-visually-hidden">opens in a new tab</span>
```

---

## Landmark Regions

Use HTML5 semantic elements and ARIA roles to help screen reader users navigate:

```html
<header role="banner">
  <nav role="navigation">...</nav>
</header>
<main role="main">...</main>
<footer role="contentinfo">...</footer>
```

---

## Accessibility Checklist

- [ ] Page `lang` attribute is set.
- [ ] Skip link is present (or `lg-page` is used).
- [ ] All images have `alt` text (or `alt=""`).
- [ ] All form controls have labels.
- [ ] Grouped form controls use `<fieldset>` + `<legend>`.
- [ ] Tables use `<th>`, `<td>`, and `scope` appropriately.
- [ ] Decorative icons have `aria-hidden="true"`.
- [ ] Screen-reader-only text uses `lg-visually-hidden`.
- [ ] Page uses semantic landmark elements.
