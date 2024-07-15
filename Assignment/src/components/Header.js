import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [userDet, setUserDet] = useState("Sign In");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between items-center py-3 px-10">
            <Link to="/">
                <div className="flex gap-1 items-center">
                    <img className="w-[100px] h-[100px]" src={LOGO_URL} />
                    <h3>Swiggy</h3>
                </div>
            </Link>
            
            
            <div className="nav-el">
                <ul className="flex gap-10 items-center font-medium">
                    
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