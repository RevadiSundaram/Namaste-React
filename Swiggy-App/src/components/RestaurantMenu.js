import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null){
        return <Shimmer />
    }

    const { name, costForTwoMessage, cuisines } = resInfo?.data.cards[2]?.card?.card?.info;

    const cards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards); 
    //console.log(cards);
    //console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        cat => 
        cat.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    

    return (
        
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            <h3 className="font-bold">{costForTwoMessage}</h3>
            
                {/* {cards
                &&
                cards.map((item) => 
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                )} */}
            {
                categories.map((category, index) => 
                <RestaurantCategory key={category?.card?.card?.title} 
                data={category?.card?.card} 
                showItems={index === showIndex ? true : false}
                setShowIndex={() =>setShowIndex(index)}/>)
            }
        </div>
    )
}
export default RestaurantMenu;