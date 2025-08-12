import AppPublicLayout from '../../../layouts/public/AppPublicLayout';
import Landing from '../../../views/pages/Landing';
export const PublicRoutes = [
  {
    path: '',
    element: <AppPublicLayout />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
    ],
  },
];
