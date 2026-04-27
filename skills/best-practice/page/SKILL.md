---
name: canopy-page
description: Best practices for the Canopy Page component. Trigger when setting up a full-page layout with a header and footer in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/page/docs/guide.mdx
---

# Canopy Page — Best Practices

This skill provides usage guidance for the Canopy `lg-page` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgPageComponent` to lay out a full page.

---

## Import

```ts
import {
  LgPageComponent,
  LgGridContainerDirective,
  LgGridRowDirective,
  LgGridColDirective,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-page>
  <header lg-header lgMarginBottom="none">
    <!-- header content -->
  </header>

  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12" [lgColMd]="8">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>

  <footer lg-footer>
    <!-- footer content -->
  </footer>
</lg-page>
```

---

## Content Projection Slots

| Slot | Description |
|------|-------------|
| `lg-header` | Projects into the header area at the top of the page. |
| `lg-footer` | Projects into the footer area at the bottom of the page. |
| `<default>` | Any other content is projected into the central column. |

---

## Wrapping Header and Footer

Use `ngProjectAs` to use wrapper components while still targeting the correct slots:

```html
<lg-page>
  <app-header ngProjectAs="[lg-header]"></app-header>
  <router-outlet></router-outlet>
  <app-footer ngProjectAs="[lg-footer]"></app-footer>
</lg-page>
```

---

## Design Constraints

- Combine `lg-page` with the grid directives (`lgContainer`, `lgRow`, `lgCol`) to create a responsive layout for the main content area.
- `lg-page` automatically adds a "skip to main content" link for accessibility.
