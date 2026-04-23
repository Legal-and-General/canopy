---
name: tabs
description: Best practices for the Canopy Tabs component. Trigger when switching between content sections, tabbed navigation, route-based tabs, or single-page tab interfaces in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/tabs/docs/guide.mdx
---

# Canopy Tabs — Best Practices

This skill provides usage guidance and input reference for the Canopy tabs components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgTabsComponent`, `LgTabItemComponent`, `LgTabNavBarComponent`, or `LgTabNavBarLinkDirective`.

---

## Import

```ts
import {
  LgTabsComponent,
  LgTabItemComponent,
  LgTabItemHeadingComponent,
  LgTabItemContentComponent,
} from '@legal-and-general/canopy';
```

For tabbed navigation (router-based):

```ts
import {
  LgTabNavBarComponent,
  LgTabNavBarLinkDirective,
  LgTabNavContentComponent,
} from '@legal-and-general/canopy';
```

---

## Tabbed Content

Use when displaying related content, one section at a time.

```html
<lg-tabs label="Account sections" (tabEvent)="onTabChange($event)">
  <lg-tab-item>
    <lg-tab-item-heading>Overview</lg-tab-item-heading>
    <lg-tab-item-content>
      <div class="lg-tabs__content-section">
        <p>Overview content here.</p>
      </div>
    </lg-tab-item-content>
  </lg-tab-item>
  <lg-tab-item>
    <lg-tab-item-heading>Details</lg-tab-item-heading>
    <lg-tab-item-content>
      <div class="lg-tabs__content-section">
        <p>Details content here.</p>
      </div>
    </lg-tab-item-content>
  </lg-tab-item>
</lg-tabs>
```

---

## Tabbed Navigation (Router-based)

Use when tabs correspond to distinct routes.

```html
<lg-tab-nav-bar label="Section navigation">
  <a lgTabNavBarLink id="tab-1" [isActive]="true" routerLink="overview">Overview</a>
  <a lgTabNavBarLink id="tab-2" routerLink="details">Details</a>
</lg-tab-nav-bar>
<lg-tab-nav-content [selectedTabId]="'tab-1'">
  <router-outlet></router-outlet>
</lg-tab-nav-content>
```

---

## Inputs

### LgTabsComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `label` | `string` | `'tabs'` | Yes | Accessible label for the tab list. |

### LgTabsComponent Outputs

| Output | Type | Description |
|--------|------|-------------|
| `tabEvent` | `EventEmitter<{ index: number }>` | Emitted when the selected tab changes. |

### LgTabNavBarComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `label` | `string` | `'Tabs'` | No | Accessible label for the navigation tab list. |

### LgTabNavBarLinkDirective

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `isActive` | `boolean` | `false` | Sets the active state. |
| `isFocused` | `boolean` | `false` | Sets the focus state. |
| `index` | `number` | `0` | Tab index position in the list. |

---

## When to Use vs Alternatives

- Use **Tabs** when users need to switch between sections and all sections are equally important.
- Use **Accordion** when content sections can be hidden to save space but are not equally prominent.
- Tabs are pending brand modernisation.
