export const notes = `
The Details component reduces page clutter and cognitive load by letting users reveal more information as and when they need it. It can also be used to communicate important imformation in a collapsed layout, similar to an Alert.

The "alert" ARIA role is automatically added to the component if it's one of these variants: \`\`warning\`\`, \`\`error\`\`, \`\`success\`\`. Note that this role will tell the browser to send out an accessible alert event to assistive technology products which can then notify the user about it.

A decorative icon is also added next to the heading if it's one of the these variants: \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\`.

## Usage
~~~js
@NgModule({
  ...
  declarations: [ ..., LgDetailsModule ],
})
~~~
`;
