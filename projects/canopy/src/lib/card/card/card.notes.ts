export const notes = `
# Card Component

## Purpose
Provides a generic card component for displaying content.

## Usage
Import the component in your application:

~~~
@NgModule({
  ...
  imports: [LgCardModule],
})
~~~

and in your HTML:

~~~
<lg-card>
  Your content
</lg-card>
~~~

## Inputs

Content projection slots

| Name | Description |
|------|-------------|
| \`\`<default>\`\` | The main body content of the card

## Using only the SCSS files

Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-card\`\` | Adds styles to the outer card element |
| \`\`lg-card__body\`\` | Adds styles to the main body content of the card |


### Examples:
~~~
<div class="lg-card">
  <div class="lg-card__body">
    Your content
  </div>
</div>
~~~
`;
