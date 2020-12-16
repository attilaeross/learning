# Semantic Elements in HTML

What are Semantic Elements?

A semantic element clearly describes its meaning to both the browser and the developer.

Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

Many web sites contain HTML code like: `<div id="nav">` `<div class="header">` `<div id="footer">` to indicate navigation, header, and footer.

In HTML there are some semantic elements that can be used to define different parts of a web page:

Below is a list of some of the semantic elements in HTML.

Tag Description

`<article>` Defines independent, self-contained content
`<aside>` Defines content aside from the page content
`<details>` Defines additional details that the user can view or hide
`<figcaption>` Defines a caption for a `<figure>` element
`<figure>` Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
`<footer>` Defines a footer for a document or section
`<header>` Specifies a header for a document or section
`<main>` Specifies the main content of a document
`<mark>` Defines marked/highlighted text
`<nav>` Defines navigation links
`<section>` Defines a section in a document
`<summary>` Defines a visible heading for a `<details>` element
`<time>` Defines a date/time

Why Semantic Elements

A semantic Web allows data to be shared and reused across applications, enterprises, and communities."

# Semantics in JavaScript

In JavaScript, consider a function that takes a string parameter, and returns an <li> element with that string as its textContent. Would you need to look at the code to understand what the function did if it was called build('Peach'), or createLiWithContent('Peach')?

# Semantics in CSS

In CSS, consider styling a list with li elements representing different types of fruits. Would you know what part of the DOM is being selected with div > ul > li, or .fruits\_\_item?

# Some of the benefits from writing semantic markup are as follows:

Search engines will consider its contents as important keywords to influence the page's search rankings (see SEO)
Screen readers can use it as a signpost to help visually impaired users navigate a page
Finding blocks of meaningful code is significantly easier than searching though endless divs with or without semantic or namespaced classes
Suggests to the developer the type of data that will be populated
Semantic naming mirrors proper custom element/component naming
