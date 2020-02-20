export const notes = `
# Date Input Component

## Purpose
Provides a component for capturing a date. The current implementation does not do any date validation,
it purely concatenates the various string values and returns them as a valid ISO 8601 date format 'YYYY-MM-DD'.

## Usage
Import the Date Input Module into your application:

~~~js
@NgModule({
  ...
  imports: [LgDateFieldModule],
})
~~~

and in your HTML:

~~~html
<lg-date-field formControlName="date">
  Date of birth
  <lg-hint>For example, 12 06 1983</lg-hint>
</lg-date-field>
~~~

## Inputs

### LgDateFieldComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`dateId\`\` | HTML ID attribute for the date input, auto generated if not provided | string | 'lg-input-date-\${nextUniqueId++}' | No |
| \`\`monthId\`\` | HTML ID attribute for the month input, auto generated if not provided | string | 'lg-input-month-\${nextUniqueId++}' | No |
| \`\`yearId\`\` | HTML ID attribute for the year input, auto generated if not provided | string | 'lg-input-year-\${nextUniqueId++}' | No |
| \`\`ariaDescribedBy\`\` | HTML ID for the corresponding element that describes the date field, if not provided it will use the hint field where appropriate | string | null | No |

## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-date-field\`\` | Adds styles to the wrapping element |


### Examples:
~~~html
<div class="lg-date-field">
  <fieldset aria-describedby="date-hint">
    <legend class="lg-label">
      Date of birth
      <span id="date-hint" class="lg-hint">For example, 12 06 1983</span>
    </legend>
    <div class="lg-date-field__fields">
      <div class="lg-date-field__date">
        <label class="lg-label" for="date-input-0">Day</label>
        <input max="31" min="1" placeholder="DD" type="number" class="lg-input" name="date" id="date-input-0">
      </div>
      <div class="lg-date-field__month">
        <label class="lg-label" for="month-input-0">Month</label>
        <input max="12" min="1" placeholder="MM" type="number" class="lg-input" name="month" id="month-input-0">
      </div>
      <div class="lg-date-field__year">
        <label class="lg-label" for="year-input-0">Year</label>
        <input max="9999" min="0000" placeholder="YYYY" type="number" class="lg-input" name="year" id="year-input-0">
      </div>
    </div>
  </fieldset>
</div>
~~~
`;
