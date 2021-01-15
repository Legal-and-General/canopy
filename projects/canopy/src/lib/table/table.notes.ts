// Document the lower components

export const notes = `
# Table Component

## Purpose
The table component provides a way to present tabular data in a responsive format.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgTableModule ],
})
~~~

and in your HTML:

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
    <tr lg-table-row>
      <td>
        <lg-table-row-toggle
        (click)="<function-to-handle-click>"
        [isActive]="<logic-to-handle-toggle>"
        >
        </lg-table-row-toggle>
      </td>
      <td lg-table-cell>Albert Camus</td>
      <td lg-table-cell>The Plague</td>
      <td lg-table-cell>1947</td>
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

## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|-------|-------------|
| \`\`lg-table\`\` | Adds styles to the table styling |
| \`\`lg-table-head'\`\` | Adds styles to the thead |
| \`\`lg-table-row\`\` | Adds styles to the table row |
| \`\`lg-table-row--active\`\` | Adds styles to the table row in the active state |
| \`\`lg-table-head-cell'\`\` | Adds styles to the table header cell |
| \`\`lg-table-body\`\` | Adds styles to the tbody |
| \`\`lg-table-cell\`\` | Adds styles to the table cell |
| \`\`lg-table-cell__content\`\` | Adds styles to the table cell content |
| \`\`lg-table-cell__label\`\` | Adds styles to the table cell label for smaller screens |
| \`\`lg-table-expanded-detail\`\` | Adds styles to the expandable detail section |
| \`\`lg-table-row-toggle\`\` | Adds styles to the expandable detail section |
| \`\`lg-table-row-toggle__btn\`\` | Adds styles to the expandable detail button |
| \`\`lg-table-row-toggle__label\`\` | Adds styles to the expandable detail button label |
| \`\`lg-table-row-toggle__heading-icon\`\` | Adds styles to the expandable detail button icon |


### Examples:

~~~html
<table class="lg-table">
  <thead class="lg-table-head">
    <tr class="lg-table-row">
      <th class="lg-table-head-cell">Author</th>
      <th class="lg-table-head-cell">Book</th>
      <th class="lg-table-head-cell">Published</th>
    </tr>
  </thead>

  <tbody class="lg-table-body">
    <tr class="lg-table-row">
      <td class="lg-table-cell">Orhan Pamuk</td>
      <td class="lg-table-cell">Strangeness in my Mind</td>
      <td class="lg-table-cell">2016</td>
    </tr>
    <tr class="lg-table-row">
      <td class="lg-table-cell">Albert Camus</td>
      <td class="lg-table-cell">The Plague</td>
      <td class="lg-table-cell">1947</td>
    </tr>
  </tbody>
</table>
~~~
`;
