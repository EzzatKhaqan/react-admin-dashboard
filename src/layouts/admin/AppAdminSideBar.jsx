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
          label: 'Test',
          icon: 'pi pi-chart-bar',
          to: '/admin/test',
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
      label: 'Multilevel',
      items: [
        {
          label: 'Level 1',
          items: [
            {
              label: 'Level 1.2',
              items: [
                {
                  label: 'Level 1.3',
                },
              ],
            },
          ],
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
