# Basic hello world program in vscode - html:5

# Using Javascript to build Hello World 

    <div id="root"></div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from JavaScript!";

        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>

- Browser do not know React
- So get React into our project
- By adding cdn into our project, we can code React

# What is a React?
- React is a Javascript Library

# Who wrote React code?
- Developed by Facebook Developers

# Ways to add React into our project
- CDN

# DOM Manipulation
- Removing and adding nodes is costly, thats why we are using React (to write everything in js)

# Giving attributes to the tab
const heading = React.createElement("h1", 
{
    id: "heading",
    xyz: "abc"
}, 
"Hello World from React!");

<h1 id="heading" xyz="abc">Hello World from React!</h1>


# ReactElement gives Object => HTML (Browser understands)

React.createElement("div", //tag
{id="parent"}, //attributes
"I am a div tag") //content

- if we want to pass one more tag, then pass as an array in the third argument.

# Order
Keep React before your App.js 

# About React
- If there are some tags inside the root div tag in index.html, that tags will be replaced by the things which we are passing from our render method
- React will only work in root id
- React can work in existing applications
- React can work in the small portions of the page (by giving cdn links)

# React.StrictMode why rendering twice
- React.StrictMode will render twice in dev env
- The same will render once in prod env
- Bcoz in dev env, just to make sure the reconcilliation algorithm working, it is made like that
- just to be sure it is updating properly (internally)