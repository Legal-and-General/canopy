### LgCardHeroImageComponent

This is the primary layout section of the card component, it is used to contain a hero Image or a Brand Icon.
An image is added via the `src` input, and you need to specify if you want the image to be a cover via the `cover` input(see below for differences). A Brand Icon is added via content projection using the `<lg-brand-icon>` component.

#### Displaying a background cover image
To display an image as the background image of this element, which fills the container at a set height or width using `background-size: cover`, simply provide a URL to the desired image to the `src` input and provide the value `true` to the `cover` input.

Note that this image will fill the space of the container, but will preserve it's own aspect ratio, and therefore will be cropped in various ways. For example, on a tablet breakpoint, the container has a portrait aspect ratio, and then on desktop, it is landscape. Therefore we recommend that you only use images that are a large square, with the focus of the image in the centre (like a face), to avoid anything important being cut off.

``
<lg-card-hero-img [src]="imageUrl" [cover]="true">
</lg-card-hero-img>
``

#### Displaying a normal image tag
To display an image, simply provide a URL to the desired image to the `src` input. Using this method will set the image to the
full width and height of the container, so you will need to choose the image size carefully to fit for purpose. We recomand a image with aspect ratio of
3:2, dimensions: 600 × 400. You can also give an image alt text using the `imageAlt` input, and if the `imageAlt` input is not defined it will default
to 'card-hero-img' as alt text for the image.

``
<lg-card-hero-img [src]="imageUrl" [alt]="imageAltText'>
</lg-card-hero-img>
``

#### Displaying a Brand Icon
To use this component with a Brand Icon, the following is needed:

Import the brand icon component in your application:

```js
@NgModule({
  ...
  imports: [ ..., LgBrandIconComponent ],
});
```

Import the `LgBrandIconRegistry` service and register your brand icons inside your module:

```js
// import the desired icon
import { lgBrandIconSun } from '@legal-and-general/canopy';


export class SomeModule {
  constructor(private brandIconRegistry: LgBrandIconRegistry) {
    // register the icon using the `brandIconRegistry` service
    this.brandIconRegistry.registerBrandIcon([
      lgBrandIconSun
    ]);
  }
}
```

and in the HTML
```html
<lg-card-hero-img>
  <lg-brand-icon [name]="iconName" size="xs"></lg-brand-icon>
</lg-card-hero-img>
```

#### Inputs

| Name      | Description                                                                             | Type     | Default          | Required |
|-----------|-----------------------------------------------------------------------------------------|----------|------------------|----------|
|  `cover`  | Sets the image as a background cover image: `true`                                      | `boolean`| `false`          | No       |
|   `src`   | The image url to be displayed: `/testUrl`                                               | `string` | n/a              | No       |
|   `alt`   | The alternate text for an image, if the image cannot be displayed: `image-description`      | `string` | `''`             | No       |
