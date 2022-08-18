export const notes = `
More or Less box delivers a more / less expandable component, with awareness for it's state.

An alternative to the standard accordion.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgMoreLessBoxModule ],
})
~~~

and in your HTML:

~~~html
  <lg-more-less-box
    [open]="open"
    [read]="read"
    [showReadIndicator]="showReadIndicator"
    (closed)="onClosed()"
    (opened)="onOpened()"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet
      lobortis odio. Aenean egestas laoreet.
    </p>
    <lg-more-less-box-more-info>
      <p>
        Aenean efficitur dolor et ex congue pretium. Mauris nec suscipit purus.
        Fusce ornare risus sed magna vulputate, ut gravida elit sagittis. Duis
        laoreet, metus id sodales viverra, orci velit elementum est, vel ornare
        sapien ex ut purus. Donec pharetra tellus quis turpis consequat, quis
        condimentum tortor molestie.
      </p>
      <p>
        Nullam varius, odio in suscipit facilisis, lectus mauris posuere nisi,
        nec fermentum massa eros sed nibh. Nunc et interdum augue.
      </p>
    </lg-more-less-box-more-info>
  </lg-more-less-box>
~~~

## LgMoreLessBoxComponent

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided. | string | 'lg-more-less-box-id-\${++nextUniqueId}' | No |
| \`\`open\`\` | controls whether to open the box. | boolean | false | No |
| \`\`read\`\` | Toggle the value of the 'To READ' and 'READ' indicator. | boolean | false | No |
| \`\`showReadIndicator\`\` | True to display the 'To READ' / 'READ' indicator. | boolean | false | No |

### Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`closed\`\` | Event emitted when the box is closed. | EventEmitter\\<void\\> | n/a | No |
| \`\`opened\`\` | Event emitted when the box is opened. | EventEmitter\\<void\\> | n/a | No |
`;
