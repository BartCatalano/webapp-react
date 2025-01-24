import { Outlet } from "react-router-dom";
import AppHeader from "../components/appHeader";
import AppFooter from "../components/appFooter";


function AppLayout () {
    return (
        <>
        <AppHeader/>
        <Outlet/>
        <AppFooter/>
        
        </>
    )
}

export default AppLayout;