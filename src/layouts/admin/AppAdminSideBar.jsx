import { Menu } from '../../shared/index';
import { useRef, useState } from 'react';
import { useLayout } from './context/LayoutContext';
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
  const { toggleSidebar } = useLayout();

  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <i className="pi pi-angle-double-left"></i>
        </div>
        <div className="sidebar-content">
          <Menu model={model} />
        </div>
      </div>
    </>
  );
};
