export const notes = `
# Mixins

## Purpose
Provides available mixins

## Mixins
### lg-inner-focus-outline($bg-color, $color: var(--color-white))
\`\`$bg-color\`\`: background color of the element.

\`\`$color\`\`: colour of the outline.

Sets the focus outline inside the element, by using multiple box shadows.

### lg-outer-focus-outline($bg-color: var(--default-focus-color))
\`\`$bg-color\`\`: background color of the element.

Sets the focus outline outside the element, by using box shadows.

### lg-visually-hidden()
Provides styles to hide information intended only for screen readers from the layout of the rendered page.

### lg-breakpoint($breakpoint)
\`\`$breakpoint\`\`: string value for the breakpoint screen size.

Creates a mixin which allows breakpoints to be added to css blocks.
`;
