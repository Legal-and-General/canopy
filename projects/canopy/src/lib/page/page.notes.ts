export const notes = `
# Page Component

## Purpose
Provides a single column page layout, with content projection slots for standard header and footer.

## Usage
Import the component in your application:

~~~
@NgModule({
  ...
  imports: [LgPageModule],
})
~~~

and in your HTML:

~~~
<lg-page>
  <lg-header></lg-header>
  <lg-card>Some content</lg-card>
  <lg-card>More content</lg-card>
  <lg-footer></lg-footer>
</lg-page>
~~~

## Inputs

### LgPageComponent

Content projection slots

| Name | Description |
|------|-------------|
| \`\`lg-header\`\` | Provides a slot for the standard header component
| \`\`lg-footer\`\` | Provides a slot for the standard footer component
| \`\`<default>\`\` | Any other components are projected into the central column

## Using only the SCSS files

Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-page\`\` | Adds page styles |
| \`\`lg-page__content\`\` | Adds styles for the central content column |

### Examples:
~~~
<div class="lg-page">
  <div class="lg-header">Header content</div>
  <div class="class="lg-page__content">...</div>
  <div class="lg-footer">Footer content</div>
</div>
~~~
`;
