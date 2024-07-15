import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export default  Header = () =>{

    const {loggedInUser} = useContext(UserContext);
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
        <div className="flex justify-between bg-pink-50 shadow-md mb-5 px-10">
            <div className="logo">
                <img className="w-36" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 gap-5">
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
                    <li>({loggedInUser})</li>
                </ul>
            </div>
        </div>
    )
}
