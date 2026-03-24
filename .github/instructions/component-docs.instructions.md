---
applyTo: "projects/canopy/src/lib/**/docs/guide.mdx,projects/canopy/src/styles/docs/**/*.mdx"
---

# Documentation Templates

Use the template that matches the artifact being documented. Do not add sections just to match the template — omit any section that is not applicable.

---

## Components

**Required sections:** Usage, Dos and Don'ts, inputs table.
**Optional sections:** Variants (only if the component has distinct visual/behavioural variants), outputs table (only if the component emits outputs), any extra sub-sections under Additional development details.

```mdx
import { Meta, Markdown, Source } from '@storybook/addon-docs/blocks';
import Feedback from '../../docs/common/feedback.md?raw';
import * as ComponentStories from './<component-name>.stories';

<Meta title="Components/<ComponentName>/Guide" />

# <ComponentName>

<p class="standfirst">One-sentence description of what the component does and when to use it.</p>

## Usage

Brief explanation of when and how to use this component.

Import the component in your application:

```js
@NgModule({
  ...
  imports: [ ..., Lg<ComponentName>Component ],
});
```

and in your HTML:

```html
<lg-component-name [input]="value">Content</lg-component-name>
```

## Variants

<!-- OPTIONAL: Only include if the component has distinct visual or behavioural variants. -->

### Variant name

Description of when to use this variant.

```html
<lg-component-name variant="example">Content</lg-component-name>
```

<Source of={ComponentStories.VariantStory} />

## Dos and Don'ts

### Do

1. **Do** ...

### Don't

1. **Don't** ...

## Additional development details

### Lg<ComponentName>Component inputs

| Input   | Description          | Type     | Default     | Required |
|---------|----------------------|----------|-------------|----------|
| `input` | Description of input | `string` | `'default'` | No       |

### Lg<ComponentName>Component outputs

<!-- OPTIONAL: Only include if the component emits one or more outputs. -->

| Output   | Description           | Value                   |
|----------|-----------------------|-------------------------|
| `output` | Description of output | `EventEmitter<boolean>` |

<Markdown>{Feedback}</Markdown>
```

---

## Directives

**Required sections:** Usage, inputs table.
**Optional sections:** Related links (if sibling directives exist), outputs table.
Dos and Don'ts are generally not needed for directives.

```mdx
import { Meta, Markdown, Source } from '@storybook/addon-docs/blocks';
import Feedback from '../../docs/common/feedback.md?raw';
import * as DirectiveStories from './<directive-name>.stories';

<Meta title="Helpers/Directives/<DirectiveName>/Guide" />

# <DirectiveName>

One-sentence description of what the directive does and when to use it.

## Usage

Import the directive in your application:

```js
@NgModule({
  ...
  imports: [ ..., Lg<DirectiveName>Directive ],
});
```

and in your HTML:

<Source of={DirectiveStories.DefaultStory} />

### Inputs

| Name    | Description          | Type     | Default | Required |
|---------|----------------------|----------|---------|----------|
| `input` | Description of input | `string` | `null`  | No       |

---

## Related

<!-- OPTIONAL: Only include if sibling directives or related pages exist. -->

* [Related directive](./?path=/docs/...)

<Markdown>{Feedback}</Markdown>
```

---

## Services

**Required sections:** Usage, API table (methods and/or properties).

```mdx
import { Meta, Markdown } from '@storybook/addon-docs/blocks';
import Feedback from '../../docs/common/feedback.md?raw';

<Meta title="Helpers/Services/<ServiceName>/Guide" />

# <ServiceName>

One-sentence description of what the service does and when to use it.

## Usage

Import and inject the service:

```js
import { Lg<ServiceName>Service } from '@legal-and-general/canopy';

@Component({ ... })
export class MyComponent {
  constructor(private <serviceName>Service: Lg<ServiceName>Service) {}
}
```

Describe the primary use case here.

## API

### Methods

| Method      | Description            | Parameters        | Returns   |
|-------------|------------------------|-------------------|-----------|
| `method()`  | Description of method  | `param: string`   | `boolean` |

### Properties

<!-- OPTIONAL: Only include if the service exposes public properties. -->

| Property   | Description             | Type      |
|------------|-------------------------|-----------|
| `property` | Description of property | `boolean` |

<Markdown>{Feedback}</Markdown>
```

---

## Mixins

**Required sections:** One section per mixin containing a description and arguments table.
No Angular import pattern, no Dos and Don'ts.

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Helpers/Style/<MixinGroupName>" />

# <MixinGroupName>

## mixin-name

Brief description of what this mixin does and when to use it.

### Arguments

| Name    | Description           | Default | Required |
|---------|-----------------------|---------|----------|
| `$arg`  | Description of arg    | n/a     | Yes      |

### Usage

```scss
.my-element {
  @include mixin-name($arg: value);
}
```
```

---

## Notes

- The `Feedback` import path (`../../docs/common/feedback.md?raw`) assumes a file at `lib/<artifact>/docs/`. Adjust the relative depth as needed.
- Always close component, directive, and service docs with `<Markdown>{Feedback}</Markdown>`.
- Use `<Source of={Stories.StoryName} />` to embed live Storybook story source inline.
- The `standfirst` class on the opening `<p>` is required for components — not used on directives or services.

<Markdown>{Feedback}</Markdown>
```

---

## Notes

- The `Feedback` import path (`../../docs/common/feedback.md?raw`) assumes a component at `lib/<component>/docs/`. Adjust the relative path if the component is nested deeper (e.g. `../../../docs/common/feedback.md?raw`).
- Use `<Source of={ComponentStories.StoryName} />` to embed live Storybook story source inline.
- The `standfirst` class on the opening `<p>` is required for consistent typography.
- Include an image reference (`![Alt text](docs/<component>/example.png)`) after the standfirst if a design screenshot is available.
- All tables use standard Markdown pipe syntax.
- Close the file with `<Markdown>{Feedback}</Markdown>` to include the standard feedback section.
