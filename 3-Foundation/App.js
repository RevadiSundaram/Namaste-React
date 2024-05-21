import React from "react";
import ReactDOM from "react-dom/client"; 

//React Element

const heading = React.createElement("h1", {id: "Heading"}, "Episode 3 - Laying the Foundation - Namaste React 🚀");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX heading - html-like or xml-like syntax

const jsxheading = (
<h1 className="head">
    Namaste React using JSX
</h1>
);

console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading); 