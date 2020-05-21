export const notes = `
# Tabs Component

## Purpose
The tabs component lets users navigate between related sections of content, displaying one section at a time.


## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgTabsModule ],
})
~~~

and in your HTML:

~~~html
<lg-tabs [headingLevel]="1" label="Annuities" (tabEvent)="tabEvent($event)">
  <lg-tab-item>
    <lg-tab-item-heading>Payment details</lg-tab-item-heading>
    <lg-tab-item-content>
      You have a standard lifetime annuity. We will pay you a guaranteed income for life
    </lg-tab-item-content>
  </lg-tab-item>
  <lg-tab-item>
    <lg-tab-item-heading>Payments & tax</lg-tab-item-heading>
    <lg-tab-item-content>
      Your last payment was £230.20 after tax and deductions.
    </lg-tab-item-content>
  </lg-tab-item>
  <lg-tab-item>
    <lg-tab-item-heading>Death & benefits</lg-tab-item-heading>
    <lg-tab-item-content>
      You have selected a single life policy with no continuation benefits
    </lg-tab-item-content>
  </lg-tab-item>
  <lg-tab-item>
    <lg-tab-item-heading>Documents</lg-tab-item-heading>
    <lg-tab-item-content>
      Your documents are available in multiple formats
    </lg-tab-item-content>
  </lg-tab-item>
</lg-tabs>
~~~


## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`label\`\` | The value to apply to the aria label | string | tabs | Yes |
| \`\`headingLevel\`\` | The level of the tab headings: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |

## Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`tabEvent\`\` | Event emitted when the selected tab changes | EventEmitter<{ index: number }> | n/a | No |


## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-tabs\`\` | Adds styles to the outer tabs element |
| \`\`lg-tabs__list\`\` | Adds styles to the tabs list |
| \`\`lg-tabs__list-item-heading\`\` | Adds styles to the tabs list item heading |
| \`\`lg-tabs__list-item-toggle\`\` | Adds styles to the tabs list item |
| \`\`lg-tabs__content\`\` | Adds styles to the tabs content |
| \`\`lg-tabs__content-section\`\` | Adds styles to sections within the content tabs  |

Modifiers:

| Class | Description |
|------|-------------|
| \`\`lg-tabs__list-item-toggle--selected\`\` | Adds the selected state to the list item |

### Examples:
~~~html
<div class="lg-tabs">
  <div class="lg-tabs__list" role="tablist" aria-label="Annuities">
    <h3 class="lg-tabs__list-item-heading">
      <button class="lg-tabs__list-item-toggle lg-tabs__list-item-toggle--selected" role="tab" aria-selected="true" aria-controls="tab-item-content-0-0" id="tab-item-heading-0-0">
        Product details
      </button>
    </h3>
    <h3 class="lg-tabs__list-item-heading">
      <button class="lg-tabs__list-item-toggle" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-item-content-0-1" id="tab-item-heading-0-1">
        Payments and tax
      </button>
    </h3>
  </div>
  <div class="lg-tabs__content" role="tabpanel" tabindex="0" id="tab-item-content-0-0" aria-labelledby="tab-item-heading-0-0">
    You have a standard lifetime annuity. We will pay you a guaranteed income for life
  </div>
  <div class="lg-tabs__content" role="tabpanel" tabindex="0" id="tab-item-content-0-1" aria-labelledby="tab-item-heading-0-1" hidden="">
    Your last payment was £230.20 after tax and deductions
  </div>
</div>
~~~
`;
