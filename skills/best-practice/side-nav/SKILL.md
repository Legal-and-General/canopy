---
name: canopy-side-nav
description: Best practices for Canopy side navigation using lg-side-nav, link menus, routed account pages and content areas. Trigger when using LgSideNavComponent or building sidebar navigation, routed forms or account section navigation in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/side-nav/docs/guide.mdx
---

# Canopy Side Nav — Best Practices

Use the side nav for related pages within an account or service. Apply this guidance
whenever you use `LgSideNavComponent` or `lg-side-nav` from
`@legal-and-general/canopy`.

Compose one outer content area, a link menu and routed content. Treat the side-nav
components as layout and focus handling, not as a card surface.

---

## Import

```ts
import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  LgButtonComponent,
  LgColourDirective,
  LgContentAreaComponent,
  LgContentAreaContentComponent,
  LgContentAreaHeaderComponent,
  LgIconComponent,
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
  LgSideNavComponent,
  LgSideNavBarComponent,
  LgSideNavBarFooterComponent,
  LgSideNavBarLinkDirective,
  LgSideNavContentComponent,
} from '@legal-and-general/canopy';
```

Add the components and directives used in your template to your standalone
component's `imports` array. Use `Location` and `inject` for the optional back action.

---

## Basic Usage

```html
<lg-content-area lgColour="blue" lgColourTheme="neutral">
  <lg-content-area-header>
    <button lg-button type="button" priority="link" (click)="back()">
      <lg-icon name="arrow-left" />
      Back
    </button>
  </lg-content-area-header>
  <lg-content-area-content>
    <lg-side-nav>
      <lg-side-nav-bar label="Account navigation">
        <lg-link-menu>
          <a
            routerLink="personal-details"
            routerLinkActive
            #details="routerLinkActive"
            ariaCurrentWhenActive="page"
            [isActive]="details.isActive"
            lgSideBarNavLink
          >
            <lg-link-menu-item>
              <lg-link-menu-item-text [isBold]="true"
                >Personal details</lg-link-menu-item-text
              >
              <lg-link-menu-item-text>
                Name, date of birth and marital status.
              </lg-link-menu-item-text>
            </lg-link-menu-item>
          </a>
          <a
            routerLink="contact"
            routerLinkActive
            #contact="routerLinkActive"
            ariaCurrentWhenActive="page"
            [isActive]="contact.isActive"
            lgSideBarNavLink
          >
            <lg-link-menu-item>
              <lg-link-menu-item-text [isBold]="true">Contact</lg-link-menu-item-text>
              <lg-link-menu-item-text>Your contact information.</lg-link-menu-item-text>
            </lg-link-menu-item>
          </a>
        </lg-link-menu>
        <lg-side-nav-bar-footer>
          <button lg-button type="button" priority="secondary" (click)="logout()">
            Logout
          </button>
        </lg-side-nav-bar-footer>
      </lg-side-nav-bar>
      <lg-side-nav-content>
        <router-outlet />
      </lg-side-nav-content>
    </lg-side-nav>
  </lg-content-area-content>
</lg-content-area>
```

Configure the corresponding application routes. Use `RouterLinkActive` to drive
`isActive` and `aria-current`, so selection follows direct route entry and browser
back/forward navigation rather than just clicks.

Omit the header when no back action is needed. Keep only the back action in this
header. Implement it in your component, with an appropriate fallback destination
when there is no previous application page:

```ts
private location = inject(Location);

back(): void {
  this.location.back();
}
```

Omit the navigation footer when there is no secondary action. Implement `logout()`
using your application's authentication service; keep it outside the link menu.

---

## Component Reference

| Component / Directive     | Purpose                                                                     |
| ------------------------- | --------------------------------------------------------------------------- |
| `lg-content-area`         | Outer surface around both navigation and routed content.                    |
| `lg-content-area-content` | Contains the side-nav pattern within the outer area.                        |
| `lg-content-area-header`  | Optional back-action header.                                                |
| `lg-side-nav`             | Responsive navigation and content layout.                                   |
| `lg-side-nav-bar`         | Labelled navigation region containing the link menu.                        |
| `lg-link-menu`            | Groups navigation anchors.                                                  |
| `lg-link-menu-item`       | Content of each navigation anchor.                                          |
| `lg-link-menu-item-text`  | Label or optional description; use `[isBold]="true"` for the main label.    |
| `lgSideBarNavLink`        | Applies current-route state and emits activation.                           |
| `lg-side-nav-bar-footer`  | Optional secondary action below the link menu; not a fixed-position footer. |
| `lg-side-nav-content`     | Focus target containing the routed content outlet.                          |

---

## Inputs and Outputs

### LgSideNavBarComponent Inputs

| Input   | Description                                | Type     | Default | Required |
| ------- | ------------------------------------------ | -------- | ------- | -------- |
| `label` | Accessible name for the navigation region. | `string` | `'Nav'` | No       |

### LgSideNavBarLinkDirective Inputs

Use the exact selector `lgSideBarNavLink` on each navigation anchor.

| Input      | Description                                    | Type      | Default | Required |
| ---------- | ---------------------------------------------- | --------- | ------- | -------- |
| `isActive` | Whether the link represents the current route. | `boolean` | `false` | No       |

### LgSideNavBarLinkDirective Outputs

| Output      | Description                                                                                  | Value                |
| ----------- | -------------------------------------------------------------------------------------------- | -------------------- |
| `activated` | Emitted when `isActive` is set to a truthy value. Used by the side nav to focus its content. | `EventEmitter<void>` |

---

## Dos and Don'ts

### Do

1. **Do** wrap both columns in one content area to provide the shared surface.
2. **Do** give the navigation a meaningful `label` and identify the current link with `aria-current="page"`.
3. **Do** use link-menu text components for labels and optional descriptions.
4. **Do** retain `lg-side-nav-content` and its router outlet so activation can focus the routed region.

### Don't

1. **Don't** wrap the side nav or its panels in cards or nested content areas.
2. **Don't** hard-code `isActive` or track a clicked index instead of the router's active state.
3. **Don't** place Logout inside the link menu; use the navigation footer.
4. **Don't** add `tabindex="0"` to the content region; retain its built-in programmatic focus target.

---

## Colour Modes and Themes

Apply `lgColour` and `lgColourTheme` to the outer `lg-content-area`, using
`LgColourDirective`. Use one shared colour context for navigation and routed content.

- Choose `lgColour` from `blue`, `green`, `red` or `yellow`.
- Choose `lgColourTheme` from `neutral`, `neutral-inverse`, `subtle` or `bold`.
- Bind `[lgColour]="mode"` and `[lgColourTheme]="theme"` when values are dynamic.
- Do not add `mode` or `theme` inputs to `lg-side-nav`; apply the colour directive to the outer area instead.

---

## Routed Content Spacing

Use the supplied content-area content sections for each column. Do not insert
another content-area wrapper inside `lg-side-nav-content`.

Expect routed component hosts and their directly nested forms to use column flex
layout and `--content-area-gap`. Their immediate children's block margins are reset
so form-field bottom margins do not add to the gap. Preserve internal spacing for
labels, hints and validation messages. Provide layout for additional nested groups
explicitly; the reset does not target every descendant form or field.

---

## Design Constraints

- At `64rem` and above, place navigation on the left and routed content on the right, using the supplied nominal `1:2` flex proportions.
- Below `64rem`, expect navigation below the content, not alongside it.
- Let the layout fill the available content-area width; do not assume an exact 4/8 grid split or a fixed 12-column minimum page width.
- Keep `router-outlet` inside `lg-side-nav-content` for route-based navigation.

---

## Existing Navigation Items

Keep existing `LgSideNavBarItemComponent`, `LgSideNavBarItemHeadingComponent` and
`LgSideNavBarItemContentComponent` imports only where legacy templates still use
them; these exports remain available. Use link-menu components for new layouts or
when adopting the updated pattern.
