import { DataTable } from '../../../shared';
import { PageHeader } from '../../../shared/components/common/pageHeader/PageHeader';
export const Table = () => {
  return (
    <>
      <PageHeader start="Data Table" />

      <h1>This is Datatable</h1>
      <DataTable />
    </>
  );
};
