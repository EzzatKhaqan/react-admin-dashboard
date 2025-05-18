import { Outlet } from "react-router-dom";
import AppAdminHeader from "./AppAdminHeader";
import AppAdminSideBar from "./AppAdminSideBar";
import AppAdminFooter from "./AppAdminFooter";
import "./styles/style.css";

const AdminLayout = () => {

    return (
        <div className="main-wrapper">
         
            <AppAdminHeader/>
            <AppAdminSideBar/>
            <div className="page-wrapper">
               <Outlet />
            </div>
            <AppAdminFooter />
        </div>
    );

};

export default AdminLayout;