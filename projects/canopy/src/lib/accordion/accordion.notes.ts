export const notes = `
# Accordion Component

## Purpose
Accordions allow users to quickly expand and collapse grouped sections of content.


## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgAccordionModule ],
})
~~~

and in your HTML:

~~~html
  <lg-accordion [headingLevel]="2">
    <lg-accordion-item [isActive]="isActive" (opened)="handleItemOpened()" (closed)="handleItemClosed()">
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
      <button lg-button lgMarginTop="sm" variant="solid-primary">
        Test primary button
      </button>
    </lg-accordion-item>
    <lg-accordion-item (opened)="loadDynamicContent()">
      <lg-accordion-panel-heading>Item 1</lg-accordion-panel-heading>

      <ng-template lgAccordionItemContent>
        <app-dynamic-component [content]="dynamicContentItems$ | async">
            An example component that loads data from the network when this panel is opened.
        </app-dynamic-component>
      </ng-template>
    </lg-accordion-item>
  </lg-accordion>
~~~

## Accordion Item Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`isActive\`\` | The active state of the accordion item | boolean | false | No |


## Accordion Item Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`opened\`\` | Event emitted when the accordion item is opened | EventEmitter<void> | n/a | No |
| \`\`closed\`\` | Event emitted when the accordion item is closed | EventEmitter<void> | n/a | No |


## Lazy content initialisation

Wrap the panel content in a \`ng-template\` with the \`lgAccordionContent\` directive to only initialise and render
the panel when it is first opened.
`;
