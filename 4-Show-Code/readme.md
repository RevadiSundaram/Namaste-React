# Planning
- Always plan the app beforehand
- Prepare a flowchart how our website will look like

# Component
- Function which returns a JSX

# Installing and Running
- npm init
- npm install -D parcel
- type="module" in App.js
- "start": "parcel index.html" in script in package.json
- npm install react
- npm install react-dom
- To start, npm start

# Ways to write CSS
- External CSS
- Inline CSS - We have to write as JS object
- Tailwind CSS

# Inline CSS in React

"const styleRes = {
    backgroundColor: "black"
}
<div className="res-card" style={styleRes}></div>
or
<div className="res-card" style={{
    backgroundColor: "black"
}}></div>"

# Props
- Shortform for Properties
- Which we can pass through the components
- Arguments to a function
- Passing props below
"
<RestraurantCard 
                    resName = "KFC" 
                    cuisine="Burger, Fast Food" 
                />

const RestraurantCard = (props) =>{
    return(
        <h3>{props.resName}</h3>
        <h3>{props.cuisine}</h3>
    )}
"
# Destructuring Props
- Destructuring on the components
- This is not react, it is pure JS
"
<RestraurantCard 
                    resName = "KFC" 
                    cuisine="Burger, Fast Food" 
                />

const RestraurantCard = ({resName, cuisine}) =>{
    return(
        <h3>{resName}</h3>
        <h3>{cuisine}</h3>
    )}
"

# Config Driven UI
- Our website is driven by UI
- Each location has diff UI (diff data)
- Controlling our UI which has diff data (data from backend)

# CDN 
- Cloudinary Image Id is the CDN which swiggy uses