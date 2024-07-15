import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
//import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {

    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const data = {
            name: "Revadi Sundaram",
        };
        setUserName(data.name);
    }, [])
    return(
        <div className="app">
            <UserContext.Provider value={{loggedInUser: userName}} >
            <Header />
            <Outlet />
            </UserContext.Provider>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element:
                <Suspense
                    fallback={<h1>"Loading About..."</h1>}>
                    <About />
                </Suspense>
                ,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: 
                <Suspense
                 fallback={<h1>Loading...</h1>}
                ><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 