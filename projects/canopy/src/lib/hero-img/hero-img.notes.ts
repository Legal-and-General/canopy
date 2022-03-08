export const notes = (imageBackgroundHeroHTML: string) => `
  # Hero Image Component
  
  
  ## Purpose
  Provides a hero component that can used to display a hero banner with a background image and a content container. Content container can be used to display page title, subtitle and buttons.
  
  ## Usage
  ~~~js
  @NgModule({
    ...
    imports: [ ..., LgHeroImgModule ],
  })
  ~~~
  
  and in your HTML...
  
  ~~~html
  ${imageBackgroundHeroHTML}
  ~~~
  

  #### Inputs
  
  | Name | Description | Type | Default | Required |
  |------|-------------|:----:|:-----:|:-----:|
  | \`\`imageUrl\`\` | Background image url | string | n/a | Yes |
  
  
  ### LgHeroImgComponent
  This is the hero banner with a background image that runs across
  the top of the page. It also controls the functionality to create the 'overlap' between the page content.

  #### Configure Overlap

  ~~~html
  <lg-hero-img [overlap]="2"></lg-hero-img>
  ~~~

  #### Inputs

  | Name | Description | Type | Default | Required |
  |------|-------------|:----:|:-----:|:-----:|
  | \`\`overlap\`\` | The amount that the page content overlaps the hero component (rem) | number | 2 | No |
    

  #### Configure Grid
  
  ~~~html
  <lg-hero-img [overlap]="2">
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-img-card>
            ...
          </lg-hero-img-card>
        </div>
      </div>
    </div>
  </lg-hero-img>
  ~~~
  
  ### LgHeroImgCardComponent
  A container component for displaying content within the hero area. The hero and hero card components are agnostic of the grid layout of the page. You will need to wrap the hero card component with the specific grid that is required.
  
  ### LgHeroImgCardTitleComponent
  This is where the main hero title should be provided. It should be located inside the hero card.
  
  #### Inputs
  
  | Name | Description | Type | Default | Required |
  |------|-------------|:----:|:-----:|:-----:|
  | \`\`headingLevel\`\` | The level of the hero card heading: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |
  
  ### LgHeroCardSubtitleComponent
  If the hero has a subtitle it should be located within this component.
  
  #### Inputs
  
  | Name | Description | Type | Default | Required |
  |------|-------------|:----:|:-----:|:-----:|
  | \`\`headingLevel\`\` | The level of the heading in the label: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |
  
  `;
