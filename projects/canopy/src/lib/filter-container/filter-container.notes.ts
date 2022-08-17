export const notes = `
An expanding panel which reveals filter controls, which filter a set of results.

The toggle button is always positioned to the right of the containing element.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgFilterContainerModule ],
})
~~~

Please see the code below to view how to implement the pattern.

The toggle button **must have** the \`lgButtonToggle\` directive on it for the component to work properly.

More information on how to use the \`lgButtonToggle\` directive is available in the <a href="./?path=/docs/components-button">button documentation</a>. Note that there is no need to set the \`id\` and \`ariaControls\` properties in this case as they are already handled by the \`LgFilterContainerComponent\`.
`;
