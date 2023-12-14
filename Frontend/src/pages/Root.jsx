import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
    return ( 
    <div className="bg-gray-100 min-h-screen">
    <Header/>
    <main>
        <Outlet/>
    </main>
    </div> );
}

export default RootLayout;