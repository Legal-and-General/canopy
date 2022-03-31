export const notes = `
The grid directives are used to apply grid classes in order to create multi column layouts.

## Usage
Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [..., LgGridModule],
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
`;
