export const notes = `
# Content Scroll Component

## Purpose
Content Scroll allows you to place long content in a smaller scrollable region. On small screens, the scroll region is removed and the content is displayed in full.

## Usage

Import the component in your module:

~~~js
@NgModule({
  ...
  imports: [ ..., LgContentScrollModule ],
})
~~~

and in your HTML:

~~~html
<lg-content-scroll
  [scrollContentAt]="sm"
  [scrollHeight]="40vh"
  [listNoIndent]="false">

  Content

</lg-content-scroll>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`scrollContentAt\`\` | Set minimum width to show scroll region (sm, md, lg) | string | sm | No |
| \`\`scrollHeight\`\` | Set height of scroll region | string | 40vh | No |
| \`\`listNoIndent\`\` | Remove indentation from ordered list structure | boolean | false | No |
`;
