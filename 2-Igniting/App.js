import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{ id: "parent"}, 
React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
]
));

//Output is javascript object
console.log(parent);

//Put this DOM to the root
const root = ReactDOM.createRoot(document.getElementById("root") );
//Creating the root inside in React (used for render) 
//Takes the js object and put it into root element as a h1 tag
root.render(parent);