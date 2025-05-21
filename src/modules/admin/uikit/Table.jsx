import { DataTable } from '../../../shared';
import { PageHeader } from '../../../shared/index';
export const Table = () => {
  const columns = [
    {
      label: 'header 1',
    },
    {
      label: 'header 2',
    },
    {
      label: 'header 3',
    },
    {
      label: 'header 4',
    },
    {
      label: 'header 5',
    },
    {
      label: 'header 6',
    },
  ];
  const data = [
    {
      id: 1,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 2,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 3,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 4,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 5,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 6,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 7,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 8,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 9,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 10,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 11,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 12,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 13,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 14,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 15,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
    {
      id: 16,
      data1: 'data 1',
      data2: 'data 2',
      data3: 'data 3',
      data4: 'data 4',
      data5: 'data 5',
      data6: 'data 6',
    },
  ];

  return (
    <>
      <PageHeader title="Data Table" />

      <DataTable columns={columns} data={data} />
    </>
  );
};
