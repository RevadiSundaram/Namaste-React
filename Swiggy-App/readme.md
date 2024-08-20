# Installing and Running
- npm init
- npm install -D parcel
- type="module" in App.js
- "start": "parcel index.html" in script in package.json
- npm install react
- npm install react-dom
- To start, npm start

# Best Practice
- Make separate files for separate components
- extension .js == .jsx, its the same, it harly matters
- import and export if using separate components
- Mock data shouldn't be kept in components file
- Never keep any hardcoded string in components file
- Name all the constants as capital case

# Exports: -  types = named, default
- export default <name>
- export multiple things - named exports - while importing curly brackets

# Two Types of Export/Import;

- Default Export/Import
export default Component;
import Component from "path";

- Named Export/Import
export const Component;
import {Component} from path;

# Why React is fast?
- It does faster DOM Manipulation
- As soon as state variable changes, react re-renders very quickly

# State
- It is a super powerful variable
- for this we need hooks
- `Whenever a state variable updates, react re-renders the components`
- `Quickly updates UI`

# React Hooks
- Normal JS function given to us by React
- written by facebook developers
- normal JS utility function
- Important Hooks - useState() and useEffect()
- useState() => super powerful state variables

# React Algorithm
Reconciliation
- also known as React Fiber (in React 16)
- Virtual DOM

# Virtual DOM
- Representation of actual DOM
- console.log(<Components />) == Object == Virtual DOM
- Efficient DOM Manipulation


# Diff Algorithm
- It will find the difference between old VD and new VD for every rendering cycle and actually updates the DOM
- Finds diff btw two objects

# Monolith and Microservices Architecture

Monolith
- API
- UI (JSP)
- Auth
- DB
- SMS
- All running in the same project
- If we have to change one small things, then test whole and compile whole project

Microservices
- Diff service for diff jobs
- Backend
- UI
- Auth
- DB
- SMS sending
- Email notif
- All services combines together forms a big app
- All separate services
- Separation of concerns
- Single Responsibility Principles
- They have to interact with each other to make the whole app
- Diff tech stacks for diff things
- Run on their own service ports


# When to make API call

1. As soon as page loads => make API call (wait 500 ms) => render it to UI
2. As soon as page loads => render to UI => make API call => re-render to UI (data from API)

- 2nd approach is better for React
- Better UX
- Bcoz, in the first, for 500 ms the page is frozen
- In 2nd render whatever we can 
- Render Mechanism is very fast so it doesnt matter how many times we are rendering

# UseEffect Hook
useEffect(()=>{},[]);
- First arg is a callback fun
- 2nd arg is dependant array
- When body component loads, it will render it and as soon as it renders it useEffect's callback function is called
- UseEffect will be called whenever the components renders
- Dependancy array changes the behaviour of the render
- if no depandancy array => useeffect is called on every component render
- if depandancy array is empty => useeffect is called on initial render and just once
- if any depandancy => useeffect called only when the depandancy changes

# UseState Hook
- Never use state variable outside the component
- It is used for creating local state variable inside the functional component
- Never use inside if/else statement or for loop or function
- Always use it as first thing in the component


# CORS Policy
- our browser(chrome) is not allowing from localhost (one origin) to another origin (swiggy api)

# Optional Chaining
- The optional chaining (?.) operator accesses an object's property or calls a function. 
- If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error

# Shimmer UI
- Fake UI before our data is loaded

# Conditional Rendering
- Rendering on the basis of a condition

# Why do we need State variable
- updates the state variable and refresh the pa ge
- It will Re-render the whole component
- Rendering a component means calling the component

# Even though the state variable is defined const, it updates the value why?
- As soon as we do setStatevariable then react will call the component once again and new instance of the statevariable is created
- It will find the diff btw older and newer and whichever (div or button) changes the state, that only will be changes
- The component is calling again and again whenever the state changes

# Input box
- If we are not using onchange attribute then we have assigned value '' inside of usestate
- and it will take take us to enter the value
- Whenever we change local state variable, react re-renders the component

# State variable
- Whenever state variable update, react triggers a reconciliation cycle (re-renders the component)
but only updating the state variable

# React Router
- BrowserRouter - creates list of path
- What will happen on the specific route
- npm install react-router-dom

# Creating configuration
`const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    }
`
- Similarly for each routes such as Contact us or About page
- There are so many routers available on react-router for different functionality
- BrowserRouter is a recommended way

# Error in Routing
- Create a separate component for error
- Create a useRouterError Hook for Errors

`const err = useRouteError();
<h3>{err.status} {err.statusText}</h3>`

# Passing Configuration
root.render(<RouterProvider router={appRouter} />); 

# Children Routes
- To make Header stay intact in all the pages, we need to create children routes
`children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ],`


# Outlet
- Outlet will be filled with children according to the path
- Outlet will be replaced by the components according to the path

# Link to page
- In React, when routing to a page dont use anchor tag
- Use Link - a superpower
- Why not to use anchor tag?
- It will reload the page every time it routes
- But Link will not reload the page
- Link just refreshes the component
- behind the scenes link is using anchor tag
`<Link to="/about">About</Link></li>'

# Single Page Application (SPA)
- Browser will not reload the page
- For navigation also, it will just refresh the page
- we will not have different html for each page

# Types of Routing in Web Application
- Client Side Routing
All the components are loaded for the first time, it just loads the component

- Server Side Routing
You make network call, and the html page is coming from server

# Dynamic Routing



# Class Based Components

# Diff btw function and Class
- Functional comp is a function which returns JSX
- Class comp is a class which extends React.Component, and has render method which returns JSX

# State variable in Class components
- Loading a class based componets == creating instance of a class
- whenever we create instance of class then constructor will be called
- use this.setState to update the state variable
- this.setState 
//Never update state variable directly
    `this.setState({
        count: this.state.count + 1,
    })`

# Why do we write super(props) in Class?


# Lifecycle of React
- When the class loads, the constructor is called
- When class is instanstiated, then constructor is called
- Whenever constructor is called, then render is called
- After the component has been mounted (on the page), then componentDidMount is called

# Parent Child Relation
- If we have the parent also as a class based component then
- First, the parent's constructor is called
- the parent's render method is called
- parent's componentDidMount will be waiting till Child's component loaded completely
- Child's constructor is called
- Child's render is called
- Child's componentDidMount will be called
- Now Child's component has been loaded completely then Parent's componentDidMount is called

# Usecase of componentDidMount
- To make API calls
- First render the component -> Make API call -> Re-render the component

# Parent/Child Relation when multiple children
- React optimizes it when 2 children, it batches the render phase together and commit phase will batch together
- first constructor
- first render
- second constructor
- second render
- first componentDidMount
- second componentDidMount

# React Lifecycle
[Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
Two phases
- Render phase
- Commit phase

Render phase 
- constructor, render called
- Render phase is very fast

Commit phase 
- React updates DOM, componentDidMount called
- Commit phase takes time

Mounting:
- Showing to the UI

Updating:
- DOM Maniulation is expensive, so react optimizes and batches render and commit phase
- React triggers the render once again
- componentDidUpdate

Unmounting:
- When the component will disappear from html (as soon as it disappears)
- componentWillUnmount

# componentDidUpdate
- After updating DOM

# Use case of componentDidUnmount
- For eg. if we start the setInterval() in componentDidMount for 1 sec, then it will be calling every 1 sec even if we route to another component
- To clear up this, we need to write clearInterval() in componentDidUnmount

# Return Function in useEffect()
- This is called when unmounting it
- It will called after we leave the component, moving to another component
- If we use setInterval in useEffect(), then we have to clean it using clearInterval in return function of useEffect.

# Single Responsibility Principle
- For each component, we should have single responsibility
- If we are doing more than one thing in a single component, then we have to break the components
- Good way to maintain the components
- To maintain modularity
- Reuseable
- Maintainable
- Testable

# Custom Hooks
- To maintain modularity
- Reuseable
- Maintainable
- Testable
- Try to start the custom hooks with "use"
- keep it in util folder

# Optimization
- Bundler - Bundles are files and make it into one
- Our app bundles are all code into index.js file in parcel which has more than 2 MB, which is not good
- If the size is higher, then our app will take lot of time to load

# Lazy Loading
- Diff names - Chunking, Code Splitting, Dynamic Bundling, on demand loading, dynamic import
- Break down our apps into smaller bundles
- Lazy function comes from react library
- It takes callback function, has import function

# Suspense
- It is a component, comes from React Library

# Adding styles to React
SASS - writing CSS with super powers
SCSS - 
styled components
Material UI
Bootstrap
Chakra UI
Ant design
Tailwind CSS

# Post CSS
- Tailwind CSS uses postCSS behind the scenes
- tool for transforming CSS with Javascript
- postcssrc is a way that our projects (parcel) understands tailwind

# Pros
- It is lightweight

# Higher Order Components (HOC)
- HOC is a function which takes a component enhances that component and returns a component
- HOC are pure function

# Controlled vs Uncontrolled Components:
- Controlled - controlled by parents with parent state (relying on its parents to tell what to do)
- Uncontrolled - controlled by child itself with Child state


# React Dev Tools
- It has UI layer and data layer

# Lifting the state up
- Sometimes we have to lift the state up, in order to controll the components

# Props Drilling
- One way data flow (parent to children)
- Passing the data from parent to children on so much levels
- The problem is passing props

# React Context
- Avoid props drilling
- Can access the data anywhere in our application
- useContext

# Accessing context in class comp
- Consumer

# context.provider
- Overriding the default value using comp.Provider
- We can provide to the whole app or just a small portion
- We can update the context
- It will update even in lazy component
- Wherever we are using useContext, React will rerender

# Context
- Creating context - createContext
- use that context - useContext
- using context in class based comp - .Consumer - takes callback function
- can use it anytime you want to
- very flexible
- modify - .Provider - value will be provided to everywhere
- tied usercontext in state variable
- so everywhere data changes

# Redux
- Redux is not mandatory
- Very large scale application uses Redux
- use it only required
- Redux offers easy debugging
- Predictable state container for JS apps

# Libraries
- React Toolkit - latest way to learn Redux

# Redux Toolkit (RTK)
It solves three problems
- Redux store is very complicated
- Have to add lots of packages
- Redux requires too much boilerplate code

# Redux Store
- very big js object, kept in a golbal central place
- any comp can access it
- read and write data into that store

# Slice
- logical partition
- Eg: cart slice, userInfo slice

# Dispatch (Action)
- clicking add button it dispatches an action
- calls the function, function modifies the cart

# Writing data in Redux
- When clicking add button, it dispatches action which calls the reducer function which updates the  clice of the redux store

# Reading Data in Redux
- We use selector to read the data from the store, the selector will update the cart in header comp
- Sector == Subscribe to the store == to be in SYNC

# Redux Toolkit
- npm install @reduxjs/toolkit, npm install react-redux
- Build our store
- Connect our store to our app
- Slice (Cart slice)
- Dispatch (Action)
- Reducer
- Selector
- current(state) gives current state data - for debugging
- RTK says either mutate the existing state or return a new state


# Diff btw 
onClick = {handleItem}
onClick = {() => handleItem(item)}
onClick = {handleItem(item)}

# Important Interview Questions
- Only subscribe to the specific portion of the store, that we want - It is efficient, performance optimization
- In store, we have `reducer`
- In slice, we have multiple small `reducers`
- While exporting, we are exporting one `reducer`

# Redux vs Toolkit
- Vanilla redux - we shouldn't mutate the state, returning was mandatory
- Toolkit -  we have to mutate the state, returning was not mandatory
- Toolkit uses Immer library to find the diff btw original state and mutated state and gives us back the new state - Immutable state
- Redux uses Immer BTS

# Middleware, Thunks
 

# TEST
- Concerned about only Developer Testing

# Types of Testing
- Manual Testing
- Writing Test case - which tests our application automatically

# 3 Types of Testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing (E2E)

# Unit Testing
- Test react comp in isolation

# Integration Testing
- Multiple comp talking to each other, flow of it

# End to End Testing
- Testing the application as soon as the user lands on the website, to the user leaves the website

# Testing Library
- DOM Testing Library
- React Testing Library uses Jest - Delightful JS Testing framework

# Setting up testing
- npm i -D @testing-library/react
- npm i -D jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- Configured babel in babel.config.js
- To disable Babel transpilation in Parcel, .parcelrc
- npm run test
- npx jest --init
- npm install --save-dev jest-environment-jsdom
- @babel/preset-react - to make jsx working inside our app
- Include @babel/preset-react in babel.config.js
- npm i -D @testing-library/jest-dom 

# Folder/File structure
- __tests__ folder = dunder method
- *.test.js
- *.spec.js

# Test whether the component is loaded or not
- can use test or it
"
("test" or "it")("Should load contact us componenet" , () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});
`

# Selecting Elements in Testing
- getByRole - heading
- getByPlaceholderText - placeholder in input
- getByText - text in screen
- getBy - only one result
- getAllBy - all the result
- when we console this we get React Element, JSX

# Grouping Test cases
- describe

# Testing with Redux
- we have to wrap inside our render method with <Provider store>
- or it will throw error

# Testing with Router
- wrap it in <BrowserRouter>

# Reject
- /Cart/









/*
* Header
- Logo
- Nav Items
* Body
- Search Input
- * Restraurant Container
        - Image
        - Name of Res, Star rating, cuisine, delivery time
- Res Card
* Footer
- Copyright
- Links
- Address
- Contact

*/