import AdminLayout from '../../../layouts/admin/AppAdminLayout';
import Dashboard from '../../../dashboards/admin/Dashboard';
import { Table } from '../../../modules/admin/uikit/Table';
import { Form } from '../../../modules/admin/uikit/Form';
import { Input } from '../../../modules/admin/uikit/Input';
import { Button } from '../../../modules/admin/uikit/Button';

export const AdminRoutes = [
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'ui-kits',
        children: [
          {
            path: 'button',
            element: <Button />,
          },
          {
            path: 'form',
            element: <Form />,
          },
          {
            path: 'input',
            element: <Input />,
          },
          {
            path: 'table',
            element: <Table />,
          },
        ],
      },
    ],
  },
];
