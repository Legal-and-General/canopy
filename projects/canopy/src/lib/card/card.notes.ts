export const notes = `
Provides a generic card component for displaying content. Consists of various card components that are designed to create modular and flexible card layouts, from a basic card with a title, text and buttons to a single-page Form Journey card.

## Usage

For a basic card, import the component in your application:

~~~
@NgModule({
  ...
  imports: [ ..., LgCardModule ],
})
~~~

---

### Other card types and templates

You can extend the basic card component and create specific card implementations.

#### Product card

This component uses some extra card components, such as \`LgCardPrincipleDataPoint\` and \`LgCardPrincipleDataPointValue\` to display data points. <a href="#product">View product card implementation</a>.

#### Form Journey card

Creates the Form Journey template, used to display a single page form. Note that the <form> element is a parent of the <lg-card> component, this is because the form inputs and submit button are spread out between the card content and card footer. <a href="#form-journey">View form journey implementation</a>

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
