import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);
    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.939819&lng=77.5834339&restaurantId=1452&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json);
        console.log(json);
    }
    if (resInfo === null){
        return <Shimmer />
    }

    const {name, avgRating, totalRatingsString, costForTwoMessage, areaName, cuisines, feeDetails, sla} = resInfo?.data.cards[2]?.card?.card?.info;
    const itemCards = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    console.log(itemCards);
    console.log(itemCards[0].card.info.name)
    return(
        <div className="res-menu">
            <h1>{name}</h1>
            <div className="det-card">
                <div className="rat">
                <i className="fa-solid fa-star rating"></i>
                    <p>{avgRating}</p>
                    <p>.</p>
                    <p>({totalRatingsString})</p>
                    <p>.</p>
                    <p>{costForTwoMessage}</p>
                </div>
                <p className="cuisines">{cuisines.join(", ")}</p>
                <div className="deliveryy">
                    <div className="area">
                        <p><span>Outlet - </span></p>
                        <p>{areaName}</p>
                    </div>
                    <p><span>{sla.minDeliveryTime} - {sla.maxDeliveryTime} mins</span></p>

                </div>
                
                <div className="delivery">
                    <i className="fa-solid fa-person-biking"></i>
                    <p>{feeDetails.message}</p>
                </div>
            </div>
            <div className="menu">
                <h4>Recommended ({itemCards.length})</h4>
                <div className="each-menu">
                    {itemCards &&
                    itemCards.map((item) => 
                     <div className="item-info" key={item.card.info.id}>
                        <div className="item-det">
                            <p>{item.card.info.name}</p>
                            <p>{item.card.info.price}</p>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId} alt="item-image" className="item-image" />
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    )
}
export default RestaurantMenu;