import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
=======
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Root() {
    return (
        <>   <div className= "bg-white">
            <Navbar />
            <Outlet />
            <Footer/>
            </div>
>>>>>>> dev
        </>
    )
}

export default Root;