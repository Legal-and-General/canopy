import { Meta, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { IconName } from '../../icon';
import type { ListWithIconsSize } from '../list-with-icons.interface';
import { LgListWithIconsComponent } from '../list-with-icons.component';
import { LgListWithIconsItemComponent } from '../list-with-icons-item/list-with-icons-item.component';

const template = `
<ul lg-list-with-icons [size]="size">
  @for (item of listItems; track $index) {
    <li lg-list-with-icons-item [iconName]="item.iconName ?? 'bullet-point'" [variant]="item.variant"
    ><ng-container [ngTemplateOutlet]="item.isLink ? linkText : text" [ngTemplateOutletContext]="{text: item.text}"></ng-container>
      @if (item.children; as children) {
        <ul lg-list-with-icons [size]="size">
          @for (child of children; track $index) {
            <li lg-list-with-icons-item [iconName]="child.iconName ?? 'bullet-point'" [variant]="child.variant"
            ><ng-container [ngTemplateOutlet]="child.isLink ? linkText : text" [ngTemplateOutletContext]="{text: child.text}"></ng-container>
            </li>
          }
        </ul>
      }
    </li>
  }
</ul>

<ng-template #text let-text="text">{{ text }}</ng-template>
<ng-template #linkText let-text="text"><a href="#">{{ text }}</a></ng-template>
`;

const considerationsTemplate = `
<div>
  <h3 style="font-weight: 600;">Things you should consider</h3>
  <ul lg-list-with-icons [size]="size">
    @for (item of considerItems; track $index) {
      <li lg-list-with-icons-item [iconName]="item.iconName ?? 'bullet-point'" [variant]="item.variant"
      ><ng-container [ngTemplateOutlet]="item.isLink ? linkText : text" [ngTemplateOutletContext]="{text: item.text}"></ng-container>
      </li>
    }
  </ul>
</div>

<div style="margin-top: var(--space-6);">
  <h3 style="font-weight: 600;">Things you should also be aware of</h3>
  <ul lg-list-with-icons [size]="size">
    @for (item of awareItems; track $index) {
      <li lg-list-with-icons-item [iconName]="item.iconName ?? 'bullet-point'" [variant]="item.variant"
      ><ng-container [ngTemplateOutlet]="item.isLink ? linkText : text" [ngTemplateOutletContext]="{text: item.text}"></ng-container>
      </li>
    }
  </ul>
</div>

<ng-template #text let-text="text">{{ text }}</ng-template>
<ng-template #linkText let-text="text"><a href="#">{{ text }}</a></ng-template>
`;

@Component({
  selector: 'lg-considerations-list-wrapper',
  template: considerationsTemplate,
  styles: [
    `
      :host {
        display: block;
        padding: var(--space-4);
      }
      h3 {
        margin: 0 0 var(--space-4) 0;
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-600);
      }
    `,
  ],
  standalone: true,
  imports: [ LgListWithIconsComponent, LgListWithIconsItemComponent, NgTemplateOutlet ],
})
class ConsiderationsListWrapperComponent {
  @Input() size!: ListWithIconsSize;
  @Input() considerItems!: Array<ListItems>;
  @Input() awareItems!: Array<ListItems>;
}

const orderedTemplate = `
<ol lg-list-with-icons [size]="size">
  @for (item of listItems; track $index) {
    <li lg-list-with-icons-item [iconName]="item.iconName ?? 'bullet-point'" [variant]="item.variant"
    ><ng-container [ngTemplateOutlet]="item.isLink ? linkText : text" [ngTemplateOutletContext]="{text: item.text}"></ng-container>
      @if (item.children; as children) {
        <ol lg-list-with-icons [size]="size">
          @for (child of children; track $index) {
            <li lg-list-with-icons-item [iconName]="child.iconName ?? 'bullet-point'" [variant]="child.variant"
            ><ng-container [ngTemplateOutlet]="child.isLink ? linkText : text" [ngTemplateOutletContext]="{text: child.text}"></ng-container>
            </li>
          }
        </ol>
      }
    </li>
  }
</ol>

<ng-template #text let-text="text">{{ text }}</ng-template>
<ng-template #linkText let-text="text"><a href="#">{{ text }}</a></ng-template>
`;

@Component({
  selector: 'lg-list-with-icons-wrapper',
  template,
  styles: [
    `
      :host {
        display: block;
        padding: var(--space-4);
      }
    `,
  ],
  standalone: true,
  imports: [ LgListWithIconsComponent, LgListWithIconsItemComponent, NgTemplateOutlet ],
})
class ListWithIconsWrapperComponent {
  @Input() size!: ListWithIconsSize;
  @Input() listItems!: Array<ListItems>;
}

@Component({
  selector: 'lg-ordered-list-with-icons-wrapper',
  template: orderedTemplate,
  styles: [
    `
      :host {
        display: block;
        padding: var(--space-4);
      }
    `,
  ],
  standalone: true,
  imports: [ LgListWithIconsComponent, LgListWithIconsItemComponent, NgTemplateOutlet ],
})
class OrderedListWithIconsWrapperComponent {
  @Input() size!: ListWithIconsSize;
  @Input() listItems!: Array<ListItems>;
}

export default {
  title: 'Components/List with icons/Examples',
  tags: [ 'updated' ],
  decorators: [
    moduleMetadata({
      imports: [
        ListWithIconsWrapperComponent,
        OrderedListWithIconsWrapperComponent,
        ConsiderationsListWrapperComponent,
      ],
    }),
  ],
  parameters: {
    backgrounds: { disable: true },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [ 'default', 'large' ],
      description: 'List size variant',
    },
    listItems: {
      control: 'object',
      description:
        'List item data. Configure iconName variant per item, and add nested children arrays.',
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

interface ListItems {
  iconName: IconName;
  variant?: 'mono' | 'positive' | 'negative';
  text: string;
  isLink?: boolean;
  children?: Array<ListItems>;
}

interface OrderedListItems {
  variant?: 'mono' | 'positive' | 'negative';
  text: string;
  isLink?: boolean;
  children?: Array<OrderedListItems>;
}

function getConsiderationsListData(): {
  consider: Array<ListItems>;
  aware: Array<ListItems>;
  } {
  return {
    consider: [
      {
        iconName: 'checkmark',
        variant: 'positive',
        text: 'List item',
      },
      {
        iconName: 'checkmark',
        variant: 'positive',
        text: 'List item',
      },
      {
        iconName: 'checkmark',
        variant: 'positive',
        text: 'List item',
      },
      {
        iconName: 'checkmark',
        variant: 'positive',
        text: 'List item',
      },
      {
        iconName: 'checkmark',
        variant: 'positive',
        text: 'List item',
      },
    ],
    aware: [
      {
        iconName: 'close',
        variant: 'negative',
        text: 'List item',
      },
      {
        iconName: 'close',
        variant: 'negative',
        text: 'List item',
      },
      {
        iconName: 'close',
        variant: 'negative',
        text: 'List item',
      },
      {
        iconName: 'close',
        variant: 'negative',
        text: 'List item',
      },
      {
        iconName: 'close',
        variant: 'negative',
        text: 'List item',
      },
    ],
  };
}

function mapOrderedItemsToListItems(items: Array<OrderedListItems>): Array<ListItems> {
  return items.map(item => ({
    iconName: 'checkmark',
    variant: item.variant,
    text: item.text,
    isLink: item.isLink,
    children: item.children
      ? mapOrderedItemsToListItems(item.children)
      : undefined,
  }));
}

export const UnorderedList = {
  name: 'Unordered list',
  render: (args: ListWithIconsWrapperComponent) => ({
    props: args,
    template:
      '<lg-list-with-icons-wrapper [listItems]="listItems" [size]="size"></lg-list-with-icons-wrapper>',
  }),
  args: {
    listItems: [
      {
        iconName: 'bullet-point',
        variant: 'mono',
        text: 'List item',
      },
      {
        iconName: 'bullet-point',
        variant: 'mono',
        text: 'List item',
      },
      {
        iconName: 'bullet-point',
        variant: 'mono',
        text: 'List item',
        children: [
          {
            iconName: 'bullet-dash',
            variant: 'mono',
            text: 'List item',
          },
          {
            iconName: 'bullet-dash',
            variant: 'mono',
            text: 'List item',
          },
        ],
      },
      {
        iconName: 'bullet-point',
        variant: 'mono',
        text: 'List item',
      },
      {
        iconName: 'bullet-point',
        variant: 'mono',
        text: 'List item',
      },
    ],
    size: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `
          <ul lg-list-with-icons>
            <li lg-list-with-icons-item iconName="checkmark" variant="mono">List item 1</li>
            <li lg-list-with-icons-item iconName="checkmark" variant="mono">List item 2</li>
            <li lg-list-with-icons-item iconName="checkmark" variant="mono">List item 3</li>
          </ul>
        `,
      },
    },
  },
};

export const ConsiderationsList = {
  name: 'Considerations list',
  render: (args: ConsiderationsListWrapperComponent) => ({
    props: args,
    template:
      '<lg-considerations-list-wrapper [considerItems]="considerItems" [awareItems]="awareItems" [size]="size"></lg-considerations-list-wrapper>',
  }),
  args: {
    considerItems: getConsiderationsListData().consider,
    awareItems: getConsiderationsListData().aware,
    size: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `
          <div>
            <h3>Things you should consider</h3>
            <ul lg-list-with-icons>
              <li lg-list-with-icons-item iconName="checkmark" variant="positive">List item 1</li>
              <li lg-list-with-icons-item iconName="checkmark" variant="positive">List item 2</li>
              <li lg-list-with-icons-item iconName="checkmark" variant="positive">List item 3</li>
              <li lg-list-with-icons-item iconName="checkmark" variant="positive">List item 4</li>
              <li lg-list-with-icons-item iconName="checkmark" variant="positive">List item 5</li>
            </ul>
          </div>

          <div style="margin-top: var(--space-6);">
            <h3>Things you should also be aware of</h3>
            <ul lg-list-with-icons>
              <li lg-list-with-icons-item iconName="close" variant="negative">List item 1</li>
              <li lg-list-with-icons-item iconName="close" variant="negative">List item 2</li>
              <li lg-list-with-icons-item iconName="close" variant="negative">List item 3</li>
              <li lg-list-with-icons-item iconName="close" variant="negative">List item 4</li>
              <li lg-list-with-icons-item iconName="close" variant="negative">List item 5</li>
            </ul>
          </div>
        `,
      },
    },
  },
};

export const OrderedListWithNumbers = {
  name: 'Ordered list',
  render: (
    args: ListWithIconsWrapperComponent & {
      orderedListItems: Array<OrderedListItems>;
    },
  ) => ({
    props: {
      ...args,
      listItems: mapOrderedItemsToListItems(args.orderedListItems),
    },
    template:
      '<lg-ordered-list-with-icons-wrapper [listItems]="listItems" [size]="size"></lg-ordered-list-with-icons-wrapper>',
  }),
  args: {
    orderedListItems: [
      {
        variant: 'mono',
        text: 'List item',
      },
      {
        variant: 'mono',
        text: 'List item',
      },
      {
        variant: 'mono',
        text: 'List item',

        children: [
          {
            variant: 'mono',
            text: 'List item',
          },
          {
            variant: 'mono',
            text: 'List item',
            isLink: true,
          },
        ],
      },
      {
        text: 'List item',
      },
      {
        text: 'List item',
      },
    ],
    size: 'default',
  },
  argTypes: {
    size: {
      control: 'select',
      options: [ 'default', 'large' ],
      description: 'List size variant',
    },
    listItems: {
      table: {
        disable: true,
      },
    },
    orderedListItems: {
      control: 'object',
      description:
        'Ordered list items. Use text, variant, and nested children for child levels.',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
          <ol lg-list-with-icons [size]="size">
            <li lg-list-with-icons-item variant="mono">List item 1</li>
            <li lg-list-with-icons-item variant="positive">List item 2</li>
            <li lg-list-with-icons-item variant="negative">List item 3</li>
          </ol>
        `,
      },
    },
  },
};
