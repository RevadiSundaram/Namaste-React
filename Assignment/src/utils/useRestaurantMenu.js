import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() =>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json);
        console.log(json);
        
    }
    return resInfo;
}

export default useRestaurantMenu;