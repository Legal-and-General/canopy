# Coding standards

These guidelines help keep Canopy consistent for designers, developers and
the applications that use it.

## Design and public API

- Match the agreed Canopy design and behaviour so applications do not need
  custom styles. Discuss new patterns with the design team.
- Use standalone Angular components and directives, `lg`-prefixed selectors
  and `Lg` class names. Follow related components when naming inputs and outputs.
- Prefer modern, stable Angular APIs supported by the version used in Canopy.
  For new components, use signal inputs (`input()`) and `output()` for events,
  and consider `signal()` and `computed()` for reactive state where useful.
  See the [Angular signals guide](https://angular.dev/guide/signals).
- Define host classes and bindings in the `@Component` `host` property rather
  than using `@HostBinding` in new code, as shown in the example below.
- Keep inputs and outputs typed, with clear defaults and only the options
  consumers need. Integrate custom form controls with Angular forms, for example
  using `ControlValueAccessor` where appropriate.
- Check the [breaking changes guide](./BREAKING_CHANGES.md) before changing an
  existing public API.

Existing components may use `@Input()`, `@Output()` or RxJS. Do not change
their public APIs solely to adopt a newer pattern; consider compatibility and
the needs of the change.

## Files and exports

- Keep a component's implementation, template, styles and unit tests together
  under `projects/canopy/src/lib/`, with stories and a guide in its `docs/`
  folder. Add interfaces or types where they help describe the public API.
- Export intended public APIs through the component's `index.ts` and
  [`public-api.ts`](../projects/canopy/src/public-api.ts); keep implementation
  details private.

## Example component

The Angular CLI can create the initial files for a standalone component:

```bash
npx ng generate component example --project canopy --type component \
  --style scss --change-detection OnPush --view-encapsulation None
```

The generated class is `ExampleComponent`; rename it to `LgExampleComponent`
throughout the generated files. Add the public exports, stories and guide as
described above and below.

The following hypothetical component is not an existing Canopy component or a
finished design. It shows a required signal input, an input with a default, and
an event output.

`example.component.ts`:

```typescript
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'lg-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-example',
    '[class.lg-example--disabled]': 'disabled()',
  },
})
export class LgExampleComponent {
  readonly label = input.required<string>();
  readonly disabled = input(false);
  readonly activated = output<void>();
}
```

`example.component.html`:

```html
<button
  type="button"
  class="lg-example__button"
  [disabled]="disabled()"
  (click)="activated.emit()"
>
  {{ label() }}
</button>
```

The `host` property adds `lg-example` to the `<lg-example>` element and adds
`lg-example--disabled` when the `disabled` signal is true. The template reads
signal inputs by calling them, such as `label()`. `ViewEncapsulation.None`
makes the component's styles global, so scope selectors to its `lg-` classes
to avoid affecting other components. Add styles using the approved design and
tokens, plus tests for the inputs and output. Add a Storybook story and guide
before making the component public.

After importing `LgExampleComponent`, a consuming component could use it like
this, with its own `isSaving` property and `save()` method:

```html
<lg-example label="Continue" [disabled]="isSaving" (activated)="save()" />
```

## Styles and design tokens

**Design tokens** are named values for design choices such as colours, spacing
and border radii. Use a component token first, then a semantic token, and a
foundation token only if neither is available. For example, a component may use
`border-radius: var(--<example>-border-radius)` instead of a fixed value such
as `border-radius: 0.25rem`. Here `<example>` is a placeholder: use an actual
token name from the design system. The token can be updated centrally when
the design changes. See **Foundations / Design tokens** in Storybook.

**SCSS mixins** are reusable groups of styles. For example, a hypothetical
`example-focus-outline` mixin could provide a common focus treatment that
components can reuse. Check the shared mixins before adding your own.

**BEM** is a way to name classes so their purpose is clear. For example,
the sample component uses `lg-example` for the component,
`lg-example__button` for its button, and `lg-example--disabled` for its
disabled state. Follow the same
`block`, `block__element` and `block--modifier` convention for component classes.

Consider responsive layouts, colour modes and interactive states when
choosing tokens and testing styles.

## Accessibility and tests

- Use semantic HTML, accessible names and keyboard interactions. Check focus,
  disabled and error states where relevant.
- Add Jest tests for the public API, defaults, interactions and relevant
  accessibility behaviour. Use `ng-mocks` for dependencies where appropriate.
- Run `npm run build`, `npm test` and `npm run lint`. See
  [Contributing](./CONTRIBUTING.md#running-unit-tests) for more test guidance.

## Stories and documentation

- Add a Storybook story for each component, covering representative variants
  and states. Use `args` and `argTypes` for defaults and controls.
- Add or update the component's `guide.mdx` with usage, applicable variants,
  dos and don'ts, and inputs and outputs. The guide should help both designers
  and developers.
- Register stories and guides in `.storybook/main.js`, check their rendering
  and displayed code locally, and run `npm run build:storybook`. See
  [component stories and guides](./CONTRIBUTING.md#component-stories-and-guides)
  for the authoring steps and visual testing guidance.
