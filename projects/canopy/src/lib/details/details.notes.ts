export const notes = `
# Details Component


## Purpose
The Details component reduces page clutter and cognitive load by letting users reveal more information as and when they need it.

## Usage
~~~js
@NgModule({
  ...
  declarations: [ ..., LgDetailsModule ],
})
~~~

and in your HTML:

~~~html
<lg-details [isActive]="expand">
  <lg-details-panel-heading [headingLevel]="5">
    How do I change my payment details?
  </lg-details-panel-heading>
  Give us a call on 0800 123 4567 and we'll be happy to help you change
  your payment details
</lg-details>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`isActive\`\` | Expand the details | boolean | false | no |
| \`\`headingLevel\`\` | The level of the accordion headings: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |

## Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`opened\`\` | Event emitted when the details are opened | EventEmitter<void> | n/a | No |
| \`\`closed\`\` | Event emitted when the details are closed | EventEmitter<void> | n/a | No |

## Using only the SCSS files

| Class | Description |
|------|-------------|
| \`\`lg-details\`\` | Adds the default styles to the details
| \`\`lg-details-panel-heading\`\` | Adds the default styles to the details heading panel


### Examples:
~~~html
<div class="lg-details">
  <h5 class="lg-details-panel-heading">
    <button class="lg-details-panel-heading__toggle" type="button" id="lg-details-header-1" aria-expanded="true" aria-controls="lg-details-content-1">
      How do I change my payment details?
      <span class="lg-details-panel-heading__state-icon lg-icon lg-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 9"><defs><path id="lg-icon-9" d="M10 12.666l5.808-5.614a.64.64 0 01.884 0 .59.59 0 010 .854L10 14.375 3.308 7.906a.59.59 0 010-.854.64.64 0 01.884 0L10 12.666z"></path></defs><use transform="translate(-3 -6)" xlink:href="#lg-icon-9"></use></svg>
      </span>
    </button>
  </h5>
  <div class="lg-details__panel" id="lg-details-content-1" aria-labelledby="lg-details-header-1">
    Give us a call on 0800 123 4567 and we'll be happy to help you change your payment details
  </div>
</div>
~~~
`;
