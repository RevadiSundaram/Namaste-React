import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => 
            <div key={item.card.id} className="p-2 m-2 border-b-2 text-left flex justify-between gap-3">
                <div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-lg">{item.card.info.isVeg == 1 ? "🌿" : "🍗"}  {item.card.info.name}</p>
                    <p>₹{item.card.info.price ? item.card.info.price /100: item.card.info.defaultPrice/100}</p>
               </div>
               <p className="text-xs w-11/12">{item.card.info.description}</p>
               </div>
               <div className="flex gap-3 flex-col">
                <img className="w-[150px] h-[100px]" src={CDN_URL + item.card.info.imageId} />
                <button className="p-1 bg-gray-100 text-green-700 rounded-sm absolute">ADD</button>
               </div>
                </div>
            )}

        </div>
    )
}

export default ItemList;