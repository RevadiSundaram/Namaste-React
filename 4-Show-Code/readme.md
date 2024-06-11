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

`const styleRes = {
    backgroundColor: "black"
}
<div className="res-card" style={styleRes}></div>
or
<div className="res-card" style={{
    backgroundColor: "black"
}}></div>`

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

# Key
- Always use keys while rendering
- If we dont use keys, and suppose if new items came at the starting or in the middle, React will not know where the item came and it will rerender all the 15 items
- React will not uniquickly identify elements
- If we use keys, then react will know which id is present already and whichever added newly only will render, all the others will not rerender
- It will improve performance

# Index as Key
- It is okay to use index as a key, it will work. But it is not recommended
- Cannot use map's index also as a key
- In React's official doc, it is written we dont recommend writing indexes as a key
- unique id >>>>>>> can use index as a key >>>>>> not using keys