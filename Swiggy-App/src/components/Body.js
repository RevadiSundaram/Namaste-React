import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    //Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.939819&lng=77.5834339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }   

    // Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer></Shimmer>
    // }
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Looks like you're Offline! Please check your internet connection</h1>
    }

    return (listOfRestaurants.length === 0) ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                        onChange={(e) =>{
                            setSearchText(e.target.value);
                        }}
                    ></input>
                    <button 
                        className="search-btn"
                        onClick={() => {
                        //Filter the restaurant cards and update UI
                        //searchText
                        console.log(searchText);
                        const filterRes = listOfRestaurants.filter((res) =>
                        {  
                           return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        }
                        );

                        setFilteredRestaurants(filterRes);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" 
                    onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) =>  {
                         return res.info.avgRating >= 4.2;
                        }
                    );
                    setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-cont">
                {
                    filteredRestaurants.map((restaurant) => (
                   <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}> <RestaurantCard resData = {restaurant} /> </Link>

                ))}

            </div>
            
        </div>
    )
}

export default Body;