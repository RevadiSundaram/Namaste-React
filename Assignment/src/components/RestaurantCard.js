const RestaurantCard = (props) =>{

    const {resData } = props;
    const {cloudinaryImageId,costForTwo, cuisines,name, avgRating } = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return(
        <div className="res-card">
            <img className="res-image" alt="Restaurant-image" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h5>{name}</h5>
            <h5>
                <i className="fa-solid fa-star rating"></i>
                &nbsp; {avgRating}&nbsp; . &nbsp; {deliveryTime} mins
            </h5>
            <p className="grey">{cuisines.join(", ")}</p>
            <p className="grey">{costForTwo}</p>
        </div>
    )
}

export default RestaurantCard;