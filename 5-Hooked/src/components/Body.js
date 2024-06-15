import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {

    //Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4.5
                    );
                    setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="search">Search</div>
            <div className="res-cont">
                {
                    listOfRestaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} resData = {restaurant} />

                ))}

            </div>
            
        </div>
    )
}

export default Body;