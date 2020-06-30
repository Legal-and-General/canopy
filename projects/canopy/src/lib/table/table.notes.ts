//Document the lower components

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
<lg-table>
  <lg-table-row>
    <lg-table-head>Author</lg-table-head>
    <lg-table-head>Book</lg-table-head>
    <lg-table-head>Published</lg-table-head>
  </lg-table-row>
  <lg-table-row>
    <lg-table-cell>Orhan Pamuk</lg-table-cell>
    <lg-table-cell>Strangeness in my Mind</lg-table-cell>
    <lg-table-cell>2016</lg-table-cell>
  </lg-table-row>
  <lg-table-row>
    <lg-table-cell>Albert Camus</lg-table-cell>
    <lg-table-cell>The Plague</lg-table-cell>
    <lg-table-cell>1947</lg-table-cell>
  </lg-table-row>
</lg-table>
~~~

## Inputs

### LgTableRowComponent
A component that acts as a standard table row.

### LgTableCellComponent
A component that acts as a standard table cell.

### LgTableHeadComponent
A component that acts as a standard table header cell.

## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|-------|-------------|
| \`\`lg-table\`\` | Adds styles to the table styling |
| \`\`lg-table__head\`\` | Adds styles to the thead |
| \`\`lg-table-row\`\` | Adds styles to the table row |
| \`\`lg-table-head\`\` | Adds styles to the table header cell |
| \`\`lg-table__body\`\` | Adds styles to the tbody |
| \`\`lg-table-cell\`\` | Adds styles to the table cell |
| \`\`lg-table-cell__content\`\` | Adds styles to the table cell content |
| \`\`lg-table-cell__label\`\` | Adds styles to the table cell label for smaller screens |


### Examples:

~~~html
<table class="lg-table">
  <thead class="lg-table__head">
    <tr class="lg-table-row">
      <th class="lg-table-head">Author</th>
      <th class="lg-table-head">Book</th>
      <th class="lg-table-head">Published</th>
    </tr>
  </thead>
  <tbody class="lg-table__body">
    <tr class="lg-table-row">
      <td class="lg-table-cell">
        <span class="lg-table-cell__label">
          Author
        </span>
        <span class="lg-table-cell__content">
          Orhan Pamuk
        </span>
      </td>
      <td class="lg-table-cell">
        <span class="lg-table-cell__label">
          Book
        </span>
        <span class="lg-table-cell__content">
          Strangeness in my Mind
        </span>
      </td>
      <td class="lg-table-cell">
        <span class="lg-table-cell__label">
          Published
        </span>
        <span class="lg-table-cell__content">
          2016
        </span>
      </td>
    </tr>
  </tbody>
</lg-table>
~~~
`;
