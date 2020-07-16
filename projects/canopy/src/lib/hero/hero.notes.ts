export const notes = (
  productHeroHTML: string,
  conversationalHeroHTML: string,
) => `
# Hero Component


## Purpose
A flexible component that is often used to display the most prominent information about a page. The module consists of lots of smaller presentation components that help to map out the common hero use cases.

### LgHeroComponent
This is the branded bar which runs across
the top of the page. It also controls the functionality to create the 'overlap' between the page content.

#### Configure Overlap

~~~html
<lg-hero [overlap]="2"></lg-hero>
~~~

#### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`overlap\`\` | The amount that the page content overlaps the hero component (rem) | number | 2 | No |


### LgHeroContent
This is the main section of the hero bar, it stretches the full width and is agnostic of grid system. You will need to configure the grid in the contents of this component to match your page layout.

#### Configure Grid

~~~html
<lg-hero [overlap]="2">
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div lgCol="12">
          <lg-hero-card>
            ...
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
~~~

### LgHeroContent
This is the top section of the hero bar, it stretches the full width and is agnostic of grid system. It is generally used to home the breadcrumb component if there is one. Similar to LgHeroContent you will need to configure the grid in the contents of this component to match your page layout.


### LgHeroCard
A container component for displaying content within the hero area. The hero and hero card components are agnostic of the grid layout of the page. You will need to wrap the hero card component with the specific grid that is required.

### LgHeroCardHeaderComponent
This is the primary layout section of the hero component, it is used to contain the title, subtitle and principle value.

### LgHeroCardTitleComponent
This is where the main hero title should be provided. It should be located inside the hero header.

#### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`headingLevel\`\` | The level of the hero card heading: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |

### LgHeroCardSubtitleComponent
If the hero has a subtitle it should be located within this component. If a hero has a subtitle it is expected to also implicitly have a title. It should be located inside the hero header.

### LgHeroCardPrincipleDataPoint
Sometimes the hero card will be displaying a principle data point. In that case this layout component should be used. It should be located inside the hero header which will controls it's layout

### LgHeroCardPrincipleDataPointValue
This is where the value for the data point should be projected. It should be located inside the hero principle data point

### LgHeroCardPrincipleDataPointLabel
This is where the label for the data point should be projected. A data point should always have a value, but it may not have a label. It should be located inside the hero principle data point

#### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`headingLevel\`\` | The level of the heading in the label: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |

### LgHeroCardContent
This is the secondary layout section of the hero component, it is used to contain secondary information.

### LgHeroCardDataPointList
When the hero card is being used to display secondary data points, those data points should be wrapped in a list. This element provides the list semantics, it should be contained inside the hero content.

### LgHeroCardDataPoint
Sometimes the hero card will be displaying one or more secondary data points. In that case this layout component should be used. It should be located inside the hero content which will controls it's layout. One or more data points can be supported.

### LgHeroCardDataPointValue
This is where the value for the data point should be projected. It should be located inside the hero data point

### LgHeroCardDataPointLabel
This is where the label for the data point should be projected. A data point should always have a value, but it may not have a label. It should be located inside the hero data point

#### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`headingLevel\`\` | The level of the heading in the label: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |

### LgHeroCardFooter
This where any extra text related to the hero card can be displayed, such as a small print.

## Usage
~~~js
@NgModule({
  ...
  declarations: [ ..., LgHeroModule ],
})
~~~

and in your HTML:

Product data

~~~html
  ${productHeroHTML}
~~~

Conversational ui

~~~html
  ${conversationalHeroHTML}
~~~

## Using only the SCSS files

| Class | Description |
|------|-------------|
| \`\`lg-hero\`\` | Adds the default styles to the hero
| \`\`lg-hero-card\`\` | Creates a space for the card content

### Examples:
~~~html
<div class="lg-hero" style="margin-bottom: -2rem; padding-bottom: 2rem;">
  <div class="lg-container">
    <div class="lg-row">
      <div class="lg-col-xs-12">
        <div class="lg-hero-card">
          ...
        </div>
      </div>
    </div>
  </div>
</div>
~~~

`;
