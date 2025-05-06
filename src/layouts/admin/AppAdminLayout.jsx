import { Outlet } from "react-router-dom";
import AppAdminHeader from "./AppAdminHeader";
import AppAdminSideBar from "./AppAdminSideBar";
import AppAdminFooter from "./AppAdminFooter";

const AdminLayout = () => {

    return (
        <div className="main-layout">
         
            <AppAdminHeader/>
            <AppAdminSideBar/>
            <div className="page-content">
               <Outlet />
            </div>
            <AppAdminFooter />
        </div>
    );

};

export default AdminLayout;