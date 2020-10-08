export const notes = `
# Filter Button Component

## Purpose
Provides a set of components to implement filter buttons in a filter panel. Filter buttons help users to narrow down large data sets, like their documents or payments, by giving them a clear and friendly option for filtering the data. Filter buttons are usually included as part of a filter panel or overlay.

## When to use this component
Use a filter button when you have 10 or fewer filter options. If the user can only choose one option, use the 'select-one' variant. If the user can choose multiple options, use the 'select-multiple' variant.

If there are more than 10 filter options, use radio buttons or check boxes instead to avoid cluttering a filter panel.

## Usage
Import the Filter Button Module into your application:

~~~js
@NgModule({
  ...
  imports: [LgFilterButtonModule],
})
~~~

and in your HTML:

~~~html
<lg-filter-group [variant]='select-one' formControlName="dates">
  Select a date range
  <lg-filter-button value="3m">Last 3 months</lg-filter-button>
  <lg-filter-button value="6m">Last 6 months</lg-filter-button>
  <lg-filter-button value="1y">Last Year</lg-filter-button>
  <lg-filter-button value="2y">Last 2 years</lg-filter-button>
</lg-filter-group>
~~~

or for 'select-multiple' variant:

~~~html
<lg-filter-group [variant]='select-multiple' [valueArrayName]="filters" formArrayName="filters">
  Color
  <lg-filter-button value="red">Red</lg-filter-button>
  <lg-filter-button value="yellow">Yellow</lg-filter-button>
  <lg-filter-button value="green">Green</lg-filter-button>
  <lg-filter-button value="blue">Blue</lg-filter-button>
</lg-filter-group>
~~~

or

~~~html
<lg-filter-group [variant]='select-multiple'>
  Color
  <lg-filter-button formControlName="red" value="true">Red</lg-filter-button>
  <lg-filter-button formControlName="yellow" value="true">Yellow</lg-filter-button>
  <lg-filter-button formControlName="green" value="true">Green</lg-filter-button>
  <lg-filter-button formControlName="blue" value="true">Blue</lg-filter-button>
</lg-filter-group>
~~~

## Inputs

### LgFilterGroupComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-filter-group-id-\${nextUniqueId++}' | No |
| \`\`name\`\` | Set the name value for all inputs in the group('select-one' variant only), auto-generated if not provided | string | 'lg-filter-group-\${nextUniqueId++}' | No |
| \`\`value\`\` | Set the default selected filter button('select-one' variant only), must match the value of the filter button | string | null | No |
| \`\`valueArrayName\`\` | Set the name for the array of values. Must be used with a formArray and have the same name. | string | null | No |

### LgFilterButtonComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-filter-button-\${++nextUniqueId}' | No |
| \`\`name\`\` | HTML name attribute | string | null | No |
| \`\`value\`\` | Value that is set when the filter button is selected | string | true | No |


## Using only the SCSS files

Generate the markup as show in the example below.

### Filter group

| Class | Description |
|------|-------------|
| \`\`lg-filter-group\`\` | Adds styles to the wrapping element |
| \`\`lg-filter-group--no-icons\`\` | Adds 'no-icons' styles for filter buttons when user has multiple options |

### Filter button
| Class | Description |
|------|-------------|
| \`\`lg-filter-button__input\`\` | Adds styles to the radio button input element |
| \`\`lg-filter-button__label\`\` | Adds styles to the radio label element |

### Classes for SVG icons
Place the SVG icons in a container with the apropiate class like follows:

| Class | Description |
|------|-------------|
| \`\`filter-button__icon-add\`\` | SVG icon for unselected filter button state|
| \`\`filter-button__icon-selected\`\` | SVG icon for selected filter button state |


### Examples:
'select-one' variant:

~~~html
<div class="lg-filter-group">
  <label class="lg-label">Color</label>
  <div class="lg-filter-button">
    <input class="lg-filter-button__input" type="radio" name="color" value="red" checked="true">
    <label class="lg-filter-button__label">Red</label>
  </div>
  <div class="lg-filter-button">
    <input class="lg-filter-button__input" type="radio" name="color" value="yellow">
    <label class="lg-filter-button__label">Yellow</label>
  </div>
  <div class="lg-filter-button">
    <input class="lg-filter-button__input" type="radio" name="color" value="green">
    <label class="lg-filter-button__label">Green</label>
  </div>
  <div class="lg-filter-button">
    <input class="lg-filter-button__input" type="radio" name="color" value="blue">
    <label class="lg-filter-button__label">Blue</label>
  </div>
</div>
~~~

or for 'select-multiple' variant:

~~~html
<div class="lg-filter-group">
  <label class="lg-label">Color</label>
  <div class="lg-filter-button">
    <input class="lg-filter-button__input" type="checkbox" name="red" value="true">
    <label class="lg-filter-button__label">
      <span class="filter-button__icon-wrapper">
        <span class="filter-button__icon-add">
          <svg>...</svg>
        </span>
        <span class="filter-button__icon-selected">
          <svg>...</svg>
        </span>
      </span>
      Red
    </label>
  </div>
  <div class="lg-filter-button">
    <input class="lg-filter-button__input" type="checkbox" name="Green" value="true">
    <label class="lg-filter-button__label">
      <span class="filter-button__icon-wrapper">
        <span class="filter-button__icon-add">
          <svg>...</svg>
        </span>
        <span class="filter-button__icon-selected">
          <svg>...</svg>
        </span>
      </span>
      Red
    </label>
  </div>
</div>
~~~
`;
