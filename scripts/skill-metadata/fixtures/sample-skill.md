---
name: canopy-sample
description: Sample fixture.
metadata:
  source: projects/canopy/src/lib/card/docs/guide.mdx
---

## Do

1. **Do** use the `lg-card` element for grouped content.

## Don't

- **Don't** nest unrelated content.

## Accessibility

- Give the card a descriptive heading.

```html
<lg-card>
  <lg-card-header>Summary</lg-card-header>
  <lg-card-content>Content</lg-card-content>
</lg-card>
```
