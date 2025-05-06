import AppPublicLayout from "../../../layouts/public/AppPublicLayout";

export const PublicRoutes = [

    {
        path:"",
        element:<AppPublicLayout/>,
        children:[
            {
                path:"",
                element:<div>Home</div>
            }
        ]
    }
];
