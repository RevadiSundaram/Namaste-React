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

# When and why do we need lazy()?
- React.lazy() or lazy loading is used to dynamically import components or a part of code must get loaded when it is required.

# Benefits
- Improved initial load time: Lazy loading can improve the initial load time of your application by reducing the amount of code that needs to be downloaded and parsed when the page first loads.
- Reduced memory usage: Lazy loading can reduce the amount of memory that is used by your application by deferring the loading of resources until they are needed.
- Improved user experience: Lazy loading can improve the user experience by making your application feel more responsive.
- When to use lazy loading: For example, if a web page has an image that the user has to scroll down to see, you can display a placeholder and lazy load the full image only when the user arrives to its location

# What is suspense?
- React suspense is a built-in React component which lets you temporarily render a fallback UI while its children are still loading. 
- Suspense is a component provided by React that lets you “wait” for the dynamic import to load, showing a fallback UI in the meantime (in this case, a simple “Loading…” message).

```python
const MyComponent = React.lazy(() => import('./MyComponent'));
<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>
```

# Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition? How does suspense fix this error?

- This error is thrown as Exception by React when the promise to dynamically import the lazy component is not yet resolved and the Component is expected to render in the meantime. 
- If only the dynamic import is done and there is no <Suspense /> component then this error is shown.
- React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved. 
- If showing the shimmer (loading indicator) is not desirable in some situations, then startTransistion API can used to show the old UI while new UI is being prepared.

#  Advantages and disadvantages of using this code splitting pattern?
- Code splitting is a powerful optimization technique that offers numerous benefits in terms of performance, resource utilization, and user experience. 
- By reducing the initial bundle size, code splitting enables faster page loads, smoother interactions, and more efficient resource management.
Pros:
- `Faster initial load time`: By only loading the necessary code for the initial view, code splitting can significantly improve the time it takes for the page to load. This can be especially helpful on slower network connections or devices.
- `Improved user experience`: Code splitting can allow users to interact with the application sooner, and non-essential code can be loaded asynchronously in the background to improve the overall responsiveness of the application.
- `Improved performance`: Code splitting can reduce the amount of JavaScript that needs to be parsed and executed.
Cons:
- Increased complexity in development and testing processes
- More network requests that can affect performance
- Additional code and dependencies that can increase the bundle size

# When do we and why do we need suspense?
- Suspense is a React feature that allows developers to display a temporary UI while waiting for data to load. 
- It's best used when you want to display a fallback while waiting for something to load, such as when waiting for data to be fetched from an API after the initial page load.
- Suspense is often used in conjunction with React's dynamic import mechanism called lazy(). 
- Lazy loading refers to the requirement that a component or portion of code will load only when it's needed. This functionality helps to minimize your application's loading speed and lower the initial bundle size.

# Explore all the ways of writing css
- Styled component
- Inline CSS
- External CSS
- Frameworks: Tailwind, Bootstrap, chakra UI, material UI

# How do we configure tailwind?
- npm install -D tailwindcss postcss, npx tailwindcss init
- create .postcssrc file
- add this in tailwind.config.js file  ("./src/**/*.{html,js,ts,jsx,tsx}",)
- add this in css file => @tailwind base; @tailwind components; @tailwind utilities;

# In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
content - for which type of file we are using tailwind
theme and extend - While Tailwind's default theme is comprehensive, there may be instances where you need to add or override certain values. Tailwind provides an extend option in the theme configuration for this purpose. 
plugins - Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS

# Why do we have .postcssrc file?
- Tailwind CSS uses postCSS behind the scenes
- tool for transforming CSS with Javascript
- postcssrc is a way that our projects (parcel) understands tailwind