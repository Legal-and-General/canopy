---
name: canopy-modal
description: Best practices for the Canopy Modal component. Trigger when using lg-modal, LgModalComponent, LgModalService, or lgModalTrigger in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/modal/docs/guide.mdx
---

# Canopy Modal — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-modal` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-modal`, `LgModalService`, or `lgModalTrigger`.

---

## Import

```ts
import {
  LgModalComponent,
  LgModalTriggerDirective,
  LgModalHeaderComponent,
  LgModalBodyComponent,
  LgModalFooterComponent,
  LgModalBodyTimerComponent,
  LgModalService,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

### Declarative trigger (preferred)

Use `lgModalTrigger` on a button to open the modal:

```html
<button lgModalTrigger="my-modal" lg-button type="button" priority="secondary">
  Open modal
</button>

<lg-modal id="my-modal">
  <lg-modal-header [headingLevel]="2">Modal title</lg-modal-header>
  <lg-modal-body>
    Modal content goes here.
  </lg-modal-body>
  <lg-modal-footer>
    <lg-button-group>
      <button lg-button lgMarginBottom="none" priority="primary" type="button">Confirm</button>
      <button lg-button lgMarginBottom="none" priority="secondary" type="button">Cancel</button>
    </lg-button-group>
  </lg-modal-footer>
</lg-modal>
```

### Programmatic open/close

```ts
constructor(private modalService: LgModalService) {}

open(): void {
  this.modalService.open('my-modal');
}

close(): void {
  this.modalService.close('my-modal');
}
```

### Session timer

Include `<lg-modal-body-timer>` inside `<lg-modal-body>` to show a countdown:

```html
<lg-modal-body>
  Your session will expire soon.
  <lg-modal-body-timer [timer]="90"></lg-modal-body-timer>
</lg-modal-body>
```

---

## Inputs

### LgModalComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | `undefined` | Yes | Unique identifier for the modal. |
| `closeOnOverlayClick` | `boolean` | `true` | No | Whether clicking the overlay closes the modal. |

### LgModalHeaderComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | n/a | Yes | Heading level for the modal title. |

---

## Outputs

### LgModalComponent

| Output | Type | Description |
|--------|------|-------------|
| `open` | `EventEmitter<void>` | Emitted when the modal opens. |
| `closed` | `EventEmitter<void>` | Emitted when the modal closes (any method). |
| `closedOverlayClick` | `EventEmitter<void>` | Emitted when the modal closes via overlay click. |

---

## Dos and Don'ts

### Do

1. **Do** use when you require the customer's full and immediate attention.
2. **Do** keep content brief and concise.
3. **Do** use for important warnings, as a way to prevent or correct critical errors.
4. **Do** use descriptive button labels (e.g. Accept, Delete, Save — not Yes/No/OK).

### Don't

1. **Don't** use for interaction confirmation — consider using the Alert component instead.
2. **Don't** fill with too much content or allow content to overflow and scroll.
3. **Don't** use for high-stakes processes such as application journeys.
4. **Don't** use if the content can be presented within a regular page — modals are a last resort.
5. **Don't** remove or disable the "X" close button or ESC key dismissal.

---

## Accessibility

- The modal can always be dismissed by pressing the **ESC** key — do not disable this.
- The "X" button in the upper right corner always remains visible — do not remove it.
- Ensure the modal title (in `<lg-modal-header>`) accurately describes the modal's purpose.
