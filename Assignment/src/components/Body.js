import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {BrowserRouter, RouteProvide} from "react-router-dom";
import { Link } from "react-router-dom";

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
        <div className="flex flex-col items-center justify-center p-10 bg-[#e76f51]">
             
            <div className="p-3 flex gap-5">
                <input type="textbox"
                    id="search-box"
                    name="search-box"
                    className="px-2 rounded-md bg-[#e76f51] border"
                    placeholder="Search for a restaurant" 
                    value={searchRes}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setSearchRes(e.target.value);
                    }}
                    />
                <button className="bg-white py-2 px-5 rounded-md"
                    onClick={() => {
                        const filterRes = listOfRes.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchRes.toLowerCase());
                        })
                        console.log("Clicked from search")
                        
                        setTopRes(filterRes);
                    }}
                >Search</button>
                
            </div>
            <div className="p-3 flex gap-1">
                <h2>Top Restraurants in Bangalore</h2>
                <button className="text-sm text-white"
                    onClick={()=>{
                        const filterData = topRes.filter((res) =>{ 
                         return  res.info.avgRating >=4.2;
                        });
                        setListOfRes(filterData);
                        console.log("Clicked from top");
                }}
                >Click Here</button>
            </div>
            
            <div className="flex flex-wrap gap-10 mt-16 justify-center ">
                {
                 topRes.map((restaurant) =>(
                    <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id} >
                        <RestaurantCard 
                            resData = {restaurant} />
                    </Link>
                ))
                }
            </div>
        </div>
    )
}
export default Body;