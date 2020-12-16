# Introduction HTML\

What is HTML?
HTML stands for Hyper Text Markup Language
HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

A Simple HTML Document

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

Example Explained
The <!DOCTYPE html> declaration defines that this document is an HTML5 document
The <html> element is the root element of an HTML page
The <head> element contains meta information about the HTML page
The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
The <h1> element defines a large heading
The <p> element defines a paragraph

What is an HTML Element?
An HTML element is defined by a start tag, some content, and an end tag:

<tagname>Content goes here...</tagname>
The HTML element is everything from the start tag to the end tag:

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!

A browser does not display the HTML tags, but uses them to determine how to display the document

HTML Elements

n HTML element is defined by a start tag, some content, and an end tag:

<tagname>Content goes here...</tagname>
The HTML element is everything from the start tag to the end tag:

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

Nested HTML Elements

HTML elements can be nested (this means that elements can contain other elements).

All HTML documents consist of nested HTML elements.

The following example contains four HTML elements (<html>, <body>, <h1> and <p>):

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

Example Explained
The <html> element is the root element and it defines the whole HTML document.
It has a start tag <html> and an end tag </html>.
Then, inside the <html> element there is a <body> element
The <body> element defines the document's body.

It has a start tag <body> and an end tag </body>.

Then, inside the <body> element there are two other elements: <h1> and <p>

HTML Attributes

All HTML elements can have attributes
Attributes provide additional information about elements
Attributes are always specified in the start tag
Attributes usually come in name/value pairs like: name="value" - used with single or double quotes.

```html
<a href="https://www.w3schools.com">Visit W3Schools</a>
<img src="img_girl.jpg" />
```

The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to
The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed - can also be an URL - src="https://www.w3schools.com/images/img_girl.jpg"

All HTML elements can have attributes:
The href attribute of <a> specifies the URL of the page the link goes to
The src attribute of <img> specifies the path to the image to be displayed
The width and height attributes of <img> provide size information for images
The alt attribute of <img> provides an alternate text for an image
The style attribute is used to add styles to an element, such as color, font, size, and more
The lang attribute of the <html> tag declares the language of the Web page
The title attribute defines some extra information about an element
