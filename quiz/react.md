## Question 1:
Why us React over other JS frameworks?
- React is the most popular frontend library and has the largest community. 
- it is easy to learn, simple and easy to test.
- it uses a component based approach that can be reused.
- Since it is just a library you don't need to be opinionated in your coding structure unlike frameworks.
- Performance Enhancement

## Question 2:
What happens during the lifecycle of a React component?
- Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
- Mounting: Mounting is the stage of rendering the JSX into the DOM returned by the render method itself.
- Updating: Updating is the stage when the state of a component is updated and when a component is being re-rendered:
- Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the DOM.

## Question 3:
What are stateless components?
- A stateless component is just a plain javascript function which takes props as an argument and returns a react element.

## Question 4:
Differentiate between Real DOM and Virtual DOM.
- The DOM represents the document as nodes and objects. while a virtual DOM object is a light weight copy of a DOM object.

## Question 5:
How would you improve SEO of a react Application?
- By reducing javascript errors becasue when google bot encounters an error it returns a blank page.
- Server side rendering is when the server sends a response with HTML, CSS and javascript
- Pre-rendering The idea of prerendering is to preload all HTML elements on the page and cache all SPA pages on the server with the help of some tools.

## Question 6:
What are the limitations of React?
- In React, some standard functions will not able to use state effectively instead of that we go for the use of ES6
- JSX as a barrier especially new developer because they have a complaint about the complexity in a learning curve.

## Question 7:
What are some advantages of using React?
- virtual DOM
- SEO friendly

## Question 8:
What is server-side rendering, and what problems does it solve?

- Server Side Rendering is a concept where the server gets more responsibilities, namely rendering the application on the server and sending the fully rendered page back to the client.

- The solution allows us to deliver responsive sites that work a lot faster than standard request-response model by removing the “request travel time

- The solution support SEO and support other bots like Twitter and Facebook

## Question 9:
List and briefly describe some security attacks on the frontend?.

- Cross-Site Scripting/SQL injection: This is a rather widespread set of vulnerabilities that allow an attacker to pass malicious code as input to some input field in the app. 

-Cross-site request forgery or CSRF is a browser exploit where an attacker tricks someone into executing unwanted actions against a website to which their browser is already authenticated. The attacker uses social engineering to get the user to click on a malicious link or to open an email or webpage with an embedded transparent 1px image that contains the link.

- CSS injection: Unlike the previous vulnerability, this exploit doesn’t require a user. It simply requires developers to use a CSS file that has a secret malicious import statement. 