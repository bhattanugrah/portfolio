import { Outlet } from "react-router-dom"
import { BackgroundBeams } from "../../components/ui/background-beams";
import Header from "../../components/header/header";
import Navbar from "../../components/header/navbar";
// import Footer from "../../components/footer/footer";




const PublicLayout = () => {
    return(
        <div className="layout !bg-black min-h-screen">
            <BackgroundBeams className="bg-black z-0" />
            <Navbar className="top-2 text-white"/>
            <Header />
            <div className=" h-[100vh]">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default PublicLayout;