# Installing and Running
- npm init
- npm install -D parcel
- type="module" in App.js
- "start": "parcel index.html" in script in package.json
- npm install react
- npm install react-dom
- npm install --save font-awesome
- To start, npm start


/*
Header
-icon
- search
- help
- sign in
- cart

Body
- containers of res
each
- Image
- Name 
- rating, delivery time
- cuisine
- for two

Footer
- Copyright
- Links
- Address
- Contact
*/

# What is the difference between Named Export, Default export and * as export?
- Use named export when you want to export multiple variables or functions from a file.
- Use default export when you want to export only one variable or function from a file.
- Use named export when you want to keep the same name for your variables or functions across different files.
- Alternatively, we can use the * symbol to import all the named exports from a file as an object, which is very similar to other languages like python and java

#  What is the importance of config.js file
- For reusability
- our main application code will be untouched, only the base url will be changed based on environment.

# What are React Hooks?
- Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.

# Why do we need a useState Hook?
- It lets you add a state variable to your component. 
- The useState() hook can conveniently hold strings, arrays, numbers, objects and much more.

# What is a Microservice?
- microservice architecture - is an architectural style that structures an application as a collection of services that are:
- Independently deployable
- Loosely coupled
- Services are typically organized around business capabilities. Each service is often owned by a single, small team.

# What is Monolith architecture?
- A monolithic architecture is the traditional unified model for the design of a software program. Monolithic, in this context, means "composed all in one piece." 
- Tightly occupied
- each component and its associated components must all be present for code to be executed or compiled and for the software to run.

# What is the difference between Monolith and Microservice?
A monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services.

# Why do we need a useEffect Hook?
useEffect(()=>{},[]);
- First arg is a callback fun
- 2nd arg is dependant array
- When body component loads, it will render it and as soon as it renders it useEffect's callback function is called
- The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers

# What is Optional Chaining?
- The optional chaining ( ?. ) operator accesses an object's property or calls a function. 
- If the object accessed or function called using this operator is undefined or null , the expression short circuits and evaluates to undefined instead of throwing an error

# What is Shimmer UI?
A shimmer UI is a kind of the user interface that mimics the shades and forms of content that will ultimately appear instead of having any actual content. It is a cool way often used when a web page or app is loading. it take place of data with moving animation with shimmering effects until everything is loaded

# What is the difference between JS expression and JS statement
expressions are evaluated to produce a value. On the other hand, statements are executed to make something happen.

# What is Conditional Rendering, explain with a code example
Conditional rendering in React refers to the process of delivering elements and components based on certain conditions.

`function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign up.</h1>
      )}
    </div>
  );
}`

# What is CORS?
- “CORS” stands for Cross-Origin Resource Sharing. 
- It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).

# What is async and await?
- Async and Await in JavaScript are powerful keywords used to handle asynchronous operations with promises. 
- Async functions implicitly return promises, while Await pauses the execution until the promise is resolved. 
- This simplifies asynchronous code and enhances readability by making it appear synchronous

#  What is the use of `const json = await data.json();` in getRestaurants().
- it will give the value as a readable json format after the promise is resolved
