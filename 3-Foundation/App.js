import React from "react";
import ReactDOM from "react-dom/client"; 

//React Element

const heading = React.createElement("h1", {id: "Heading"}, "Episode 3 - Laying the Foundation - Namaste React 🚀");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX heading - html-like or xml-like syntax

const Title = ()=> (
<h1 className="head">
    Namaste React using JSX
</h1>
);


// React Functional Component
const HeadingComponent = () =>(
    <div>
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    
);

const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); 