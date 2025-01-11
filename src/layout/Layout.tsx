import { Outlet } from "react-router-dom";
import {Footer} from "@/components"

const Layout = () => {
    return (
        <>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout