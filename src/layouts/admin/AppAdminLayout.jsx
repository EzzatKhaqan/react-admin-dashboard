import { Outlet } from 'react-router-dom';
import { AppAdminHeader } from './AppAdminHeader';
import { AppAdminSideBar } from './AppAdminSideBar';
import { AppAdminFooter } from './AppAdminFooter';
import './styles/style.css';
import { useLayout } from './context/LayoutContext';
const AdminLayout = () => {
  const { isSidebarOpen } = useLayout();
  const classContainer = isSidebarOpen ? '' : 'sidebar-inactive';

  return (
    <div className={['main-wrapper', classContainer].join(' ')}>
      <AppAdminHeader />
      <AppAdminSideBar />
      <div className="page-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
