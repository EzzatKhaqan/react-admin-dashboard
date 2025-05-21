import { PageHeader } from '../../../shared';
import { useLayout } from '../../../layouts/admin/context/LayoutContext';
export const Form = () => {
  const { isSidebarOpen } = useLayout();
  return (
    <>
      <PageHeader start="Form" />
      <h1>Form</h1>
    </>
  );
};
