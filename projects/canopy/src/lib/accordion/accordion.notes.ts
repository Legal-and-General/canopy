export const notes = `
# Accordion Component


## Purpose
Accordions allow users to quickly expand and collapse grouped sections of content.


## Usage
~~~js
@NgModule({
  ...
  declarations: [ ..., LgAccordionModule ],
})
~~~

and in your HTML:

~~~html
  <lg-accordion [headingLevel]="2">
    <lg-accordion-item>
      <lg-accordion-panel-heading>Item 1</lg-accordion-panel-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
    </lg-accordion-item>
    <lg-accordion-item>
      <lg-accordion-panel-heading>Item 2</lg-accordion-panel-heading>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.</p>
      <lg-button lgMarginTop="sm" variant="primary">
        Test primary button
      </lg-button>
    </lg-accordion-item>
  </lg-accordion>
~~~


## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`headingLevel\`\` | The level of the accordion headings: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |


## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-accordion\`\` | Adds styles to the outer accordion element |
| \`\`lg-accordion__heading\`\` | Adds styles to the accordion heading |
| \`\`lg-accordion__heading-toggle\`\` | Adds styles to the accordion button |
| \`\`lg-accordion__heading-icon\`\` | Adds styles to the accordion icon |
| \`\`lg-accordion__panel\`\` | Adds styles to the accordion panel |

Modifiers:

| Class | Description |
|------|-------------|
| \`\`lg-accordion__heading-toggle--active\`\` | Adds the active styles to the accordion button |
| \`\`lg-accordion__panel--active\`\` | Adds the actives styles to the accordion panel |

### Examples:
~~~html
<div class="lg-accordion">
  <h2 class="lg-accordion__heading">
    <button
      type="button"
      class="lg-accordion__heading-toggle"
      id="accordion-toggle-1"
      aria-controls="accordion-panel-1-content"
      aria-expanded="false"
    >
      First accordion heading
      <span class="lg-accordion__heading-icon" aria-hidden="true"></span>
    </button>
  </h2>

  <div
    class="lg-accordion__panel"
    id="accordion-panel-1-content"
    aria-hidden="true"
    aria-labelledby="accordion-toggle-1"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>


  <h2 class="lg-accordion__heading">
    <button
      type="button"
      class="lg-accordion__heading-toggle lg-accordion__heading-toggle--active"
      id="accordion-toggle-1"
      aria-controls="accordion-panel-1-content"
      aria-selected="true"
      aria-expanded="true"
    >
      Second accordion heading
      <span class="lg-accordion__heading-icon" aria-hidden="true"></span>
    </button>
  </h2>

  <div
    class="lg-accordion__panel lg-accordion__panel--active"
    id="accordion-panel-1-content"
    aria-hidden="false"
    aria-labelledby="accordion-toggle-1"
  >
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>
~~~
`;
