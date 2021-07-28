export const notes = `
# Content Scroll Component

## Purpose
Content Scroll allows you to place long content in a smaller scrollable region. On mobile devices, the scroll region is removed and the content is displayed in full.

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
  [contentWidth]="auto"
  [contentHeight]="40vh"
  [mobileFullContent]="true"
  [listNoIndent]="false">

  Content

</lg-content-scroll>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`contentWidth\`\` | Set width of scroll region (takes auto, em, px, %, px, cm, mm, in, pt, pc, ch, rem, vw, vmin, vmax) | string | auto | No |
| \`\`contentHeight\`\` | Set height of scroll region (takes auto, em, px, %, px, cm, mm, in, pt, pc, ch, rem, vh, vmin, vmax) | string | 40vh | No |
| \`\`mobileFullContent\`\` | Remove scroll region on mobile devices | boolean | true | No |
| \`\`listNoIndent\`\` | Remove indentation from ordered list structure | boolean | false | No |
`;
