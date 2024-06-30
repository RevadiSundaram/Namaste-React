import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default  Header = () =>{

    
    // let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // if no depandancy array => useeffect is called on every component render
    // if depandancy array is empty => useeffect is called on initial render and just once
    // if any depandancy => useeffect called only when the depandancy changes
    // useEffect(() =>{
    //     console.log("useeffect called");
    // }, [])

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : &nbsp;
                        {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About</Link></li>
                    <li>
                        <Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
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
