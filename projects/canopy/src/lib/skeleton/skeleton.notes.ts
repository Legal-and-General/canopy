export const notes = `
# Skeleton Loading Directive

## Purpose
The skeleton directive adds a skeleton loading state to a component or element.

## Usage
Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgSkeletonModule],
})
~~~

The directive works on components that output text or projected content. On composite components that
are made up of other child components, it is best to add the skeleton loading directive to the child
components or even wrap the projected content inside another element. E.g. In the example,
the \`lg-data-point-label\` projects the content into an \`lg-heading\` component,
so the directive is added to a span wrapping the content. However, the \`lg-data-point-value\` component
simply projects the content only so the directive can be applied to the component itself.

~~~html
<lg-data-point>
  <lg-data-point-label [headingLevel]="4">
    <span lgSkeleton lgSkeletonWidth="10">{{ data?.label }}</span>
  </lg-data-point-label>
  <lg-data-point-value lgSkeleton lgSkeletonWidth="8">
    {{ data?.value }}
  </lg-data-point-value>
</lg-data-point>
~~~

## Inputs


| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgSkeletonWidth\`\` | Override the default width with the desired value in ems | string | 100% | No |
| \`\`lgSkeletonHeight\`\` | Override the default height with the desired value in ems | string | auto | No |

`;
