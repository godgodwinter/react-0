import DataTable from "react-data-table-component";
import { useMemo } from "react";

const Export = ({ onExport }) => (
  <button className="btn" onClick={(e) => onExport(e.target.value)}>
    Export
  </button>
);
const doClick = (event) => {
  console.log("clicked" + event.target.id + "clicked" + event.target.value);
};
const columns = [
  {
    name: "#",
    cell: (row, index) => index + 1,
    width: "56px",
  },
  {
    cell: (row, index) => (
      <button className="btn btn-sm" onClick={doClick} id={index} value={index}>
        Action
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    width: "100px",
  },
  {
    cell: () => <button className="btn btn-sm">D</button>,
    width: "56px", // custom width for icon button
    style: {
      borderBottom: "1px solid #FFFFFF",
      marginBottom: "-1px",
    },
  },
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 3,
    title: "Ghostbusters 2",
    year: "1986",
  },
  {
    id: 4,
    title: "Ghostbusters 3",
    year: "1989",
  },
  {
    id: 5,
    title: "Ghostbusters 4",
    year: "1992",
  },
  {
    id: 6,
    title: "Ghostbusters 5",
    year: "1995",
  },
  {
    id: 7,
    title: "Ghostbusters 6",
    year: "1998",
  },
  {
    id: 8,
    title: "Ghostbusters 7",
    year: "2001",
  },
  {
    id: 9,
    title: "Ghostbusters 8",
    year: "2004",
  },
  {
    id: 10,
    title: "Ghostbusters 9",
    year: "2007",
  },
  {
    id: 11,
    title: "Ghostbusters 10",
    year: "2010",
  },
  {
    id: 12,
    title: "Ghostbusters 11",
    year: "2013",
  },
];

const Table = () => {
  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );
  return (
    <>
      <div>
        {" "}
        <DataTable
          columns={columns}
          data={data}
          title="Movie List"
          pagination
          dense
          actions={actionsMemo}
        />
      </div>
    </>
  );
};

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function convertArrayOfObjectsToCSV(array) {
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

export default Table;
