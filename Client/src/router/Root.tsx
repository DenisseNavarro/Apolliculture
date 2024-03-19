import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Card from "../components/cart/Card";

function Root() {
    return (
        <>   <div className= "bg-white">
            <Navbar />
            <Outlet />
            <Footer/>
            </div>
        </>
    )
}

export default Root;