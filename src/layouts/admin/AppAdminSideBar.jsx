import { Menu } from '../../shared/index';
import { useState } from 'react';

export const AppAdminSideBar = () => {
  const [model] = useState([
    {
      label: 'Home',
      items: [
        {
          label: 'dashboard',
          icon: 'pi pi-chart-bar',
          to: '/admin',
        },
      ],
    },
    {
      label: 'UI Components',
      items: [
        {
          label: 'Form',
          to: '/admin/ui-kits/form',
          icon: 'pi pi-fw pi-file',
        },
        {
          label: 'Table',
          to: '/admin/ui-kits/table',
          icon: 'pi pi-table',
        },
        {
          label: 'Input',
          to: '/admin/ui-kits/input',
          icon: 'pi pi-check-square',
        },
      ],
    },
  ]);

  return (
    <>
      <div className="sidebar-wrapper">
        <Menu model={model} />
      </div>
    </>
  );
};
