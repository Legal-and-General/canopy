export const notes = `
# Breadcrumb Component


## Purpose
Displays the path of the user's journey from top-level through to child. Crumbs above the current level should be styled as links, and link to the previous level on desktop. It should display the root, current and previous levels of hierarchy.
On mobile the crumb should take the user back to the previous level, but should be hidden at the top-level.


## Usage
~~~js
@NgModule({
  ...
  declarations: [ ..., LgBreadcrumbModule ],
})
~~~

and in your HTML:

~~~html
<lg-breadcrumb>
  <lg-breadcrumb-item>
    <a href="#">Home</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    <a href="#">Products</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    Pension
  </lg-breadcrumb-item>
</lg-breadcrumb>
~~~

## Configure Text Colour

~~~html
<lg-breadcrumb-item [variant]="'light'"></lg-breadcrumb-item>
~~~

## Adding an ellipsis

If there are more than 3 levels of hierarchy, a collapsed breadcrumb should be used. This is achieved with the breadcrumb elipsis.

~~~html
<lg-breadcrumb-item-ellipsis></lg-breadcrumb-item-ellipsis>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The colour variants available: \`\`light\`\`, \`\`dark\`\` | string | dark | No |

## Using only the SCSS files

| Class | Description |
|------|-------------|
| \`\`lg-breadcrumb\`\` | Adds the default styles to the breadcrumbs
| \`\`lg-breadcrumb-item\`\` | Adds the default styles to the breadcrumb items

### Examples:
~~~html
<div class="lg-breadcrumb" aria-label="breadcrumb" role="navigation">
  <div class="lg-breadcrumb-item--dark lg-breadcrumb-item">
    <span class="lg-breadcrumb-item__content">
      <span class="lg-visually-hidden">1.</span>
      <a href="#" aria-current="page">Home</a>
    </span>
  </div>
    <div class="lg-breadcrumb-item--dark lg-breadcrumb-item">
      <span class="lg-breadcrumb-item__content">
        <span class="lg-visually-hidden">2.</span>
        <a href="#" aria-current="page">Product</a>
      </span>
  </div>
</div>
~~~
`;
