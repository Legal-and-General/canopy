import { Meta, moduleMetadata } from '@storybook/angular';
import { Component, HostBinding, Input } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { ListWithIconsVariant } from '../list-with-icons.interface';
import { LgListWithIconsComponent } from '../list-with-icons.component';
import { LgListWithIconsItemComponent } from '../list-with-icons-item/list-with-icons-item.component';
import { LgListWithExpressiveStylingDirective } from '../list-with-expressive-styling/list-with-expressive-styling.directive';

const template = `
<ul lg-list-with-icons [variant]="variant">
  <li lg-list-with-icons-item *ngFor="let item of listItems" [iconName]="item.iconName" [iconColour]="colouredIcons ? item.iconColour : null"
  ><ng-container [ngTemplateOutlet]="item.isLink ? linkText : text" [ngTemplateOutletContext]="{text: item.text}"></ng-container>
    <ul lg-list-with-icons *ngIf="item.children as children">
      <li lg-list-with-icons-item *ngFor="let child of children" [iconName]="child.iconName" [iconColour]="colouredIcons ? child.iconColour : null"
      ><ng-container [ngTemplateOutlet]="child.isLink ? linkText : text" [ngTemplateOutletContext]="{text: child.text}"></ng-container>
      </li>
    </ul>
  </li>
</ul>

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
        padding: var(--space-sm);
      }
    `,
  ],
  standalone: true,
  imports: [
    LgListWithIconsComponent,
    LgListWithIconsItemComponent,
    NgFor,
    NgIf,
    NgTemplateOutlet,
  ],
})
class ListWithIconsWrapperComponent {
  @Input() variant: ListWithIconsVariant;
  @Input() listItems: Array<ListItems>;
  @Input() colouredIcons: boolean;

  @HostBinding('style.background-color') get bgColour(): string {
    switch (this.variant) {
      case 'dark-foreground':
        return 'var(--color-dandelion-yellow)';
      case 'light-foreground':
        return 'var(--color-super-blue)';
      default:
        return 'var(--color-white)';
    }
  }
}

export default {
  title: 'Components/List/Examples',
  decorators: [
    moduleMetadata({
      imports: [ ListWithIconsWrapperComponent, LgListWithExpressiveStylingDirective ],
    }),
  ],
  parameters: {
    backgrounds: { disable: true },
  },
  argTypes: {
    colouredIcons: {
      description: 'Shows an example of coloured icons',
    },
    variant: {
      table: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

interface ListItems {
  iconName: string;
  iconColour?: string;
  text: string;
  isLink?: boolean;
  children?: Array<ListItems>;
}

function getDefaultList(): Array<ListItems> {
  return [
    {
      iconName: 'checkmark',
      iconColour: '--color-leafy-green',
      text: 'List item 1',
    },
    {
      iconName: 'close',
      iconColour: '--color-terracotta',
      text: 'List item 2',
    },
    {
      iconName: 'checkmark',
      iconColour: '--color-leafy-green',
      text: 'List item 3',
      children: [
        {
          iconName: 'checkmark',
          iconColour: '--color-leafy-green',
          text: 'List item 3.1',
        },
        {
          iconName: 'checkmark',
          iconColour: '--color-leafy-green',
          text: 'List item 3.2',
          isLink: true,
        },
      ],
    },
    {
      iconName: 'checkmark',
      iconColour: '--color-leafy-green',
      text: 'List item 4',
    },
    {
      iconName: 'checkmark',
      iconColour: '--color-leafy-green',
      text: 'List item 5',
      isLink: true,
    },
  ];
}

export const ColouredListWithIcons = {
  name: '[Internal] Coloured icons',
  render: (args: ListWithIconsWrapperComponent) => ({
    props: args,
    template:
      '<lg-list-with-icons-wrapper [listItems]="listItems" [variant]="variant" [colouredIcons]="colouredIcons"></lg-list-with-icons-wrapper>',
  }),
  args: {
    listItems: getDefaultList(),
    colouredIcons: true,
  },
  // !dev tag removes a story/component from the sidebar (See: https://github.com/storybookjs/storybook/pull/26634)
  tags: [ '!dev' ],
};

export const NeutralForegroundListWithIcons = {
  name: 'List with icons - Neutral foreground',
  render: (args: ListWithIconsWrapperComponent) => ({
    props: args,
    template:
      '<lg-list-with-icons-wrapper [listItems]="listItems" [variant]="variant" [colouredIcons]="colouredIcons"></lg-list-with-icons-wrapper>',
  }),
  args: {
    listItems: getDefaultList(),
    colouredIcons: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
          <ul lg-list-with-icons>
            <li lg-list-with-icons-item iconName="checkmark">List item 1</li>
            <li lg-list-with-icons-item iconName="checkmark">List item 2</li>
            <li lg-list-with-icons-item iconName="close">List item 3</li>
          </ul>
        `,
      },
    },
  },
};

export const DarkForegroundListWithIcons = {
  name: 'List with icons - Dark foreground',
  render: (args: ListWithIconsWrapperComponent) => ({
    props: args,
    template:
      '<lg-list-with-icons-wrapper [listItems]="listItems" [variant]="variant" [colouredIcons]="colouredIcons"></lg-list-with-icons-wrapper>',
  }),
  args: {
    variant: 'dark-foreground',
    listItems: getDefaultList(),
    colouredIcons: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
          <ul lg-list-with-icons variant="dark-foreground">
            <li lg-list-with-icons-item iconName="help">List item 1</li>
            <li lg-list-with-icons-item iconName="idea">List item 2</li>
            <li lg-list-with-icons-item iconName="house">List item 3</li>
          </ul>
        `,
      },
    },
  },
};

export const LightForegroundListWithIcons = {
  name: 'List with icons - Light foreground',
  render: (args: ListWithIconsWrapperComponent) => ({
    props: args,
    template:
      '<lg-list-with-icons-wrapper [listItems]="listItems" [variant]="variant" [colouredIcons]="colouredIcons"></lg-list-with-icons-wrapper>',
  }),
  args: {
    variant: 'light-foreground',
    listItems: getDefaultList(),
    colouredIcons: false,
  },
  argTypes: {
    colouredIcons: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
          <ul lg-list-with-icons variant="light-foreground">
            <li lg-list-with-icons-item iconName="doc">List item 1</li>
            <li lg-list-with-icons-item iconName="doc">List item 2</li>
            <li lg-list-with-icons-item iconName="doc">List item 3</li>
          </ul>
        `,
      },
    },
  },
};

export const OrderedListWithNumerals = {
  name: 'Ordered list with expressive styling',
  render: (args: ListWithIconsWrapperComponent) => ({
    props: args,
    template: `
      <ol lgListWithExpressiveStyling>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 9</li>
        <li>Item 10</li>
      </ol>
    `,
  }),
  argTypes: { colouredIcons: { table: { disable: true } } },
};
