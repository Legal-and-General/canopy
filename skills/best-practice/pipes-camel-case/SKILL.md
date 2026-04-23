---
name: pipes-camel-case
description: Best practices for the Canopy Camel Case pipe. Trigger when using LgCamelCasePipe or transforming strings to camelCase in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/pipes/camel-case/docs/guide.mdx
---

# Canopy Camel Case Pipe — Best Practices

This skill provides usage guidance for the Canopy `LgCamelCasePipe` from `@legal-and-general/canopy`.

Apply this skill when you need to transform a string into camelCase in an Angular template.

> See also: the `pipes-kebab-case` skill.

---

## Import

```ts
import { LgCamelCasePipe } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<p>{{ 'my example string' | lgCamelCase }}</p>
<!-- Output: myExampleString -->
```
