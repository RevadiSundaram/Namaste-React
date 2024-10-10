import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    console.log(resData);

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

// Higher Order Component

// input - Res card => Res card Promotion

export const withOfferLabel = (RestaurantCard) => {
    return (props) => {
        const offer = props.resData.info.aggregatedDiscountInfoV3;
        return (
            
            <div>
                <label for="offer" className="absolute bg-black text-xs text-white ml-8 mt-4 p-1 rounded-md">{offer.header} {offer.subHeader}</label>
                <RestaurantCard {...props} />
                {console.log()}
            </div>
        )
    }
}

export default RestaurantCard;