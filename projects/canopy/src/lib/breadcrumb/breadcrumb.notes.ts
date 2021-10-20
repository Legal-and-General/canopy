export const notes = `
Displays the path of the user's journey from top-level through to child.

Note that there is different behavior on mobile vs desktop:

* Desktop: The top-level (root), current and previous levels of hierarchy are displayed.
* Mobile: Only one crumb is displayed, which takes the user back to the previous level.

## Usage

Import the component in your module:

~~~js
@NgModule({
  ...
  imports: [ ..., LgBreadcrumbModule ],
})
~~~

and in your HTML:

~~~html
<lg-breadcrumb>
  <lg-breadcrumb-item>
    <a href="#">
      <lg-icon [name]="'home'"></lg-icon>
      Home
    </a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    <a href="#">Products</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    Pension
  </lg-breadcrumb-item>
</lg-breadcrumb>
~~~

### Displaying more than 3 items

If there are more than 3 levels of hierarchy, a collapsed breadcrumb should be used on desktop. This is achieved by using \`LgBreadcrumbItemEllipsisComponent\` (see full example below).

~~~html

<lg-breadcrumb-item-ellipsis></lg-breadcrumb-item-ellipsis>

~~~

*This is not automatically added and should be implemented in your app.*

## Breadcrumb inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The colour variants available: \`\`light\`\`, \`\`dark\`\` | string | dark | No |
`;
