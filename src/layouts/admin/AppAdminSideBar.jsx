import { Menu } from '../../shared/index';
import { useState } from 'react';
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
    {
      label: 'Level',
      items: [
        {
          label: 'Label 1',
          icon: 'pi pi-table',
          items: [
            {
              label: 'Level 1.1',
              icon: 'pi pi-table',
              items: [
                {
                  label: 'Level 1.2',
                  icon: 'pi pi-table',
                  items: [
                    {
                      label: 'Level 1.3',
                      icon: 'pi pi-table',
                      items: [
                        {
                          label: 'Level 1.4',
                          icon: 'pi pi-table',
                          items: [
                            {
                              label: 'Level 1.5',
                              icon: 'pi pi-table',
                              items: [
                                {
                                  label: 'Level 1.6',
                                  icon: 'pi pi-table',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
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
