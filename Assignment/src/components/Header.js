import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [userDet, setUserDet] = useState("Sign In");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <Link to="/">
                <div className="icons">
                    <img className="icon" src={LOGO_URL} />
                    <h3>Swiggy</h3>
                </div>
            </Link>
            
            
            <div className="nav-el">
                <ul>
                    
                    <Link to="/grocery"><li>Grocery</li></Link>
                    <Link to="/contact"><li><i className="fa-solid fa-magnifying-glass"></i> &nbsp; Contact </li></Link> 
                    <Link to="/about"><li><i className="fa-solid fa-circle-info"></i> &nbsp; About  </li></Link>
                    <button onClick={() => {
                        if(userDet == "Sign In"){
                            setUserDet("Sign Out");
                        }
                        else{
                            setUserDet("Sign In");
                        }
                    }}> 
                        <li><i className="fa-regular fa-user"></i> &nbsp; {userDet}</li>
                    </button>
                    <li><i className="fa-solid fa-cart-shopping"></i> &nbsp; Cart</li>
                    <li>{onlineStatus ? "Online  ✅" : "Offline  🔴"}</li>
                </ul>
            </div>
        </div>
        
    )
}
export default Header;