import { Component, OnInit } from '@angular/core';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgCardModule } from '../../card/card.module';
import { LgSkeletonDirective } from '../skeleton.directive';

interface Data {
  title?: string;
  subTitle?: string;
  content?: string;
  datapoint?: {
    label: string;
    value: string;
    prefix?: string;
    suffix?: string;
  };
}

@Component({
  selector: 'lg-async-skeleton-loading-card',
  template: `
    <lg-card>
      <lg-card-header>
        <lg-card-title headingLevel="4">
          <span lgSkeleton lgSkeletonWidth="20">{{ data?.title }}</span>
        </lg-card-title>
      </lg-card-header>
      <lg-card-content lgSkeleton lgSkeletonHeight="3">
        {{ data?.content }}
      </lg-card-content>
    </lg-card>
  `,
})
class AsyncSkeletonLoadingCardComponent implements OnInit {
  data: Data = null;

  ngOnInit() {
    const mockAsyncDelay = 5000;

    setTimeout(() => {
      this.data = {
        title: 'Title of product',
        content:
          'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      };
    }, mockAsyncDelay);
  }
}

@Component({
  selector: 'lg-async-skeleton-loading-product-card',
  template: `
    <lg-card>
      <lg-card-content>
        <div lgRow>
          <div lgCol="12" lgColMd="6">
            <lg-card-title headingLevel="4">
              <a href="#" lgSkeleton lgSkeletonWidth="18">{{ data?.title }}</a>
            </lg-card-title>
            <lg-card-subtitle lgSkeletonWidth="14" lgSkeleton>
              {{ data?.subTitle }}
            </lg-card-subtitle>
          </div>
          <lg-card-principle-data-point lgCol="12" lgColMd="6">
            <lg-card-principle-data-point-label
              lgSkeleton
              lgSkeletonWidth="20"
              lgSkeletonRightAlign="true"
            >
              {{ data?.datapoint.label }}
            </lg-card-principle-data-point-label>
            <lg-card-principle-data-point-value
              lgSkeleton
              lgSkeletonWidth="5"
              lgSkeletonRightAlign="true"
            >
              <span
                ><span class="lg-font-size-3">{{ data?.datapoint.prefix }}</span
                >{{ data?.datapoint.value }}</span
              >
            </lg-card-principle-data-point-value>
            <lg-card-principle-data-point-date
              lgSkeleton
              lgSkeletonWidth="10"
              lgSkeletonRightAlign="true"
            >
              {{ data?.datapoint.suffix }}
            </lg-card-principle-data-point-date>
          </lg-card-principle-data-point>
        </div>
      </lg-card-content>
    </lg-card>
  `,
})
class AsyncSkeletonLoadingProductCardComponent implements OnInit {
  data: Data = null;

  ngOnInit() {
    const mockAsyncDelay = 5000;

    setTimeout(() => {
      this.data = {
        title: 'Card title',
        subTitle: 'Product name',
        datapoint: {
          label: 'Last payment (after tax and deductions)',
          value: '230.20',
          prefix: '£',
          suffix: 'as of 01 Jan 2020',
        },
      };
    }, mockAsyncDelay);
  }
}

@Component({
  selector: 'lg-async-skeleton-loading-data-point',
  template: `
    <lg-card>
      <lg-card-content>
        <lg-data-point>
          <lg-data-point-label [headingLevel]="4">
            <span lgSkeleton lgSkeletonWidth="10">{{ data?.datapoint?.label }}</span>
          </lg-data-point-label>
          <lg-data-point-value lgSkeleton lgSkeletonWidth="8">
            {{ data?.datapoint?.value }}
          </lg-data-point-value>
        </lg-data-point>
      </lg-card-content>
    </lg-card>
  `,
})
class AsyncSkeletonLoadingDataPointComponent implements OnInit {
  data: Data = null;

  ngOnInit() {
    const mockAsyncDelay = 5000;

    setTimeout(() => {
      this.data = {
        datapoint: {
          label: 'Data point label',
          value: '£999.99',
        },
      };
    }, mockAsyncDelay);
  }
}

export default {
  title: 'Helpers/Directives/Skeleton loading/Examples',
  decorators: [
    moduleMetadata({
      declarations: [
        AsyncSkeletonLoadingProductCardComponent,
        AsyncSkeletonLoadingCardComponent,
        AsyncSkeletonLoadingDataPointComponent,
      ],
      imports: [ LgCardModule ],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'Super Blue',
    },
  },
} as Meta;

const skeletonTemplate = `
<lg-async-skeleton-loading-card></lg-async-skeleton-loading-card>
<lg-async-skeleton-loading-product-card></lg-async-skeleton-loading-product-card>
<lg-async-skeleton-loading-data-point></lg-async-skeleton-loading-data-point>
`;

const defaultSkeletonStory: StoryFn<LgSkeletonDirective> = (
  args: LgSkeletonDirective,
) => ({
  props: args,
  template: skeletonTemplate,
});

export const defaultSkeleton = defaultSkeletonStory.bind({});
defaultSkeleton.storyName = 'Skeleton Loading';

defaultSkeleton.parameters = {
  docs: {
    source: {
      code: skeletonTemplate,
    },
  },
};
