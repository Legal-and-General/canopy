export const notes = `
This directive allows you to add the \`row-gap\` CSS property using Canopy spacing.
The spacing variables are also available as CSS custom properties (CSS variables)
which can be viewed in _**canopy/projects/canopy/src/styles/spacing.scss**_.

This directive and accompanying CSS classes, work great with our
<a href="./?path=/docs/directives-grid--grid">Canopy Grid</a> but will
also work with all other HTML elements that support
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap" target="_blank" rel='noopener noreferrer'>CSS row-gap</a>.

~~~js
@NgModule({
  ...
  imports: [ ..., LgRowGapModule ],
})
~~~

### Examples

Apply \`\`xxl\`\` row-gap.

~~~html

<div lgRowGap="xxl"></div>

~~~

Use the default (\`\`sm\`\`) row-gap.

~~~html

<div lgRowGap></div>

~~~

## Inputs

The current available spacing variants are \`\`none\`\`, \`\`xxxs\`\`, \`\`xxs\`\`, \`\`xs\`\`, \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`, \`\`xxxl\`\`, \`\`xxxxxl\`\`.

If no value is provided, the default is \`\`sm\`\`.
`;
