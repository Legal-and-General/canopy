export const notes = `
# Card Component

## Purpose
Provides a generic card component for displaying content. Consists of various card components that are designed to create modular and flexible card layouts, from a basic card with a title, text and buttons to a single-page Form Journey card.

## Usage

For a basic card, import the component in your application:

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

---

### Other card types and templates

You can extend the basic card component and create specific card implementations.

#### Product card

This component uses some extra card components, such as \`LgCardPrincipleDataPoint\` and \`LgCardPrincipleDataPointValue\` to display data points.

~~~html
<lg-card>
  <lg-card-content>
    <div lgRow>
      <div lgCol="12" lgColMd="6">
        <lg-card-title headingLevel="4">
          <a href="#">{{title}}</a>.
        </lg-card-title>
        <lg-card-subtitle>
          Payroll Reference Number P23456
        </lg-card-subtitle>
      </div>
      <lg-card-principle-data-point lgCol="12" lgColMd="6">
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
    </div>
  </lg-card-content>
</lg-card>
~~~

#### Form Journey card

Creates the Form Journey template, used to display a single page form. Note that the <form> element is a parent of the <lg-card> component, this is because the form inputs and submit button are spread out between the card content and card footer.

~~~html
<div lgContainer>
<div lgRow>
  <div lgCol="12" lgColLg="6" lgColLgOffset="3" lgColMd="10" lgColMdOffset="1">
    <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
      <lg-card lgPadding="none">
        <lg-card-header lgPadding="sm" lgPaddingBottom="xs" lgMarginBottom="lg">
          <lg-breadcrumb lgMarginBottom="none">
            <lg-breadcrumb-item>
              <a href="#">
                <lg-icon [name]="'chevron-left'"></lg-icon>
                Back
              </a>
            </lg-breadcrumb-item>
          </lg-breadcrumb>
        </lg-card-header>
        <lg-card-content>
          <div lgContainer>
            <div lgRow>
              <div lgCol="12" lgColMd="10" lgColMdOffset="1">
                <lg-card-title headingLevel="3" lgPaddingBottom="md">{{ title }}</lg-card-title>
                <p>{{cardContent}}</p>

                <lg-input-field [block]="block">
                  {{ label }}
                  <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
                  <input lgInput formControlName="accountNumber" size="8" />
                </lg-input-field>

              </div>
            </div>
          </div>
        </lg-card-content>
        <lg-card-footer>
          <div lgContainer>
            <div lgRow>
              <div lgCol="12" lgColMd="10" lgColMdOffset="1">
                <button lg-button type="button" variant="outline-primary" lgMarginRight="sm">Back</button>
                <button lg-button type="submit" variant="solid-primary">Confirm</button>
                <p *ngIf="policy" lgPaddingBottom="md">{{ policy }}</p>
              </div>
            </div>
          </div>
        </lg-card-footer>
      </lg-card>
    </form>
  </div>
</div>
</div>
~~~

### Inputs

Content projection slots

| Name | Description |
|------|-------------|
| \`\`<default>\`\` | The main body content of the card

### LgCardHeaderComponent
This is the primary layout section of the card component, it is used to contain breadcrumbs or other similar content.

### LgCardContent
This is the secondary layout section of the card component, it is used to contain the cards main content and provides the inner padding of the card.

### LgCardTitleComponent
This is where the main title should be provided. It should be located inside the card content.

#### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`headingLevel\`\` | The level of the card heading: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |

### LgCardSubtitleComponent
If the card has a subtitle it should be located within this component. If a card has a subtitle it is expected to also implicitly have a title. It should be located inside the card content.

### LgCardPrincipleDataPoint
Sometimes the card will be displaying a principle data point. In that case this layout component should be used. It should be located inside the card content which will control it's layout

### LgCardPrincipleDataPointValue
This is where the value for the data point should be projected. It should be located inside the card principle data point

### LgCardPrincipleDataPointLabel
This is where the label for the data point should be projected. A data point should always have a value, but it may not have a label. It should be located inside the card principle data point

### LgCardPrincipleDataPointDate
This is where the date for the data point should be projected. It should be located inside the card principle data point

### LgCardFooter
This is the footer layout section of the card component, it is used to contain call to action buttons as well as messages or hints.
`;
