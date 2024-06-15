import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () =>{
    return(
        <div className="body">
            <h2>Top Restraurants in Bangalore</h2>
            <div className="res-list">
                { resList.map((restaurant) =>(
                    <RestaurantCard 
                    resData = {restaurant} key={restaurant.info.id}/>
                ))
                }
            </div>
        </div>
    )
}
export default Body;