import './styles/table.css';

export const DataTable = ({ columns = [], data = [] }) => {
  return (
    <>
      <div className="datatable-table">
        <div className="datatable-table-content">
          <table>
            <thead>
              <tr>
                <th>No</th>
                {columns.map((colum, index) => (
                  <th key={index}>{colum.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.data1}</td>
                  <td>{row.data2}</td>
                  <td>{row.data3}</td>
                  <td>{row.data4}</td>
                  <td>{row.data5}</td>
                  <td>{row.data6}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
