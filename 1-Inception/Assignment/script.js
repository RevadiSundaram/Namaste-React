//Using React
const heading = React.createElement("div", {id:"heading"},
React.createElement("div", {}, 
[
React.createElement("h1", {}, "I am from h1 tag"),
React.createElement("h2", {}, "I am from h2 tag")
]
)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);