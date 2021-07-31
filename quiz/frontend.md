## **Question 1:**

How would you speed up a single page application?
- lazy loading: rendering only waht the user is seeing
- caching: caching static contents
- minifiying css files and javascript files.
- use images with small size
- use of CDN for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos

## **Question 2:**

Explain the `this` keyword and it's quirks in JavaScript
- this keyword refers to the global object or the object it belongs to depending on how it's called in a function, eg In an event this refers to the element that received the event.

## **Question 3:**

What is the difference between border-box and content-box?
- border-box the padding and border of the element are included in the width and height of the element while for content-box the width and height of the element only include the width and height.

## **Question 4:**

What's the difference between == and === operators?
- == is used to compare variables while ignoring the variable type while
=== this operator also checks datatype and compares two values.

## **Question 5:**

What is accessibility? How do you achieve it?
- Web accessibility means making a website accessible to all users regardless of disability, including Individuals with visual, motor, auditory, speech, or cognitive disabilities.

- we can achieve it by using the correct html tags in the right way, using alt attribute, aria-controls, making the website keyboard friendly etc.

## **Question 6:**

What is the difference between session storage, local storage and cookies?
- session storage storage is gone when user closes the browser tab, it is client only and can't transfer data over HTTP request.
- local storage just like session storage is client only, can't transfer data over HTTP request, but unlike session storage local storage has no expiry date.
- cookies storage is quite different from both session storage and local storage because it can transfer data over HTTP request, expiry date can be set both on the client side or on the server side. it can be accessed on the client side if the httpflag is false and on the server side too.

## **Question 7:**

How does hoisting work in JavaScript, and what is the order of hoisting?
- Hoisting is a mechanism that inserts variable and function declaractions into memory ahead of assignment and initialization within the given scope of execution
- Variable assignment takes precedence over function declaration
- Function declarations take precedence over variable declarations

## **Question 8:**

What is the difference in usage of callback, promise, and async/await?
- Callbacks are functions passed as arguments into other functions that are available within the callback-function's scope

- Promises are placeholder objects for data that's available in the future. As soon as their state changes from pending to resolved, .then() method can be called to make the data available for subsequent operations.

- Async / await is syntactic sugar over promises. Instead of using .then(), you can assign data that's resolved by a promise and assign it to a variable which is available within an async function() scope. it's more readable for human