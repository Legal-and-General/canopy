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

### lg-link($default-color, $hover-color, $visited-color, $active-color, $active-bg-color, $focus-color, $focus-bg-color)
\`\`$default-color\`\`: the default color of the element (default value: \`\`var(--link-color)\`\`).

\`\`$hover-color\`\`: the hover color of the element (default value: \`\`var(--link-hover-color)\`\`).

\`\`$visited-color\`\`: the visited color of the element (default value: \`\`var(--link-visited-color)\`\`).

\`\`$active-color\`\`: the active color of the element (default value: \`\`var(--link-active-color)\`\`).

\`\`$active-bg-color\`\`: the active background color of the element (default value: \`\`var(--link-active-bg-color)\`\`).

\`\`$focus-color\`\`: the focus color color of the element (default value: \`\`var(--link-focus-color)\`\`).

\`\`$focus-bg-color\`\`: the focus background color of the element (default value: \`\`var(--link-focus-bg-color)\`\`).

Styles elements with the link style.

### lg-unstyled-link
Revert the links styles added with \`\`lg-link\`\`.

### lg-font-size($size)
\`\`$size\`\`: The font size, '7' | '6' | '5' | '4' | '3' | '2' | '1' | '-8' | '-6' | .

Styles text to one of the predefined font sizes. '-8' and '-6' are the sub body font sizes.

### lg-visually-hidden()
Provides styles to hide information intended only for screen readers from the layout of the rendered page.

### lg-breakpoint($breakpoint)
\`\`$breakpoint\`\`: string value for the breakpoint screen size.

Allows breakpoints to be added to css blocks.

### lg-variant($variant: 'generic')
\`\`$variant\`\`: The variant type, 'generic' | 'info' | 'success' | 'warning' | 'error'.

Styles components and native child elements to the specified variant.

`;
