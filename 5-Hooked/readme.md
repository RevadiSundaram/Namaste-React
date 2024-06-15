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