const Header = () => {
    return(
        <div className="header">
            <div className="icons">
                <img className="icon" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-icon-2-design-template-b7f020f0195178f74a0a241024343dd3_screen.jpg?ts=1627156857" />
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