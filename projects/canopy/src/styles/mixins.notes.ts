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

### lg-font-size($size)
\`\`$size\`\`: The font size, '7' | '6' | '5' | '4' | '3' | '2' | '1' | '-8' | '-6' | .

Style text to one of the predefined font sizes. '-8' and '-6' are the sub body font sizes.

### lg-visually-hidden()
Provides styles to hide information intended only for screen readers from the layout of the rendered page.

### lg-breakpoint($breakpoint)
\`\`$breakpoint\`\`: string value for the breakpoint screen size.

Allows breakpoints to be added to css blocks.

### lg-variant($variant: 'generic')
\`\`$variant\`\`: The variant type, 'generic' | 'info' | 'success' | 'warning' | 'error'.

Styles components and native child elements to the specified variant.

`;
