import { Outlet } from "react-router-dom";
import Header from "../../Pages/Header";
import Footer from "../../Pages/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default MainLayout;