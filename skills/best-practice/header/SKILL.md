---
name: canopy-header
description: Best practices for the Canopy Header component. Trigger when adding a site header, primary navigation, account menu, notification badge, or logo in an Angular project using Canopy.
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
  LgPrimaryNavMobileItemDirective,
  LgAccountMenuComponent,
  LgAccountMenuListItemComponent,
  LgAccountMenuItemDirective,
  LgAccountMenuItemLabelComponent,
  LgAccountMenuMobileItemDirective,
  LgNotificationBadgeComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
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

## Co-branding

Use two `lg-header-logo` components side by side for a co-branded header:

```html
<header lg-header>
  <lg-header-logo src="/assets/lg-logo.svg" alt="Legal & General" href="/"></lg-header-logo>
  <lg-header-logo src="/assets/partner-logo.svg" alt="Partner name" href="/"></lg-header-logo>
</header>
```

Legacy `--header-*` logo width variables are no longer used by the header/logo styles.

Use the default Canopy header/logo sizing behaviour and provide appropriately sized
logo assets for your brand.

---

## With Primary Navigation and Account Menu

The navigation has **two separate sets of items** — one for desktop (`lg` breakpoint and above) and one for mobile (below `lg`). Both must be explicitly provided.

- **Desktop items**: use `lg-primary-nav-list-item` + `lgPrimaryNavItem`
- **Mobile primary nav items**: use `lgPrimaryNavMobileItem` + `lg-link-menu-item` structure, projected inside `lg-primary-nav`
- **Mobile account menu items**: use `lgAccountMenuMobileItem` + `lg-link-menu-item` structure, also projected inside `lg-primary-nav`
- **Desktop account menu items**: use `lg-account-menu` + `lg-account-menu-list-item` + `lgAccountMenuItem` — these are always visible in the header bar

```html
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>
  <lg-notification-badge lgMenuBadge variant="dot" accessText="You have unread messages"></lg-notification-badge>

  <lg-primary-nav>
    <!-- Desktop navigation items (visible at lg+) -->
    <lg-primary-nav-list-item>
      <a href="/" [isActive]="true" lgPrimaryNavItem>Link 1</a>
    </lg-primary-nav-list-item>
    <lg-primary-nav-list-item>
      <a href="/products" lgPrimaryNavItem>
        Link 2
        <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
      </a>
    </lg-primary-nav-list-item>

    <!-- Mobile primary nav items (visible below lg) -->
    <a lgPrimaryNavMobileItem href="/">
      <lg-link-menu-item>
        <lg-link-menu-item-text>Link 1</lg-link-menu-item-text>
      </lg-link-menu-item>
    </a>
    <a lgPrimaryNavMobileItem href="/products">
      <lg-link-menu-item>
        <lg-link-menu-item-text>Link 2</lg-link-menu-item-text>
        <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
      </lg-link-menu-item>
    </a>

    <!-- Mobile account menu items (visible below lg, projected into nav dropdown) -->
    <a lgAccountMenuMobileItem href="/account">
      <lg-link-menu-item>
        <lg-link-menu-item-text>Account</lg-link-menu-item-text>
      </lg-link-menu-item>
    </a>
    <a lgAccountMenuMobileItem href="/sign-out">
      <lg-link-menu-item>
        <lg-link-menu-item-text>Sign out</lg-link-menu-item-text>
      </lg-link-menu-item>
    </a>
  </lg-primary-nav>

  <!-- Account menu items visible in header bar on mobile and desktop -->
  <lg-account-menu>
    <lg-account-menu-list-item>
      <a href="/account" lgAccountMenuItem>
        <lg-account-menu-item-label>Account</lg-account-menu-item-label>
        <lg-icon name="profile"></lg-icon>
      </a>
    </lg-account-menu-list-item>
    <lg-account-menu-list-item>
      <a href="/sign-out" lgAccountMenuItem>
        <lg-account-menu-item-label>Sign out</lg-account-menu-item-label>
        <lg-icon name="sign-in"></lg-icon>
      </a>
    </lg-account-menu-list-item>
  </lg-account-menu>
</header>
```

---

## Co-branded with Navigation

Combine two `lg-header-logo` elements with the full navigation structure:

```html
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>
  <lg-header-logo [src]="secondaryLogo" [alt]="secondaryLogoAlt" [href]="secondaryLogoHref"></lg-header-logo>
  <lg-notification-badge lgMenuBadge variant="dot" accessText="You have unread messages"></lg-notification-badge>

  <lg-primary-nav>
    <lg-primary-nav-list-item>
      <a href="/" [isActive]="true" lgPrimaryNavItem>Link 1</a>
    </lg-primary-nav-list-item>

    <a lgPrimaryNavMobileItem href="/">
      <lg-link-menu-item>
        <lg-link-menu-item-text>Link 1</lg-link-menu-item-text>
      </lg-link-menu-item>
    </a>

    <a lgAccountMenuMobileItem href="/account">
      <lg-link-menu-item>
        <lg-link-menu-item-text>Account</lg-link-menu-item-text>
      </lg-link-menu-item>
    </a>
  </lg-primary-nav>

  <lg-account-menu>
    <lg-account-menu-list-item>
      <a href="/account" lgAccountMenuItem>
        <lg-account-menu-item-label>Account</lg-account-menu-item-label>
        <lg-icon name="profile"></lg-icon>
      </a>
    </lg-account-menu-list-item>
  </lg-account-menu>
</header>
```

---

## Inputs & Outputs

### `LgHeaderComponent`

| Output | Type | Description |
|--------|------|-------------|
| `menuToggled` | `EventEmitter<boolean>` | Emitted when the mobile menu toggle button is clicked. |

### `LgHeaderLogoComponent`

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `src` | `string` | — | Yes | Logo image URL. |
| `alt` | `string` | `''` | Yes | Alt text for the logo image. |
| `href` | `string` | — | No | URL link if the logo is clickable. |

### `LgPrimaryNavComponent`

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `showResponsiveMenu` | `boolean` | `false` | No | Shows or hides the responsive mobile menu. |

### `LgPrimaryNavListItemComponent`

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `alignRight` | `boolean` | `true` | No | Aligns the item to the right-hand side at `lg` breakpoints. |

| Output | Type | Description |
|--------|------|-------------|
| `tabbedOut` | `EventEmitter<KeyboardEvent>` | Emitted when the tab key bubbles up to the list item. |
| `clicked` | `EventEmitter<Event>` | Emitted when a click event bubbles up to the list item. |

### `LgPrimaryNavItemDirective`

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `isActive` | `boolean` | `false` | No | Sets the active state of the navigation item. |

### `LgAccountMenuItemDirective`

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `isActive` | `boolean` | `false` | No | Sets the active state of the account menu item. |

### `LgAccountMenuListItemComponent`

| Output | Type | Description |
|--------|------|-------------|
| `clicked` | `EventEmitter<Event>` | Emitted when a click event bubbles up to the list item. |

### `LgNotificationBadgeComponent`

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `count` | `number` | — | Yes (count) | The value to display in the badge when `variant` is `'count'`. |
| `accessText` | `string` | — | Yes | Accessible text for assistive technologies. |
 | `variant` | `'count' \| 'dot'` | `'count'` | No | Badge variant. Use `'dot'` for an indeterminate indicator instead of a count. |

Apply `lgMenuBadge` to the `lg-notification-badge` element to display it on the mobile menu toggle button.

---

## Dos and Don'ts

### Do

1. **Do** always provide both `lgPrimaryNavMobileItem` and desktop `lg-primary-nav-list-item` entries — the navigation does not auto-derive mobile items from desktop items.
2. **Do** project `lgAccountMenuMobileItem` anchors inside `lg-primary-nav` — they appear in the mobile nav dropdown, not in `lg-account-menu`.
3. **Do** use `lg-account-menu` items for the header bar (visible on both mobile and desktop next to the burger menu).
4. **Do** wrap mobile items in `lg-link-menu-item` / `lg-link-menu-item-text` structure.
5. **Do** keep navigation items to around six maximum to avoid overcrowding.
6. **Do** use `lgMenuBadge` on `lg-notification-badge` to show a badge on the mobile burger menu button.

### Don't

1. **Don't** apply `lg-header` as a component tag — it is an attribute selector and must be applied to a native `<header>` element.
2. **Don't** expect mobile navigation to be auto-generated — all mobile items must be explicitly authored.
3. **Don't** place `lgAccountMenuMobileItem` items inside `lg-account-menu` — they must be inside `lg-primary-nav`.

---

## Migration from Previous Navigation

The navigation was rebuilt with explicit mobile/desktop slots. Key changes:

- Mobile items are no longer derived automatically — provide `lgPrimaryNavMobileItem` and `lgAccountMenuMobileItem` explicitly.
- Import `LgPrimaryNavMobileItemDirective`, `LgAccountMenuMobileItemDirective`, `LgLinkMenuItemComponent`, and `LgLinkMenuItemTextComponent` in your component's `imports` array.

