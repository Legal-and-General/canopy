export const notes = `
# Data Point Component

## Purpose
To display data organised by heading and value. A Data Point can be used on it's own, or grouped into a Data Point List where each one will be displayed horizontally and given a list-item role.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgDataPointModule ],
})
~~~

and in your HTML:

~~~html
<lg-data-point-list>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Name on account
    </lg-data-point-label>
    <lg-data-point-value>
      Joe Bloggs
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Account number
    </lg-data-point-label>
    <lg-data-point-value>
      ***5678
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Bank sort code
    </lg-data-point-label>
    <lg-data-point-value>
      00 - 00 - **
    </lg-data-point-value>
  </lg-data-point>
</lg-data-point-list>
~~~


## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| headingLevel | Allows the heading level to be set | number | n/a | Yes |


## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-data-point-list\`\` | Adds styles to the outer data points element |
| \`\`lg-data-point\`\` | Adds styles to the individual data point elements |
| \`\`lg-data-point-label\`\` | Adds styles to the individual data point elements heading |
| \`\`lg-data-point-value\`\` | Adds styles to the individual data point elements value |


### Examples:
~~~html
<div class="lg-data-point-list" role="list">
  <div role="listitem">
    <div class="lg-data-point-label">
      <h4 class="lg-data-point-label__heading-wrapper">
        Name on account
      </h4>
    </div>
    <div class="lg-data-point-value">
      Joe Bloggs
    </div>
  </div>
  <div role="listitem">
    <div class="lg-data-point-label">
      <h4 class="lg-data-point-label__heading-wrapper">
        Account number
      </h4>
    </div>
    <div class="lg-data-point-value">
      ***5678
    </div>
  </div>
  <div role="listitem">
    <div class="lg-data-point-label">
      <h4 class="lg-data-point-label__heading-wrapper">
        Bank sort code
      </h4>
    </div>
    <div class="lg-data-point-value">
      00 - 00 - **
    </div>
  </div>
</div>
~~~
`;
