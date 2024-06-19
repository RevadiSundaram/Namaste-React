import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [userDet, setUserDet] = useState("Sign In");
    return(
        <div className="header">
            <div className="icons">
                <img className="icon" src={LOGO_URL} />
                <h3>Foodie Treat</h3>
            </div>
            
            <div className="nav-el">
                <ul>
                    <li><i className="fa-solid fa-magnifying-glass"></i> &nbsp; Search </li>
                    <li><i className="fa-solid fa-circle-info"></i> &nbsp; Help  </li>
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
                </ul>
            </div>
        </div>
        
    )
}
export default Header;