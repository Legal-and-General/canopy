export const notes = `
Provides a page layout with content projection slots for standard header and footer.

## Usage
The page component works best when combined with the <a href="./?path=/docs/directives-grid--grid">grid module</a> which can be used to provide a responsive layout for the main content.

~~~js
@NgModule({
  ...
  imports: [ ..., LgGridModule, LgPageModule ],
})
~~~

and in your HTML:

~~~html
<lg-page>
  <header lg-header></header>
  <div lgContainer>
    <div lgRow>
      <div
          lgCol="12"
          lgColMd="8"
          lgColMdOffset="2"
          lgColLg="6"
          lgColLgOffset="3"
        >
        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card1Content}}</lg-card-content></lg-card>
        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card2Content}}</lg-card-content></lg-card>
      </div>
    </div>
  </div>
  <footer lg-footer></footer>
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

It is possible to wrap the lg-header and lg-footer components and still use the page component.
You can do this by using the <a href="https://medium.com/ignite-ui/using-ng-content-ngprojectas-1664d7c1d3b" target="_blank">ngProjectAs</a> attribute.

~~~html
<lg-page>
  <app-header ngProjectAs="[lg-header]"></app-header>
  <router-outlet></router-outlet>
  <app-footer ngProjectAs="[lg-footer]"></app-footer>
</lg-page>
~~~
`;
