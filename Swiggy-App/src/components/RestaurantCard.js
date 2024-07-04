import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId, name, avgRating, cuisines,  costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className="m-4 bg-gray-100 p-4 w-[250px] rounded-lg hover:bg-purple-200">
            <img 
            className="res-logo rounded-md w-[240px] h-[150px] cursor-pointer"
            alt="res-logo" 
            src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-3 mt-1 text-lg font-mono">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;