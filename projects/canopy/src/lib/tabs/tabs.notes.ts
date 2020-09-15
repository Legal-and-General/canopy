export const notes = `
# Tabs Component

## Purpose
The tabs component lets users navigate between related sections of content, displaying one section at a time.


## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgTabsModule ],
})
~~~

and in your HTML:

~~~html
<lg-tabs [headingLevel]="1" label="Title" (tabEvent)="tabEvent($event)">
  <lg-tab-item>
    <lg-tab-item-heading>Tab 1</lg-tab-item-heading>
    <lg-tab-item-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere nec leo nec hendrerit. Pellentesque eu lacinia tortor. Donec urna felis, dictum et faucibus et, interdum ut urna. Nam eleifend eleifend mi vel blandit. Morbi rutrum a odio in pharetra. Quisque vitae lacus efficitur, elementum mauris in, porta nisl. Praesent porttitor accumsan ante, sed efficitur nunc placerat in. Etiam non lorem leo. Aenean magna lacus, iaculis at velit non, congue commodo dui. Pellentesque tempus elementum tempor.</p>
    </lg-tab-item-content>
  </lg-tab-item>
  <lg-tab-item>
    <lg-tab-item-heading>Tab 2</lg-tab-item-heading>
    <lg-tab-item-content>
      <p>Maecenas laoreet tristique ligula, mollis ullamcorper est faucibus eget. Aenean quis placerat arcu. Sed efficitur odio nunc, id facilisis orci accumsan eget. Nunc feugiat elit eget imperdiet faucibus. Maecenas faucibus sit amet nisi a ultricies. Donec id scelerisque ante, eget tempus dui. Fusce semper ex eu lorem pellentesque tristique. Proin non augue quis orci lobortis rhoncus. Aliquam quis luctus ipsum. Maecenas vulputate porta mauris, id lacinia turpis feugiat sed. Aenean et commodo elit, a dignissim massa. Fusce facilisis laoreet orci quis vehicula. Curabitur eu lacus vitae libero laoreet hendrerit at quis magna.</p>
    </lg-tab-item-content>
  </lg-tab-item>
  <lg-tab-item>
    <lg-tab-item-heading>Tab 3</lg-tab-item-heading>
    <lg-tab-item-content>
      <p>Phasellus enim sem, dignissim nec ullamcorper id, euismod in magna. Sed at egestas urna. Donec at nibh eros. Pellentesque at nunc in elit egestas pellentesque a quis nunc. Praesent commodo risus in metus tincidunt pretium. Nulla vehicula sem lectus, ac eleifend velit pellentesque a. Proin et varius ante, nec venenatis nulla. Pellentesque pharetra risus lorem, et congue ligula interdum volutpat. Donec ut iaculis metus. Nunc rutrum vestibulum ex nec condimentum. Pellentesque nec volutpat quam. Etiam tortor arcu, eleifend ut ante id, ullamcorper tristique libero. Praesent imperdiet, orci in tincidunt aliquet, quam sapien convallis nunc, non maximus dui lacus sed lacus. Suspendisse ut tortor dui.</p>
    </lg-tab-item-content>
  </lg-tab-item>
  <lg-tab-item>
    <lg-tab-item-heading>Tab 4</lg-tab-item-heading>
    <lg-tab-item-content>
      <p>Pellentesque finibus ac libero ac rutrum. Morbi faucibus, dui et efficitur posuere, urna ipsum vehicula dui, in placerat risus felis et lectus. Vivamus imperdiet nulla nisi, eget varius mi cursus nec. Suspendisse quis risus eleifend, pretium lectus eget, condimentum leo. Aliquam faucibus at mi sit amet volutpat. Nunc nec orci sapien. Duis augue quam, bibendum in enim a, ultricies luctus mi. Aliquam eleifend magna est, eget sagittis massa malesuada quis. Maecenas mattis tortor sit amet mi sagittis, vitae aliquam dui rhoncus. Aenean sed erat eu ante ornare sollicitudin in et est.</p>
    </lg-tab-item-content>
  </lg-tab-item>
</lg-tabs>
~~~


## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`label\`\` | The value to apply to the aria label | string | tabs | Yes |
| \`\`headingLevel\`\` | The level of the tab headings: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |

## Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`tabEvent\`\` | Event emitted when the selected tab changes | EventEmitter<{ index: number }> | n/a | No |


## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-tabs\`\` | Adds styles to the outer tabs element |
| \`\`lg-tabs__list\`\` | Adds styles to the tabs list |
| \`\`lg-tabs__list-item-heading\`\` | Adds styles to the tabs list item heading |
| \`\`lg-tabs__list-item-toggle\`\` | Adds styles to the tabs list item |
| \`\`lg-tabs__content\`\` | Adds styles to the tabs content |
| \`\`lg-tabs__content-section\`\` | Adds styles to sections within the content tabs  |

Modifiers:

| Class | Description |
|------|-------------|
| \`\`lg-tabs__list-item-toggle--selected\`\` | Adds the selected state to the list item |

### Examples:
~~~html
<div class="lg-tabs">
  <div class="lg-tabs__list" role="tablist" aria-label="Annuities">
    <h3 class="lg-tabs__list-item-heading">
      <button class="lg-tabs__list-item-toggle lg-tabs__list-item-toggle--selected" role="tab" aria-selected="true" aria-controls="tab-item-content-0-0" id="tab-item-heading-0-0">
        Product details
      </button>
    </h3>
    <h3 class="lg-tabs__list-item-heading">
      <button class="lg-tabs__list-item-toggle" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-item-content-0-1" id="tab-item-heading-0-1">
        Payments and tax
      </button>
    </h3>
  </div>
  <div class="lg-tabs__content" role="tabpanel" tabindex="0" id="tab-item-content-0-0" aria-labelledby="tab-item-heading-0-0">
    You have a standard lifetime annuity. We will pay you a guaranteed income for life
  </div>
  <div class="lg-tabs__content" role="tabpanel" tabindex="0" id="tab-item-content-0-1" aria-labelledby="tab-item-heading-0-1" hidden="">
    Your last payment was £230.20 after tax and deductions
  </div>
</div>
~~~
`;

export const tabbedNavNotes = `
# Tab Navigation Bar Component

## Purpose
The tabbed navigation bar provides a tab-like UI for navigating between routes or urls. The tabbed navigatiom bar is router agnostic, so you will need to place the \`router-outlet\` anywhere in your view. Don't forget to add the \`aria-labelledby\` attribute to the content output by the \`router-outlet\`.
The \`isActive\` property is used to select the current active tab.


## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgTabsModule ],
})
~~~

and in your HTML:

~~~html
<lg-tab-nav-bar label="Tabbed navigtion label">
  <a lgTabNavBarLink id="tabbed-nav-1" [isActive]="true" [routerLink]="">Tab 1</a>
  <a lgTabNavBarLink id="tabbed-nav-2" [routerLink]="">Tab 2</a>
  <a lgTabNavBarLink id="tabbed-nav-3" [routerLink]="">Tab 3</a>
</lg-tab-nav-bar>
<lg-tab-nav-content [selectedTabId]="tabbed-nav-1">
  <p>Insert router-outlet here.</p>
</lg-tab-nav-content>
~~~

## \`lg-tab-nav-bar\` Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`label\`\` | Label for the tab list| string | Tabs | No |

## \`lgTabNavBarLink\` Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`index\`\` | Sets the tab index position in tab list | number | 0 | No |
| \`\`isActive\`\` | Sets the active state of the tab | boolean | false | No |
| \`\`isFocused\`\` | Sets the focus state of the tab | boolean | false | No |

## \`lgTabNavBarLink\` Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`isActive\`\` | Sets the current actve tab | boolean | undefined | No |

## \`lg-tab-nav-content\` Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`selectedTabId\`\` | Sets the id of the current selected tab | string | undefined | No |

`;
