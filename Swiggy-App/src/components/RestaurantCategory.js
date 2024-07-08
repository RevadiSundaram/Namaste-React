import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    // const [showItem, setShowItem] = useState(false);

    const handleClick = () => {
        
        setShowIndex();
    }

    return (
        <div>
        <div className="w-7/12 mx-auto my-3  cursor-pointer  bg-gray-50 shadow-lg p-4">
            <div className="font-bold text-lg  flex justify-between" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
           { showItems && <ItemList items = {data.itemCards} /> }
        </div>
        </div>
    )
}
export default RestaurantCategory;