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

## Using only the SCSS files

Generate the markup as shown in the example below. Please ensure you have imported the necessary SCSS files.

This example contains only one promo card. Repeat as necessary.

| Class | Description |
|------|-------------|
| \`\`lg-promo-card-list\`\` | Adds styles to the outer promo card list element |
| \`\`lg-promo-card-list__separator\`\` | Adds styles to the promo card list separator |
| \`\`lg-promo-card-list-title\`\` | Adds styles to the promo card list title |
| \`\`lg-promo-card-list-title__heading\`\` | Adds styles to the promo card list title inner heading |
| \`\`lg-promo-card-list__promo-cards\`\` | Adds styles to the promo card list cards wrapper |
| \`\`lg-promo-card\`\` | Adds styles to the promo card |
| \`\`lg-promo-card__img-wrapper\`\` | Adds styles to the promo card image wrapper |
| \`\`lg-promo-card-image\`\` | Adds styles to the promo card image |
| \`\`lg-promo-card-image__content\`\` | Adds styles to the promo card image content |
| \`\`lg-promo-card__content-wrapper\`\` | Adds styles to the promo card content wrapper |
| \`\`lg-promo-card__content-inner\`\` | Adds styles to the promo card inner content |
| \`\`lg-promo-card-title\`\` | Adds styles to the promo card title |
| \`\`lg-promo-card-title__heading\`\` | Adds styles to the promo card title inner heading |
| \`\`lg-promo-card-content\`\` | Adds styles to the promo card content |
| \`\`lg-promo-card-footer\`\` | Adds styles to the promo card footer |

### Examples:
~~~html
<div class="lg-promo-card-list">
  <div class="lg-promo-card-list__separator">
    <div class="lg-margin--none lg-separator--dotted lg-separator" role="separator"></div>
  </div>
  <div class="lg-promo-card-list-title">
    <h1
      class="lg-font--expressive lg-promo-card-list-title__heading lg-font-size-5--strong">
      Get more from Legal &amp; General</h1>
  </div>
  <div class="lg-promo-card-list__promo-cards">
    <div class="lg-promo-card--solid-white lg-promo-card">
      <div class="lg-promo-card__img-wrapper">
        <div class="lg-promo-card-image">
          <div class="lg-promo-card-image__content"
               style="background-image: url('promo-card.jpg');"></div>
        </div>
      </div>
      <div class="lg-promo-card__content-wrapper">
        <div class="lg-promo-card__content-inner">
          <div class="lg-promo-card-title">
            <h2 class="lg-promo-card-title__heading lg-font--expressive lg-font-size-4--strong"> Need help with
              Care? </h2>
          </div>
          <div class="lg-promo-card-content"><p>Our care service can help you understand, find and
            fund care for you or a loved one.</p></div>
          <div class="lg-promo-card-footer">
            <button type="button"
                    class="lg-margin__bottom--none lg-btn--solid-secondary lg-btn">
              <span
                class="lg-btn__text"> Find out more </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
~~~

`;
