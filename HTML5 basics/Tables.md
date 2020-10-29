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

## HTML table advanced features and accessibility

such as captions/summaries and grouping your rows into table head, body and footer sections — as well as looking at the accessibility of tables for visually impaired users.

### Adding a caption to table with <caption>

We can give your table a caption by putting it inside a <caption> element and nesting that inside the <table> element. You should put it just below the opening <table> tag.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  ...
</table>
```

Note: The summary attribute can also be used on the <table> element to provide a description — this is also read out by screenreaders. We'd recommend using the <caption> element instead, however, as summary is deprecated by the HTML5 spec, and can't be read by sighted users (it doesn't appear on the page.)

### Adding structure with <thead>, <tfoot>, and <tbody>

As our tables get a bit more complex in structure, it is useful to give them more structural definition. One clear way to do this is by using <thead>, <tfoot>, and <tbody>, which allow you to mark up a header, footer, and body section for the table.

They are however very useful for styling and layout not for readability nor accessibility.

The <thead> element must wrap the part of the table that is the header — this is usually the first row containing the column headings, but this is not necessarily always the case. If you are using <col>/<colgroup> element, the table header should come just below those.

The <tfoot> element needs to wrap the part of the table that is the footer — this might be a final row with items in the previous rows summed, for example. You can include the table footer right at the bottom of the table as you'd expect, or just below the table header (the browser will still render it at the bottom of the table).\

The <tbody> element needs to wrap the other parts of the table content that aren't in the table header or footer. It will appear below the table header or sometimes footer, depending on how you decided to structure it.

```html
<table>
  <caption>
    How I chose to spend my money
  </caption>
  <thead>
    <tr>
      <th>Purchase</th>
      <th>Location</th>
      <th>Date</th>
      <th>Evaluation</th>
      <th>Cost (€)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td colspan="4">SUM</td>
      <td>118</td>
    </tr>
  </tfoot>
  <tr>
    <td>Haircut</td>
    <td>Hairdresser</td>
    <td>12/09</td>
    <td>Great idea</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Lasagna</td>
    <td>Restaurant</td>
    <td>12/09</td>
    <td>Regrets</td>
    <td>18</td>
  </tr>
  <tr>
    <td>Shoes</td>
    <td>Shoeshop</td>
    <td>13/09</td>
    <td>Big regrets</td>
    <td>65</td>
  </tr>
  <tr>
    <td>Toothpaste</td>
    <td>Supermarket</td>
    <td>13/09</td>
    <td>Good</td>
    <td>5</td>
  </tr>
</table>
```

### Nesting Tables

It is possible to nest a table inside another one, as long as you include the complete structure, including the <table> element.

The following markup shows a simple nested table:

```html
<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>
```

### The scope attribute

the scope attribute, which can be added to the <th> element to tell screenreaders exactly what cells the header is a header for — is it a header for the row it is in, or the column, for example?

```html
<th scope="col">Purchase</th>
or
<th scope="row">Haircut</th>
```

scope has two more possible values — colgroup and rowgroup.

when multiple columns (headers) have a joint "header" - we define scope for the joint header as colgroup and scope for the column headers to be col

    / Clohres / scope="colgroup"

Trousers / Skirts / Tops // scope = "col"

```html
<table>
  <caption>
    Items Sold August 2016
  </caption>
  <thead>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <th scope="colgroup" colspan="3">Clothes</th>
      <th scope="colgroup" colspan="2">Accessories</th>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <th scope="col">Trousers</th>
      <th scope="col">Skirts</th>
      <th scope="col">Dresses</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Rings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="rowgroup" rowspan="3">Belgium</th>
      <th scope="row">Antwerp</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brussels</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th scope="rowgroup" rowspan="2">The Netherlands</th>
      <th>Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>
```

The id and headers attributes

An alternative to using the scope attribute is to use id and headers attributes to create associations between headers and cells. The way they are used is as follows:

You add a unique id to each <th> element.
You add a headers attribute to each <td> element. Each headers attribute has to contain a list of the ids of all the <th> elements that act as a header for that cell, separated by spaces.

```html
<thead>
  <tr>
    <th id="purchase">Purchase</th>
    <th id="location">Location</th>
    <th id="date">Date</th>
    <th id="evaluation">Evaluation</th>
    <th id="cost">Cost (€)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="haircut">Haircut</th>
    <td headers="location haircut">Hairdresser</td>
    <td headers="date haircut">12/09</td>
    <td headers="evaluation haircut">Great idea</td>
    <td headers="cost haircut">30</td>
  </tr>

  ...
</tbody>
```
