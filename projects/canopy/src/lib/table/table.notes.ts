export const notes = `
The table component provides a way to present tabular data in a responsive format. On small screens, the layout of the table changes to display the table headers alongside each value, providing an easier way for users to read the data as they scroll down the list of rows.

There are several options that allow you to customise the table behaviour at for different uses cases and screen sizes.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgTableModule ],
})
~~~

### Simple example

~~~html
<table lg-table>
  <thead lg-table-head>
    <tr lg-table-row>
      <th lg-table-head-cell>Author</th>
      <th lg-table-head-cell>Book</th>
      <th lg-table-head-cell>Published</th>
    </tr>
  </thead>
  <tbody lg-table-body>
    <tr lg-table-row>
      <td lg-table-cell>Orhan Pamuk</td>
      <td lg-table-cell>Strangeness in my Mind</td>
      <td lg-table-cell>2016</td>
    </tr>
    <tr lg-table-row>
      <td lg-table-cell>Albert Camus</td>
      <td lg-table-cell>The Plague</td>
      <td lg-table-cell>1947</td>
    </tr>
  </tbody>
</table>
~~~

### Table with expandable detail rows

This table adds the \`\`LgTableRowToggleComponent\`\`, and then an expandable detail row. This creates a table that allows the user to expand a row for more information. This can be seen on the <a href="/story/components-table--detail">Expandable Detail story</a>.

~~~html
<table lg-table>
  <thead lg-table-head>
    <tr lg-table-row>
      <th lg-table-head-cell>Author</th>
      <th lg-table-head-cell>Book</th>
      <th lg-table-head-cell>Published</th>
    </tr>
  </thead>

  <tbody lg-table-body>
    <tr lg-table-row>
      <td>
        <lg-table-row-toggle
          (click)="<function-to-handle-click>"
          [isActive]="<logic-to-handle-toggle>"
        >
        </lg-table-row-toggle>
      </td>
    <td lg-table-cell>Orhan Pamuk</td>
      <td lg-table-cell>Strangeness in my Mind</td>
      <td lg-table-cell>2016</td>
    </tr>
    <tr lg-table-row [isHidden]="<logic-to-handle-row>">
      <td lg-table-cell>
        <lg-table-expanded-detail>
          Detail content goes here
        </lg-table-expanded-detail>
      </td>
    </tr>
  </tbody>
</table>
~~~

### Table with long copy

Sometimes a table can be used to display large amounts of copy, including buttons, links and headings.

Note that each \`\`LgTableCellComponent\`\` has the \`\`stack\`\` Input set to \`\`true\`\`, which stacks the label and content on top of each other on small screens, instead of side by side. Also note the use of \`\`<colgroup>\`\` to control width of the columns on large screens. This can be seen on the <a href="/story/components-table--with-long-copy">Table With Long Copy story</a>.

Also note the use of the \`\`LgMarginDirective\`\`, such as \`\`lgMarginBottom="xs"\`\`, to add extra space around content, making it more readable.

~~~html
<table lg-table>
  <colgroup>
    <col span="1" style="width: 65%;" />
    <col span="1" style="width: 35%;" />
  </colgroup>
  <thead lg-table-head>
    <tr lg-table-row>
      <th lg-table-head-cell>Item</th>
      <th lg-table-head-cell>More information</th>
    </tr>
  </thead>

  <tbody lg-table-body>
    <tr lg-table-row>
      <td lg-table-cell [stack]="true">
        <h3 lgMarginVertical="xs">Item one: Lorem ipsum dolor sit amet</h3>
        <p lgMarginBottom="xs">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
      </td>
      <td lg-table-cell [showLabel]="false" [stack]="true">
        <p>Sed ut perspiciatis</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button lg-quick-action><lg-icon name="information-fill"></lg-icon>Find out more</button>
      </td>
    </tr>
  </tbody>
</table>
~~~


## Inputs

### LgTableComponent
A component that acts as a standard table.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`showColumnsAt\`\` | Sets the minimum screen width from which the column layout is displayed. Accepts \`sm\`, \`md\` or \`lg\` | string | 'md' | No |
| \`\`variant\`\` | The variant of table. Accepts \`striped\` or \`bordered\` | string | 'striped' | No |


### LgTableBodyComponent
A component that acts as a standard table body.

### LgTableCellComponent
A component that acts as a standard table cell.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`stack\`\` | On small screens, stack the label and the content on top of each other, instead of side by side | boolean | false | No |
| \`\`colspan\`\` | Sets the colspan attribute on the column when specified | number | undefined | No |

### LgTableExpandedDetailComponent
A component that provides the ability to add content to expandable rows.

### LgTableHeadComponent
A component that acts as a standard table head.

### LgTableHeadCellComponent
A component that acts as a standard table header cell.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`align\`\` | Alignment option for the header and its respective column | \`\`start\`\`, \`\`end\`\` | n/a | No |
| \`\`showLabel\`\` | Whether to show label for this header in each row in non-column layout | boolean | true | No |

### LgTableRowComponent
A component that acts as a standard table row.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`isHidden\`\` | Determines if the row is hidden | boolean | false | No |

### LgTableRowToggleComponent
A component that creates a icon for toggling the expanded state.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`isActive\`\` | Determines if the toggle displays in the active state | boolean | false | No |
`;
