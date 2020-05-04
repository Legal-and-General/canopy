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

~~~html
<lg-card>
  <lg-card-header> 
    Your title
  </lg-card-header>
  <lg-card-content> 
    Your content
  </lg-card-content>
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


### Examples:
~~~html
<div class="lg-card">
    <div class="lg-card-header">
        Your title
    </div>
    <div class="lg-card-content">
        Your content
    </div>
</div>
~~~
`;
