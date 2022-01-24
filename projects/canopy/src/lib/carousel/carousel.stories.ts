import { CommonModule } from '@angular/common';

import { withKnobs, select, text, number } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonModule } from '../button';
import { LgCarouselModule } from './carousel.module';
import { notes } from './carousel.notes';

export default {
  title: 'Components/Carousel',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [CommonModule, LgCarouselModule, LgButtonModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

const carouselItems = `
<lg-carousel-item style="background-color: #028844; color: #FFFFFF">
  <h3>Carousel item 1</h3>
  <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>
  <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>
  </lg-carousel-item>

<lg-carousel-item style="background-color: #0076D6; color: #FFFFFF">
  <h3>Carousel item 2</h3>
  <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>
  <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>
  </lg-carousel-item>

<lg-carousel-item style="background-color: #028844; color: #FFFFFF">
  <h3>Carousel item 3</h3>
  <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>
  <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>
</lg-carousel-item>

<lg-carousel-item style="background-color: #0076D6; color: #FFFFFF">
  <h3>Carousel item 4</h3>
  <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>
  <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>
</lg-carousel-item>

<lg-carousel-item style="background-color: #0076D6; color: #FFFFFF">
  <h3>Carousel item 5</h3>
  <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>
  <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>
  </lg-carousel-item>
`;

function props() {
  const slideDurationOptions = {
    range: true,
    min: 0,
    max: 5000,
    step: 100,
  };
  return {
    headingLevel: select('Heading Level', [1, 2, 3, 4, 5, 6], 3),
    description: text('Description', 'Example carousel'),
    slideDuration: number('Slide Duration', 500, slideDurationOptions),
  };
}

export const standard = () => ({
  template: `<lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration">${carouselItems}</lg-carousel>`,
  props: props(),
});

export const loopModeEnabled = () => ({
  template: `<lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration" [loopMode]="true">${carouselItems}</lg-carousel>`,
  props: props(),
});

export const autoPlayEnabled = () => ({
  template: `<lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration" [autoPlayDelay]="5000" [autoPlay]="true">${carouselItems}</lg-carousel>`,
  props: props(),
});
