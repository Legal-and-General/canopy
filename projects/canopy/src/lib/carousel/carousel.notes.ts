export const notes = `
# Carousel Component

## Purpose

Carousels allow customers to quickly navigate through grouped sections of content.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgCarouselModule ],
})
~~~

and in your HTML:

~~~html
<lg-carousel [description]="description" [headingLevel]="headingLevel" [loopMode]="true">
  <lg-carousel-item>
    Carousel item 1 content goes here
  </lg-carousel-item>

  <lg-carousel-item>
    Carousel item 2 content goes here
  </lg-carousel-item>

  <lg-carousel-item>
    Carousel item 3 content goes here
  </lg-carousel-item>
</lg-carousel>
~~~

## Carousel Inputs

| Name                  | Description                                                                                              |  Type   |  Default  | Required |
| --------------------- | -------------------------------------------------------------------------------------------------------- | :-----: | :-------: | :------: |
| \`\`loopMode\`\`      | Allows the carousel to navigation to loop when the first or last item is active.                         | boolean |   false   |   No     |
| \`\`slideDuration\`\` | Duration in milliseconds of the transition between slides.                                               | number  |   500     |   No     |
| \`\`description\`\`   | Text used to describe the carousel content for screen readers. This is visually hidden.                  | string  | undefined |   Yes    |
| \`\`headingLevel\`\`  | The heading level of the description: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\`   | number  | undefined |   Yes    |
`;
