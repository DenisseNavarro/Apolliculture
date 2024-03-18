
import  {createBrowserRouter} from "react-router-dom"
import Home from '../pages/Home'
import Loginregister from "../pages/Loginregister"
import Modal from "../pages/Modal"
import Dashboard from "../pages/Dashboard"
import ProductList from "../pages/ProductList"
import Root from './Root'
import UserAdmin from "../pages/UserAdmin";
import ShoppingCar from "../pages/ShoppingCar"


export const router = createBrowserRouter([
    {
        
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <Home />,
               
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                
            },
             
            {   path: "/ProductList", 
                element: <ProductList/>,
            },
            {
                path: "/loginregister",
                element: <Loginregister />,
            },
            {
                path: "/users",
                element: <UserAdmin />,
                
            },
            {
                path: "/Modal",
                element: <Modal/>,
                
            },
            {
                path: "/ShoppingCar",
                element: <ShoppingCar/>,
                
            },
        ],
    
        
    },
 
]);

