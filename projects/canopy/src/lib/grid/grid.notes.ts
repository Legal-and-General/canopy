export const notes = `
# Grid Directive

## Purpose
The grid directives are used to apply grid classes in order to create multi column layouts.

## Usage
Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgGridModule],
})
~~~

There are three directives included in this module, which can all be added to Canopy or native HTML components.
A simple one column responsive grid which expands to two columns for larger screen sizes could be created with the following markup:

~~~html
<div lgContainer>
  <div lgRow>
    <div [lgCol]="12" [lgColMd]="6">Column 1</div>
    <div [lgCol]="12" [lgColMd]="6">Column 2</div>
  </div>
</div>
~~~

## Inputs


| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgContainer\`\` | Adds the grid container class to the element | null | null | No |
| \`\`lgRow\`\` | Adds the row class to the element | null | null | No |
| \`\`lgCol\`\` | Specifies the number of columns to fill in a 12 column layout | number (1-12) | null | Yes |
| \`\`lgColMd\`\` | Specifies the number of columns to fill in a 12 column layout on a medium sized screen | number (1-12) | null | Yes |
| \`\`lgColLg\`\` | Specifies the number of columns to fill in a 12 column layout on a large sized screen | number (1-12) | null | Yes |
| \`\`lgColOffset\`\` | Specifies the number of columns to offset in a 12 column layout | number (0-11) | null | Yes |
| \`\`lgColMdOffset\`\` | Specifies the number of columns to offset fill in a 12 column layout on a medium sized screen | number (0-11) | null | Yes |
| \`\`lgColLgOffset\`\` | Specifies the number of columns to offset fill in a 12 column layout on a large sized screen | number (0-11) | null | Yes |

## Using only the SCSS files

Refer to the scss [grid documentation](/?path=/story/grid--grid)

`;
