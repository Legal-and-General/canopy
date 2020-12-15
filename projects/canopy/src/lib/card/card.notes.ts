export const notes = `
# Card Component

## Purpose
Provides a generic card component for displaying content.

## Usage
Import the component in your application:

~~~
@NgModule({
  ...
  imports: [LgCardModule],
})
~~~
and in your HTML:

~~~html
<lg-card>
  <lg-card-header>
    Your title
  </lg-card-header>
  <lg-card-content>
    Your content
  </lg-card-content>
</lg-card>
~~~

or for a Product card:

~~~html
<lg-card>
  <lg-card-header>
    <lg-card-title headingLevel="3">
      Card Title
    </lg-card-title>
    <lg-card-subtitle>
      Payroll Reference Number P23456
    </lg-card-subtitle>
    <lg-card-principle-data-point>
      <lg-card-principle-data-point-label>
        Last payment (after tax and deductions)
      </lg-card-principle-data-point-label>
      <lg-card-principle-data-point-value>
        <span><span class="lg-font-size-3">£</span>230.20</span>
      </lg-card-principle-data-point-value>
      <lg-card-principle-data-point-date>
        as of 01 Jan 2020
      </lg-card-principle-data-point-date>
    </lg-card-principle-data-point>
  </lg-card-header>
</lg-card>
~~~

or for a Form Journey card:

~~~html
<lg-card lgPadding="none">
  <lg-card-top-area lgPadding="sm" lgPaddingBottom="xs">
    <lg-breadcrumb lgMarginBottom="none">
      <lg-breadcrumb-item>
        <a href="#">
          <lg-icon [name]="'chevron-left'"></lg-icon>
          Back
        </a>
      </lg-breadcrumb-item>
    </lg-breadcrumb>
  </lg-card-top-area>
  <div lgContainer>
    <div lgRow>
      <div lgCol="12" lgColMd="10" lgColMdOffset="1">
        <lg-card-header>
          <lg-card-title headingLevel="4">
          {{ title }}
          </lg-card-title>
        </lg-card-header>
        <lg-card-content>
          <p>{{cardContent}}</p>
          <lg-input-field>
            {{ label }}
            <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
            <input lgInput formControlName="accountNumber"/>
          </lg-input-field>
        </lg-card-content>
      </div>
    </div>
  </div>
  <lg-card-bottom-area>
    <button lg-button type="button" variant="outline-primary" lgMarginRight="sm">Back</button>
    <button lg-button type="submit" variant="solid-primary">Confirm</button>
    <p lgPaddingBottom="md">{{ policy }}</p>
  </lg-card-bottom-area>
</lg-card>
~~~

### Inputs

Content projection slots

| Name | Description |
|------|-------------|
| \`\`<default>\`\` | The main body content of the card

### LgCardHeaderComponent
This is the primary layout section of the card component, it is used to contain the title, subtitle and principle value.

### LgCardTitleComponent
This is where the main title should be provided. It should be located inside the card header.

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`headingLevel\`\` | The level of the card heading: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |

### LgCardSubtitleComponent
If the card has a subtitle it should be located within this component. If a card has a subtitle it is expected to also implicitly have a title. It should be located inside the card header.

### LgCardPrincipleDataPoint
Sometimes the card will be displaying a principle data point. In that case this layout component should be used. It should be located inside the card header which will controls it's layout

### LgCardPrincipleDataPointValue
This is where the value for the data point should be projected. It should be located inside the card principle data point

### LgCardPrincipleDataPointLabel
This is where the label for the data point should be projected. A data point should always have a value, but it may not have a label. It should be located inside the card principle data point

### LgCardPrincipleDataPointDate
This is where the date for the data point should be projected. It should be located inside the card principle data point

### LgCardContent
This is the secondary layout section of the card component, it is used to contain secondary information.

### LgCardTopArea
This is the top area layout section of the card component, it is used to contain breadcrumbs or back button references.

### LgCardBottomArea
This is the bottom area layout section of the card component, it is used to contain call to action buttons as well as messages or hints.

### Using only the SCSS files
Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-card\`\` | Adds styles to the outer card element |
| \`\`lg-card-title\`\` | Adds styles to the outer card element |
| \`\`lg-card-subtitle\`\` | Adds styles to the outer card element |
| \`\`lg-card-principle-data-point\`\` | Adds styles to the outer principle-data-point element |
| \`\`lg-card-principle-data-label\`\` | Adds styles to the principle-data-label element |
| \`\`lg-card-principle-data-value\`\` | Adds styles to the principle-data-value element |
| \`\`lg-card-principle-data-date\`\` | Adds styles to the principle-data-date element |
| \`\`lg-card-top-area\`\` | Adds styles to the top area layout element |
| \`\`lg-card-bottom-area\`\` | Adds styles to the top area layout element |
| \`\`lg-card__form-journey \`\` | Adds the 'form-journey' styles to the outer card element |

#### Examples:
~~~html
<div class="lg-card">
    <div class="lg-card-header">
        Your title
    </div>
    <div class="lg-card-content">
        Your content
    </div>
</div>
~~~

### Using a nested grid:

When the content of a card is set in a nested grid you will need to suppress the default horizontal padding of the card via the lgPadding directive.

~~~html
<lg-card lgPaddingHorizontal="none">
  <div lgContainer>
    <div lgRow>
      <div lgCol="12" lgColMd="10" lgColMdOffset="1">
        <lg-card-content>
          Your content
        </lg-card-content>
      </div>
    </div>
  </div>
</lg-card>
~~~
`;
