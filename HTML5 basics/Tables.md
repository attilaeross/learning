# HTML Tables

A table is a structured set of data made up of rows and columns (tabular data).

The point of a table is that it is rigid. Information is easily interpreted by making visual associations between row and column headers.

## When should you NOT use HTML tables?

HTML tables should be used for tabular data — this is what they are designed for.

Unfortunately, a lot of people used to use HTML tables to lay out web pages, e.g. one row to contain the header, one row to contain the content columns, one row to contain the footer, etc.

In short, using tables for layout rather than CSS layout (https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout) techniques is a bad idea

## Elements used to build a Table and use full attributes

```html
<table></table>
<!-- element The smallest container inside a table is a table cell ('td' stands for 'table data') -->
<td></td>
<!--element ('tr' stands for 'table row') -->
<tr></tr>
<!--element ('th' stands for 'table header') -->
<th></th>

<!-- -->
```

colspan and rowspan to improve this table

colspan - span across columns,
rowspan - span downwards over rows

```html
table>
      <tr>
        <th colspan="2">Animals</th>
      </tr>
      <tr>
        <th colspan="2">Hippopotamus</th>
      </tr>
      <tr>
        <th rowspan = "2">Horse</th>
        <td>Mare</td>
      </tr>
      <tr>
        <td>Stallion</td>
      </tr>
      <tr>
        <th colspan="2">Crocodile </th>
      </tr>
      <tr>
        <th rowspan = "2">Chicken</th>
        <td>Hen</td>
      </tr>
      <tr>
        <td>Rooster</td>
      </tr>
    </table>
```

## Providing common styling to columns

HTML has a method of defining styling information for an entire column of data all in one place — the <col> and <colgroup> elements. These exist because it can be a bit annoying and inefficient having to specify styling on columns — you generally have to specify your styling information on every <td> or <th> in the column, or use a complex selector such as :nth-child().

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```
