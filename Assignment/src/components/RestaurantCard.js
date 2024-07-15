import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{

    const {resData } = props;
    const {cloudinaryImageId,costForTwo, cuisines,name, avgRating } = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return(
        <div className="p-5 rounded-lg bg-white w-[250px] leading-7">
            <img className="w-[200px] h-[150px] m-auto rounded-md" alt="Restaurant-image" 
                src={CDN_URL+cloudinaryImageId} />
            <h5 className="pt-5 font-bold truncate">{name}</h5>
            <h5>
                <i className="fa-solid fa-star rating text-green-700"></i>
                &nbsp; {avgRating}&nbsp; . &nbsp; {deliveryTime} mins
            </h5>
            <p className="truncate">{cuisines.join(", ")}</p>
            <p className="grey">{costForTwo}</p>
        </div>
    )
}

export default RestaurantCard;