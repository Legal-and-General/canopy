---
name: canopy-header
description: Best practices for the Canopy Header component. Trigger when adding a site header, primary navigation, account menu, or logo in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/header/docs/guide.mdx
---

# Canopy Header — Best Practices

This skill provides usage guidance and input reference for the Canopy header components from `@legal-and-general/canopy`.

Apply this skill whenever you use the `lg-header` attribute selector or `LgHeaderComponent`.

---

## Import

```ts
import {
  LgHeaderComponent,
  LgHeaderLogoComponent,
  LgPrimaryNavComponent,
  LgPrimaryNavListItemComponent,
  LgPrimaryNavItemDirective,
  LgAccountMenuComponent,
  LgAccountMenuListItemComponent,
  LgAccountMenuItemDirective,
  LgAccountMenuItemLabelComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

The header uses an **attribute selector** — apply `lg-header` to a native `<header>` element.

```html
<header lg-header>
  <lg-header-logo src="/assets/logo.svg" alt="Company name" href="/"></lg-header-logo>
</header>
```

---

## With Primary Navigation and Account Menu

```html
<header lg-header (menuToggled)="onMenuToggle($event)">
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>

  <lg-primary-nav [showResponsiveMenu]="showMenu">
    <lg-primary-nav-list-item>
      <a href="/" [isActive]="true" lgPrimaryNavItem>Home</a>
    </lg-primary-nav-list-item>
    <lg-primary-nav-list-item>
      <a href="/products" lgPrimaryNavItem>Products</a>
    </lg-primary-nav-list-item>
  </lg-primary-nav>

  <lg-account-menu>
    <lg-account-menu-list-item>
      <a href="/profile" lgAccountMenuItem>
        <lg-account-menu-item-label>Profile</lg-account-menu-item-label>
        <lg-icon name="profile"></lg-icon>
      </a>
    </lg-account-menu-list-item>
    <lg-account-menu-list-item>
      <button type="button" lgAccountMenuItem>
        <lg-account-menu-item-label>Sign out</lg-account-menu-item-label>
        <lg-icon name="sign-in"></lg-icon>
      </button>
    </lg-account-menu-list-item>
  </lg-account-menu>
</header>
```

---

## Inputs & Outputs

### LgHeaderComponent Outputs

| Output | Type | Description |
|--------|------|-------------|
| `menuToggled` | `EventEmitter<boolean>` | Emitted when the mobile menu toggle is clicked. |

### LgHeaderLogoComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `src` | `string` | — | Yes | Logo image URL. |
| `alt` | `string` | `''` | Yes | Alt text for the logo. |
| `href` | `string` | — | No | Link URL if the logo is clickable. |

### LgPrimaryNavComponent Inputs

| Input | Type | Description |
|-------|------|-------------|
| `showResponsiveMenu` | `boolean` | Shows or hides the responsive mobile menu. |

---

## Co-branding

Use two `lg-header-logo` components side by side for a co-branded header:

```html
<header lg-header>
  <lg-header-logo src="/assets/lg-logo.svg" alt="Legal & General"></lg-header-logo>
  <lg-header-logo src="/assets/partner-logo.svg" alt="Partner name"></lg-header-logo>
</header>
```

Override logo widths via CSS custom properties:

```css
--header-logo-width: 120px;
--header-logo-width-lg: 160px;
--header-second-logo-width: 80px;
--header-second-logo-width-lg: 100px;
```

