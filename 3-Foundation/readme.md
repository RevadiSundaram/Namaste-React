# Executing our App
- Instead of running npx parcel index.html, we can add script in package.json file
  "start": "parcel index.html" => For development
  "build": "parcel build index.html" => For production
- While executing, we can give => "npm run start"
- We can also give npm start (will only work for start, not build)

# React Elements
- React.createElement ==> Object ==> (Rendering) ==> HTML Element
- While rendering it will replace whatever inside root element (html) with the element that we are giving in JS

# JSX
JSX - HTML-like or XML-like Java Script Syntax
- We can write React without JSX also  
- JSX makes developers life easy
- Merging HTML and JS together
- JSX is not HTML inside JS
- This is not pure JS
- JSX code is transpiled (converted which browser understands) before it reaches JS engine
- Parcel is transpiling the code (managing) => Babel does it

# Babel
- Babel is a package which is inside parcel
- Babel is a javascript compiler
- JSX converted to React.createElement => HTML Element
- Babel is transpiling JSX to React.createElement

# Usage of JSX:
- camelCase should be used in attributes
- Eg: class ==> className
- tabindex ==> tabIndex
- Wrap multiple lines in round brackets ()





Homwork:
img, anchor, iframe, tabindex