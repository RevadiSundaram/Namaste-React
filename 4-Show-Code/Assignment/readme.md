# Is JSX mandatory for React?
- No, we can write React without using JSX
- Using React without JSX is especially convenient when you don't want to set up compilation in your build environment

# Is ES6 mandatory for React?
- ES6 is not mandatory for React but is highly recommendable. 
- The latest projects created on React rely a lot on ES6. 
- React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const). 
- ES6 stands for ECMAScript 6.

# `{TitleComponent} vs {<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>} in JSX`
Both are equal

# How can I write comments in JSX?
To put comments inside JSX, you use the syntax {/* */} to wrap around the comment text.

# What is <React.Fragment></React.Fragment> and <></> ?
React Fragments allow you to wrap multiple elements without adding an extra DOM element.
<> </> is short for <React.Fragment></React.Fragment> 

# What is Virtual DOM and Reconciliation?
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

# Reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.

# What is React Fiber?
React Fiber is a reimplementation of React's core algorithm, designed to enhance the user interface's responsiveness and renderability.

# Why we need keys in React? When do we need keys in React?
- A “key” is a special string attribute you need to include when creating lists of elements in React.
- Keys are used in React to identify which items in the list are changed, updated, or deleted. 
- Keys are used to give an identity to the elements in the lists.

#  Can we use index as keys in React?
- We don’t recommend using indexes for keys if the order of items may change. 
- This can negatively impact performance and may cause issues with component state. 

# What is props in React? Ways to add props in React
- Props simply stands for properties. 
- They are what make components reusable. 
- Because they perform an essential function – they pass data from one component to another.  

Ways to pass
[text](https://www.freecodecamp.org/news/beginners-guide-to-props-in-react/)

# What is a Config Driven UI ?
Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them.

- Our website is driven by UI
- Each location has diff UI (diff data)
- Controlling our UI which has diff data (data from backend)