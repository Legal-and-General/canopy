---
name: canopy-side-nav
description: Best practices for the Canopy Side Nav component. Trigger when building sidebar navigation, account section navigation, or multi-page navigation panels in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/side-nav/docs/guide.mdx
---

# Canopy Side Nav — Best Practices

This skill provides usage guidance and input reference for the Canopy side nav components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgSideNavComponent` or `lg-side-nav`.

---

## Import

```ts
import {
  LgSideNavComponent,
  LgSideNavBarComponent,
  LgSideNavBarItemComponent,
  LgSideNavBarItemHeadingComponent,
  LgSideNavBarItemContentComponent,
  LgSideNavBarFooterComponent,
  LgSideNavBarLinkDirective,
  LgSideNavContentComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-side-nav>
  <lg-side-nav-bar label="Account navigation">

    <a id="nav-overview"
       routerLink="overview"
       [isActive]="true"
       lgSideNavBarLink>
      <lg-side-nav-bar-item>
        <lg-side-nav-bar-item-heading>Overview</lg-side-nav-bar-item-heading>
      </lg-side-nav-bar-item>
    </a>

    <a id="nav-details"
       routerLink="personal-details"
       lgSideNavBarLink>
      <lg-side-nav-bar-item>
        <lg-side-nav-bar-item-heading>Personal details</lg-side-nav-bar-item-heading>
        <lg-side-nav-bar-item-content>
          Your name, date of birth and National Insurance number.
        </lg-side-nav-bar-item-content>
      </lg-side-nav-bar-item>
    </a>

    <lg-side-nav-bar-footer>
      <a lg-button lgMarginTop="8" priority="secondary" [fullWidth]="false" href="#">
        Logout
      </a>
    </lg-side-nav-bar-footer>

  </lg-side-nav-bar>

  <lg-side-nav-content tabindex="0">
    <router-outlet></router-outlet>
  </lg-side-nav-content>
</lg-side-nav>
```

---

## Component Reference

| Component / Directive | Purpose |
|-----------------------|---------|
| `lg-side-nav` | Root container for the bar + content layout. |
| `lg-side-nav-bar` | Projects navigation link items. |
| `lgSideNavBarLink` | Directive applied to `<a>` to style and activate links. |
| `lg-side-nav-bar-item` | Wraps heading and optional description for each link. |
| `lg-side-nav-bar-item-heading` | Main label for a nav item. |
| `lg-side-nav-bar-item-content` | Optional descriptive text for a nav item. |
| `lg-side-nav-bar-footer` | Fixed footer area below the nav items (e.g. logout button). |
| `lg-side-nav-content` | Content display area — contains `<router-outlet>`. |

---

## LgSideNavBarLinkDirective Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `isActive` | `boolean` | `false` | Marks this link as the currently active route. |

---

## Design Constraints

- On mobile, the navigation bar moves **below** the content area, not to the left.
- `lg-side-nav-content` must contain `<router-outlet>` for route-based navigation.
- Always provide an accessible `label` on `lg-side-nav-bar` to identify the navigation region.
- This component is pending brand modernisation.
