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