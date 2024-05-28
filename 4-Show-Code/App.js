import React from "react";
import ReactDOM from "react-dom/client"; 

/*
* Header
- Logo
- Nav Items
* Body
- Search Input
- * Restraurant Container 
- Res Card
* Footer
- Copyright
- Links
- Address
- Contact

*/

const Header = () =>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 