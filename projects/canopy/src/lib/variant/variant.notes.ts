export const notes = `

# Variant Directive

## Purpose
This directive allows you to add one of the five common colour variants to any Canopy component, such as \`\`info\`\` and \`\`success\`\`.

They are already applied to existing Canopy components which use these variants out of the box, such as [Alert](/?path=/story/components-alert--standard), [Detail](?path=/story/components-details--standard) and [Form Validation](?path=/story/components-form-validation--standard), but this directive allows you to use them anywhere where required.

This can be useful where you need the particular colour treatment (like the \`\`success\`\` variant for example), but your use-case does not fit one of the existing components.

## Usage

~~~js
@NgModule({
  ...
  imports: [LgVariantModule],
})
~~~

And in your HTML...

~~~html
<lg-card lgVariant="warning">
  <lg-card-content>
    I have the warning variant colours, yay!
    <a href="#">Links are included</a>
    <button lg-button variant="outline-primary">
      Outline primary buttons too
    </button>
  </lg-card-content>
</lg-card>
~~~

## Inputs

The current available variants are:
* \`\`generic\`\`
* \`\`info\`\`
* \`\`success\`\`
* \`\`warning\`\`
* \`\`error\`\`

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgVariant\`\` | The name of variant desired | string | null | No |


## Using only the SCSS files

The directive itself cannot be used outside Angular however the CSS utility classes should be useful.

| Class | Description |
|------|-------------|
| \`\`lg-variant--generic\`\` | Applies the generic variant |
| \`\`lg-variant--info\`\` | Applies the info variant |
| \`\`lg-variant--success\`\` | Applies the success variant |
| \`\`lg-variant--warning\`\` | Applies the warning variant |
| \`\`lg-variant--error\`\` | Applies the error variant |

`;
