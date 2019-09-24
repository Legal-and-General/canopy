export const notes = `
# Focus directive

## Purpose
This directive allows for focus to be set dynamically on a focusable element.

## Usage
Import the directive in your module:

~~~
@NgModule({
  ...
  declarations: [ ..., LgFocusDirective ],
})
~~~

and in your HTML:

~~~
<button [lgFocus]="<boolean-var>">Button</button>
~~~

## Inputs

| Name | Description | Type |
|------|-------------|:----:|
| \`\`lgFocus\`\` | If the element should have focus or not | boolean | 

`;
