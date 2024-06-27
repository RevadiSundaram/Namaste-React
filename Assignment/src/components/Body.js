import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {BrowserRouter, RouteProvide} from "react-router-dom";

const Body = () =>{

    const [topRes, setTopRes] = useState([]);
    const [listOfRes, setListOfRes] = useState([]);
    const [searchRes, setSearchRes] = useState("");

   
    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.939819&lng=77.5834339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await data.json();
        // console.log(response);
        setListOfRes(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTopRes(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    return (listOfRes.length=== 0) ? <Shimmer /> : ( 
        <div className="body">
             
            <div className="input-box">
                <input type="textbox"
                    id="search-box"
                    name="search-box"
                    placeholder="Search for a restaurant" 
                    value={searchRes}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setSearchRes(e.target.value);
                    }}
                    />
                <button className="search-btn"
                    onClick={() => {
                        const filterRes = listOfRes.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchRes.toLowerCase());
                        })
                        console.log("Clicked from search")
                        
                        setTopRes(filterRes);
                    }}
                >Search</button>
                
            </div>
            <div className="top-res">
                <h2>Top Restraurants in Bangalore</h2>
                <button className="topres-btn"
                    onClick={()=>{
                        const filterData = topRes.filter((res) =>{ 
                         return  res.info.avgRating >=4.2;
                        });
                        setListOfRes(filterData);
                        console.log("Clicked from top");
                }}
                >Click Here</button>
            </div>
            
            <div className="res-list">
                {
                 topRes.map((restaurant) =>(
                    <RestaurantCard 
                        resData = {restaurant} key={restaurant.info.id}/>
                ))
                }
            </div>
        </div>
    )
}
export default Body;