import {LOGO_URL} from "../utils/constants";

const Header = () => {
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
                    <li><i className="fa-regular fa-user"></i> &nbsp; Sign In</li>
                    <li><i className="fa-solid fa-cart-shopping"></i> &nbsp; Cart</li>
                </ul>
            </div>
        </div>
        
    )
}
export default Header;