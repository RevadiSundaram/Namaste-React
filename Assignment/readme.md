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

# What are various ways to add images into our App? Explain with code examples
[Click Here](https://builtin.com/software-engineering-perspectives/react-js-image)

# What would happen if we do console.log(useState())?
If we do console.log(useState()), we get an array [undefined, function] where first item in an array is state is undefined and the second item in an array is setState function is bound dispatchSetState

# How will useEffect behave if we don't add a dependency array ?
If you do not pass a dependency array to the useEffect hook, it will not default to an empty array. Instead, it will run the effect after every render. 

# What is SPA?
A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the application. a React application that required me to use React Router to build a SPA.

# What is difference between Client Side Routing and Server Side Routing?
Server-side
- by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.
- Server-side rendering is also better for SEO because it allows search engines to easily crawl and index the content on a website.

Client-side
- A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page.
- The whole website or web-application needs to be loaded on the first request. That’s why the initial loading time usually takes longer.

# How do you create Nested Routes react-router-dom cofiguration
- We can create a Nested Routes inside a react router configuration as follows: first call createBrowserRouter for routing different pages

`const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])`
- Now we can create a nested routing for /path using children again as follows:
`const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "child",      // Don't use '/' because then react-router-dom will understand it's the direct path
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])`

# Read abt createHashRouter, createMemoryRouter from React Router docs.
- createHashRouter
This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".
- createMemoryRouter
Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

# What is the order of life cycle method calls in Class Based Components

Following is the order of lifecycle methods calls in Class Based Components:
- constructor()
- render ()
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()
Refer [React Lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

# Why do we use componentDidMount?
- componentDidMount() only runs once after the first render. 
- componentDidMount() may be called multiple times if the key prop value for the component changes. 
- componentDidMount method is used for handling all network requests and setting up subscriptions during the mounting phase.

# Why do we use componentWillUnmount? Show with example
- This method is called just before the component is removed from the DOM. 
- It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase.

#  Why do we use super(props) in constructor?
- `super(props)` is used to inherit the properties and access variables of the React parent class when we initialize our component. 
- super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. 
- If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console. 
- The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used

# Why can't we have the callback function of useEffect async?
- since useEffect() is an asynchronous, non-blocking function, async callbacks cannot be made directly inside of it.
- useEffect expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). 
- If we make the callback function as async, it will return a promise and the promise will affect the clean-up function from being called.

# 