
import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Loginregister from "../pages/Loginregister"
import Modal from "../pages/Modal"
import Dashboard from "../pages/Dashboard"
import Root from './Root'


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
                path: "/Dashboard",
                element: <Dashboard />,
                
            },
            {
                path: "/Loginregister",
                element: <Loginregister />,
            }

        ],
        
    },
    {
        path: "/Modal",
        element: <Modal/>,
        
    },
]);

