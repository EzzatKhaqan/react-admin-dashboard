import AdminLayout from "../../../layouts/admin/AppAdminLayout";
import Dashboard from "../../../dashboards/admin/Dashboard";
export const AdminRoutes = [
    {
        path:"admin",
        element:<AdminLayout/>,
        children:[
                {
                    path:"",
                    element:<Dashboard/>,
                }
        ]   
    }
];

