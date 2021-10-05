export const notes = `
# Promo Card List Component

## Purpose

Promo Cards allow you to arrange content in a card-like manner for promotional purposes. Promo Cards are organised by a
Promo Card List and will be displayed in columns on desktops and stacked on mobile devices.

### Content guidelines

Each Promo Card should respect the following conventions:

- Title - max 33 characters (with spaces)
- Content - max 140 characters (with spaces)
- Button - max 20 characters (with spaces)
- Image - max 620px x 620px

This is not enforced in the code, but it should be followed as close as possible to ensure optimal user experience.

## Usage

Import the component in your module:

~~~js
@NgModule({
  ...
  imports: [ ..., LgPromoCardModule ],
})
~~~

and in your HTML, place your Promo Cards in your Promo Card List:

~~~html
<lg-promo-card-list>
  <lg-separator [variant]="dotted" lgMargin="none"></lg-separator>
  <lg-promo-card-list-title [headingLevel]="headingLevel">
    Get more from Legal &amp; General
  </lg-promo-card-list-title>
  <lg-promo-card
    [variant]="variant">
    <lg-promo-card-image [imageUrl]="imageUrl"></lg-promo-card-image>
    <lg-promo-card-title [headingLevel]="headingLevelInner">
      Need help with Care?
    </lg-promo-card-title>
    <lg-promo-card-content>
      <p>Our care service can help you understand, find and fund care for you or a loved one.</p>
    </lg-promo-card-content>
    <lg-promo-card-footer>
      <button
        lgMarginBottom="none"
        lg-button
        type="button"
        [variant]="variant">
        Find out more
      </button>
    </lg-promo-card-footer>
  </lg-promo-card>
</lg-promo-card-list>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`headingLevel\`\` | Allows the card (list) heading level to be set | number | n/a | Yes |
| \`\`variant\`\` | The variant of promo card: \`\`solid-white\`\`, \`\`solid-green\`\` | PromoCardVariant | 'solid-white' | No |
| \`\`imageUrl\`\` | Identifies the card image | string | n/a | Yes |
`;
