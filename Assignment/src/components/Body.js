import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

const Body = () =>{

    const [searchRes, setSearchRes] = useState("");

    function handleChange(e){
            e.preventDefault();
            const filterList = searchRes.filter(
                (res) => res.info.name == e.target.value);
            setSearchRes(filterList);
            console.log(e.target.value);
    }

    return(
        <div className="body">
            <div className="input-box">
                <input type="textbox"
                    id="search-box"
                    name="search-box"
                    value={searchRes}
                    onChange={handleChange}
                  
                 placeholder="Search for a restaurant" />
                
            </div>
            <h2>Top Restraurants in Bangalore</h2>
            <div className="res-list">
                { searchRes.map((restaurant) =>(
                    <RestaurantCard 
                    resData = {restaurant} key={restaurant.info.id}/>
                ))
                }
            </div>
        </div>
    )
}
export default Body;