import AdminLayout from "../../../layouts/admin/AppAdminLayout";
import Dashboard from "../../../modules/admin/dashboard/Dashboard.jsx";
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

