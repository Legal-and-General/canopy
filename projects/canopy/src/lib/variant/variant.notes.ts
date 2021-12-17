export const notes = `

This directive allows you to add one of the five common colour variants to any Canopy component, such as \`\`info\`\` and \`\`success\`\`.

They are already applied to existing Canopy components which use these variants out of the box, such as [Alert](/?path=/story/components-alert--standard), [Detail](?path=/story/components-details--standard) and [Form Validation](?path=/story/components-form-validation--standard), but this directive allows you to use them anywhere where required.

This can be useful where you need the particular colour treatment (like the \`\`success\`\` variant for example), but your use-case does not fit one of the existing components.

~~~js
@NgModule({
  ...
  imports: [LgVariantModule],
})
~~~
`;
