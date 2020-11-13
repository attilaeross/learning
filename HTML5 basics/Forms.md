# Forms

## Why forms

Web forms are one of the main points of interaction between a user and a web site or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage or used on the client-side to immediately update the interface in some way (for example, add another item to a list, or show or hide a UI feature).

A web form's HTML is made up of one or more form controls (sometimes called widgets), plus some additional elements to help structure the overall form — they are often referred to as HTML forms. The controls can be single or multi-line text fields, dropdown boxes, buttons, checkboxes, or radio buttons, and are mostly created using the `<input>` element.

Form controls can also be programmed to enforce specific formats or values to be entered (form validation), and paired with text labels that describe their purpose to both sighted and blind users.

## The `<form>` element

```html
<form action="/my-handling-form-page" method="post"></form>
```

This element formally defines a form. It's a container element like a `<section>` or `<footer>` element, but specifically for containing forms; it also supports some specific attributes to configure the way the form behaves. All of its attributes are optional, but it's standard practice to always set at least the action and method attributes:

-The action attribute defines the location (URL) where the form's collected data should be sent when it is submitted.
-The method attribute defines which HTTP method to send the data with (usually get or post).

## Often used widgets in forms

### The `<label>`, `<input>`, and `<textarea>` elements

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
```

The `<li>` elements are there to conveniently structure our code and make styling easier

For usability and accessibility, we include an explicit label for each form control. Note the use of the for attribute on all `<label>` elements, which takes as its value the id of the form control with which it is associated — this is how you associate a form control with its label.

On the `<input>` element, the most important attribute is the type attribute. This attribute is extremely important because it defines the way the `<input>` element appears and behaves.

-In our simple example, we use the value `<input/text>` for the first input — the default value for this attribute. It represents a basic single-line text field that accepts any kind of text input.

-For the second input, we use the value `<input/email>`, which defines a single-line text field that only accepts a well-formed e-mail address. This turns a basic text field into a kind of "intelligent" field that will perform some validation checks on the data typed by the user. It also causes a more appropriate keyboard layout for entering email addresses (e.g. with an @ symbol by default) to appear on devices with dynamic keyboards, like smartphones. You'll find out more about form validation in the client-side form validation article later on.

#### `<input>` VS <textarea> </textarea>

The `<input>` tag is an empty element VS `<textarea>` needs to be closed with end tag
if you want to define a default value for a `<textarea>`, you put it between the opening and closing tags of the `<textarea>` element

```html
<input type="text" value="by default this element is filled with this text" />
<textarea>
by default this element is filled with this text
</textarea>
```

#### Types of `<input>` elements

default is always text - when you omit type in your declaration

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
<input type="password" id="pwd" name="pwd" />
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
<input type="checkbox" id="carrots" name="carrots" value="carrots" checked />
<input type="radio" id="soup" name="meal" checked />
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
<input type="file" name="file" id="file" accept="image/*" multiple />
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="100"
  value="250000"
/>
<input type="datetime-local" name="datetime" id="datetime" />
<input type="week" name="week" id="week" />
<input type="color" name="color" id="color" />
```

Other text input types, like search, url, and tel, were added with HTML5. Those will be covered in the next tutorial, HTML5 input types.

All basic text controls share some common behaviors:

They can be marked as readonly (the user cannot modify the input value but it is still sent with the rest of the form data) or disabled (the input value can't be modified and is never sent with the rest of the form data).
They can have a placeholder; this is text that appears inside the text input box that should be used to briefly describe the purpose of the box.
They can be constrained in size (the physical size of the box) and maxlength (the maximum number of characters that can be entered into the box).
They can benefit from spell checking (using the spellcheck attribute), if the browser supports it.

### The `<button>` element

to add a button to allow the user to send, or "submit", their data once they have filled out the form. This is done by using the `<button>` element.

```html
<button type="submit">Send your message</button>
```

The `<button>` element also accepts a type attribute — this accepts one of three values: submit, reset, or button.

-A click on a submit button (the default value) sends the form's data to the web page defined by the action attribute of the `<form>` element.
-A click on a reset button resets all the form widgets to their default value immediately. From a UX point of view, this is considered bad practice, so you should avoid using this type of button unless you really have a good reason to include one.
-A click on a button button does... nothing! That sounds silly, but it's amazingly useful for building custom buttons — you can define their chosen functionality with JavaScript.

**SUBMIT**

```html
<button type="submit">This is a <strong>submit button</strong></button>

<input type="submit" value="This is a submit button" />
```

**RESET**

```html
<button type="reset">This is a <strong>reset button</strong></button>

<input type="reset" value="This is a reset button" />
```

**ANONYMOUS**

```html
<button type="button">This is an <strong>anonymous button</strong></button>

<input type="button" value="This is an anonymous button" />
```

Buttons always behave the same whether you use a `<button>` element or an `<input>` element. As you can see from the examples, however, `<button>` elements let you use HTML in their content, which is inserted between the opening and closing `<button>` tags. `<input>` elements on the other hand are empty elements; their displayed content is inserted inside the value attribute, and therefore only accepts plain text as content.

### Drop-down controls

#### Select box

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

if required, the default value for the select box can be set using the **selected** attribute on the desired `<option>` element — this option is then preselected when the page loads.

### The <fieldset> and <legend> elements

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

### The `<label>` element

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

There is another way to associate a form control with a label — nest the form control within the <label>, implicitly associating it

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

#### Labels are clickable, too!

Another advantage of properly set up labels is that you can click or tap the label to activate the corresponding widget. This is useful for controls like text inputs, where you can click the label as well as the input to focus it, but it is especially useful for radio buttons and checkboxes — the hit area of such a control can be very small, so it is useful to make it as easy to activate as possible.

#### Multiple labels

Strictly speaking, you can put multiple labels on a single widget, but this is not a good idea as some assistive technologies can have trouble handling them. In the case of multiple labels, you should nest a widget and its labels inside a single `<label>` element.

```html
<p>Required fields are followed by <abbr title="required">*</abbr>.</p>

<!-- So this: -->
<div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" />
  <label for="username"
    ><abbr title="required" aria-label="required">*</abbr></label
  >
</div>

<!-- would be better done like this: -->
<div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" />
    <abbr title="required" aria-label="required">*</abbr>
  </label>
</div>

<!-- But this is probably best: -->
<div>
  <label for="username"
    >Name: <abbr title="required" aria-label="required">*</abbr></label
  >
  <input id="username" type="text" name="username" />
</div>
```

The above variants increase in effectiveness as you go through them:

In the first example, the label is not read out at all with the input — you just get "edit text blank", plus the actual labels are read out separately. The multiple `<label>` elements confuse the screenreader.
In the second example, things are a bit clearer — the label read out along with the input is "name star name edit text required", and the labels are still read out separately. Things are still a bit confusing, but it's a bit better this time because the `<input>` has a label associated with it.
The third example is best — the actual label is read out all together, and the label read out with the input is "name required edit text".

## Sending form data to your web server

The `<form>` element defines where and how to send the data thanks to the **action and method** attributes.

We provide a **name** to each form control. The names are important on both the client- and server-side; they tell the browser which name to give each piece of data and, on the server side, they let the server handle each piece of data by name. The form data is sent to the server as **name/value pairs**.

To name the data in a form you need to use the name attribute on each form widget that will collect a specific piece of data.

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>

    ...
  </ul>
</form>
```

in the above example the form will send 3 pieces of data named "user_name", "user_email", and "user_message". That data will be sent to the URL "/my-handling-form-page" using the HTTP POST method.

### The action attribute

The action value should be a file on the server that can handle the incoming data, including ensuring server-side validation

The action attribute defines where the data gets sent. Its value must be a valid relative or absolute URL. If this attribute isn't provided, the data will be sent to the URL of the page containing the form — the current page.

```html
<!-- absolute URL -->
<form action="https://example.com"></form>
<!-- different URL on the same origin-->
<form action="/somewhere_else"></form>
```

**Note**: It's possible to specify a URL that uses the HTTPS (secure HTTP) protocol. When you do this, the data is encrypted along with the rest of the request, even if the form itself is hosted on an insecure page accessed using HTTP. On the other hand, if the form is hosted on a secure page but you specify an insecure HTTP URL with the action attribute, all browsers display a security warning to the user each time they try to send data because the data will not be encrypted.

### The method attribute

The method attribute defines how data is sent. The HTTP protocol provides several ways to perform a request; HTML form data can be transmitted via a number of different methods, the most common being the **GET** method and the **POST** method

**NOTE** An HTTP request consists of two parts: a header that contains a set of global metadata about the browser's capabilities, and a body that can contain information necessary for the server to process the specific request.

#### The GET method

The GET method is the method used by the browser to ask the server to send back a given resource: "Hey server, I want to get this resource." In this case, the browser sends an empty body. Because the body is empty, if a form is sent using this method the data sent to the server is appended to the URL.

```html
<form action="http://www.foo.com" method="GET">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi" />
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom" />
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

Since the GET method has been used, you'll see the URL `www.foo.com/?say=Hi&to=Mom` appear in the browser address bar when you submit the form.

The data is appended to the URL as a series of name/value pairs. After the URL web address has ended, we include a question mark (?) followed by the name/value pairs, each one separated by an ampersand (&). In this case we are passing two pieces of data to the server:

say, which has a value of Hi
to, which has a value of Mom
The HTTP request looks like this:

```js
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

### The POST method

The POST method is a little different. It's the method the browser uses to talk to the server when asking for a response that takes into account the data provided in the body of the HTTP request

```html
<form action="http://www.foo.com" method="POST">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi" />
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom" />
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

When the form is submitted using the POST method, you get no data appended to the URL, and the HTTP request

```js
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13
say=Hi&to=Mom
```

### On the server side: retrieving the data

Whichever HTTP method you choose, the server receives a string that will be parsed in order to get the data as a list of key/value pairs. The way you access this list depends on the development platform you use and on any specific frameworks you may be using with it.

## Common HTML structures used with forms

Beyond the structures specific to web forms, it's good to remember that form markup is just HTML. This means that you can use all the power of HTML to structure a web form.

As you can see in the examples, it's common practice to wrap a label and its widget with a `<li>` element within a `<ul>` or `<ol>` list. `<p>` and `<div>` elements are also commonly used. Lists are recommended for structuring multiple checkboxes or radio buttons.

In addition to the `<fieldset>` element, it's also common practice to use HTML titles (e.g. `<h1>`, `<h2>`) and sectioning (e.g. `<section>`) to structure complex forms.

Above all, it is up to you to find a comfortable coding style that results in accessible, usable forms. Each separate section of functionality should be contained in a separate `<section>` element, with `<fieldset>` elements to contain radio buttons.
