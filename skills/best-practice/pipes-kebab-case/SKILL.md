---
name: canopy-pipes-kebab-case
description: Best practices for the Canopy Kebab Case pipe. Trigger when using LgKebabCasePipe or transforming strings to kebab-case in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/pipes/kebab-case/docs/guide.mdx
---

# Canopy Kebab Case Pipe — Best Practices

This skill provides usage guidance for the Canopy `LgKebabCasePipe` from `@legal-and-general/canopy`.

Apply this skill when you need to transform a string into kebab-case in an Angular template.

> See also: the `pipes-camel-case` skill.

---

## Import

```ts
import { LgKebabCasePipe } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<p>{{ 'My Example String' | lgKebabCase }}</p>
<!-- Output: my-example-string -->
```
