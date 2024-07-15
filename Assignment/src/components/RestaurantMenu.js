import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null){
        return <Shimmer />
    }
    
    const {name, avgRating, totalRatingsString, costForTwoMessage, areaName, cuisines, feeDetails, sla} = resInfo?.data.cards[2]?.card?.card?.info;
    const itemCards = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    return(
        <main className="bg-white pt-20">
        <div className="pt-20 bg-[#e76f51] items-center flex flex-col justify-center py-5 px-10 rounded-lg">
            <h1 className="font-bold text-2xl">{name}</h1>
            <div className="gap-1">
                <div className="flex gap-1">
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
        </main>
    )
}
export default RestaurantMenu;