export const notes = (productHeroHTML: string, conversationalHeroHTML: string) => `
# Hero Component


## Purpose
A flexible component that is often used to display the most prominent information about a page. The module consists of lots of smaller presentation components that help to map out the common hero use cases.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgHeroModule ],
})
~~~

and in your HTML...

~~~html
<lg-hero [overlap]="2">
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="2">
                Good morning, Gene
              </lg-hero-card-title>
            </lg-hero-card-header>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
~~~

## Other hero types and templates

You can extend the basic Hero component and create specific Hero layouts and implementations.

### Hero with breadcrumbs

Using the \`\`LgHeroCardHeaderComponent\`\` together with \`\`LgBreadcrumbComponent\`\`, some breadcrumbs can be easily added to the hero. Note that you should use the "light" variant of the Breadcrumbs, as it's rendering against a dark blue background.

~~~html
<lg-hero [overlap]="overlap">
  <lg-hero-header>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-breadcrumb lgMarginBottom="none">
            <lg-breadcrumb-item>
              <a href="#"><lg-icon [name]="'home'"></lg-icon>Home</a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              <a href="#" aria-current="page">Product Details</a>
            </lg-breadcrumb-item>
          </lg-breadcrumb>
        </div>
      </div>
    </div>
  </lg-hero-header>
</lg-hero>
~~~

### Product details

This component can used to display product data, for example on a prodcut details page. Note the extensive use of presentation components to acheive the desired layout.

~~~html
<lg-hero [overlap]="2">
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="4">
                Pension annuity
              </lg-hero-card-title>
              <lg-hero-card-subtitle>
                Payroll Reference Number P23456
              </lg-hero-card-subtitle>
              <lg-hero-card-notification>
                <lg-icon name="information-fill"></lg-icon>
                <p>Your payments have been suspended, please <a href="#">contact us</a> to learn more.</p>
              </lg-hero-card-notification>
              <lg-hero-card-principle-data-point>
                <lg-hero-card-principle-data-point-label headingLevel="5">
                  Last payment (after tax and deductions)
                </lg-hero-card-principle-data-point-label>
                <lg-hero-card-principle-data-point-value>
                  £230.20
                </lg-hero-card-principle-data-point-value>
              </lg-hero-card-principle-data-point>
            </lg-hero-card-header>
            <lg-hero-card-content>
              <lg-hero-card-data-point-list>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label [headingLevel]="6">
                    Payment due
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    15 Jan 2020
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label [headingLevel]="6">
                    Payment frequency
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    Monthly
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label [headingLevel]="6">
                    Tax code
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    2T <span lgMarginLeft="sm" class="lg-font-size-1">Received on 12 Mar 2019</span>
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
              </lg-hero-card-data-point-list>
            </lg-hero-card-content>
            <lg-hero-card-footer>
              <small class="lg-font-size-0-6">* This is not a guaranteed amount and could be subject to change.</small>
            </lg-hero-card-footer>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
~~~


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
        <div [lgCol]="12">
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

### LgHeroCardNotificationComponent
Displays a notification associated with a product, for example if the product's payments are in 'suspended' state.

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
`;
