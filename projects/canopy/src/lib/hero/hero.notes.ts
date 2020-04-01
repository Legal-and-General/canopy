export const notes = `
# Hero Component


## Purpose
A flexible component that is often used to display the most prominent information about a page.


## Usage
~~~js
@NgModule({
  ...
  declarations: [ ..., LgHeroModule ],
})
~~~

and in your HTML:

~~~html
<lg-hero>
  Example content
</lg-hero>
~~~

## Configure Overlap

~~~html
<lg-hero [overlap]="2"></lg-hero>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`overlap\`\` | The amount that the page content overlaps the hero component (rem) | number | 2 | No |

## Using only the SCSS files

| Class | Description |
|------|-------------|
| \`\`lg-hero\`\` | Adds the default styles to the hero

### Examples:
~~~html
<div class="lg-hero">
</div>
~~~
`;
