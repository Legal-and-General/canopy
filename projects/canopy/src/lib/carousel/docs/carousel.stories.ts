import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

import { notes } from '../carousel.notes';
import { LgCarouselComponent, LgCarouselItemComponent } from '..';
import { LgIconComponent } from '../../icon';
import { LgAutoplayComponent } from '../auto-play/auto-play.component';

export default {
  title: 'Components/Carousel/[DEPRECATED]/Examples',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        LgCarouselComponent,
        LgIconComponent,
        LgAutoplayComponent,
        LgCarouselItemComponent,
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    headingLevel: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description: 'The visually hidden heading level for the carousel.',
      table: {
        type: {
          summary: '1,2,3,4,5,6',
        },
      },
      control: {
        type: 'select',
      },
    },
    description: {
      description:
        'The visually hidden text used to describe the carousel content for screen readers.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    slideDuration: {
      control: {
        type: 'range',
        min: 0,
        max: 5000,
        step: 100,
      },
      description: 'Duration in milliseconds of the transition between slides.',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 500,
        },
      },
    },
    loopMode: {
      description:
        'Allows the carousel navigation to loop when the first or last item is active.',
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    autoPlayDelay: {
      description:
        'Delay time in milliseconds to switch to next slide when autoPlay mode is set to true.',
      control: {
        type: 'number',
      },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 2000,
        },
      },
    },
    autoPlay: {
      description: 'Enables auto play mode when set to true.',
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
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

const template = `
  <h1>[DEPRECATED]</h1>
  <lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration" [loopMode]="loopMode" [autoPlayDelay]="autoPlayDelay" [autoPlay]="autoPlay">${carouselItems}</lg-carousel>
`;

const defaultTemplate = `
  <h1>[DEPRECATED]</h1>
  <lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration">${carouselItems}</lg-carousel>
`;

export const DefaultCarousel = {
  name: 'Standard',
  render: (args: LgCarouselComponent) => ({
    props: args,
    template: template,
  }),
  args: {
    headingLevel: 2,
    description: 'Example carousel',
    slideDuration: 500,
    loopMode: null,
    autoPlayDelay: null,
    autoPlay: null,
  },
  parameters: {
    docs: {
      source: {
        code: defaultTemplate,
      },
    },
  },
};

const loopEnabledTemplate = `
  <h1>[DEPRECATED]</h1>
  <lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration" [loopMode]="loopMode">${carouselItems}</lg-carousel>
`;

export const LoopModeEnabledCarousel = {
  name: 'Loop enabled',
  render: (args: LgCarouselComponent) => ({
    props: args,
    template: loopEnabledTemplate,
  }),
  args: {
    headingLevel: 2,
    description: 'Example carousel',
    slideDuration: 500,
    loopMode: true,
    autoPlayDelay: null,
    autoPlay: null,
  },
  parameters: {
    docs: {
      source: {
        code: loopEnabledTemplate,
      },
    },
  },
};

const autoPlayEnabledTemplate = `
  <h1>[DEPRECATED]</h1>
  <lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration" [autoPlayDelay]="5000" [autoPlay]="true">${carouselItems}</lg-carousel>
`;

export const AutoPlayEnabledCarousel = {
  name: 'Auto play enabled',
  render: (args: LgCarouselComponent) => ({
    props: args,
    template: autoPlayEnabledTemplate,
  }),
  args: {
    headingLevel: 2,
    description: 'Example carousel',
    slideDuration: 500,
    loopMode: null,
    autoPlayDelay: 5000,
    autoPlay: true,
  },
  parameters: {
    docs: {
      source: {
        code: autoPlayEnabledTemplate,
      },
    },
  },
};
