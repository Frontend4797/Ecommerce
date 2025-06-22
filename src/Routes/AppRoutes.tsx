import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import PageNotFound from "../Pages/PageNotFound";

const routers=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"product-details",
                element:<ProductDetails/>
            },
            {
           path:"*",
           element:<PageNotFound/>
            }
        ]
    }
])


export default routers;