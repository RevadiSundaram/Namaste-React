import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export default  Header = () =>{

    // let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button 
                        className="login" 
                        onClick={() => {
                           btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                            }}>
                                {btnName}
                                </button>
                </ul>
            </div>
        </div>
    )
}