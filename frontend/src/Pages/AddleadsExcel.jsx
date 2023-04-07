import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function AddleadsExcel() {
  const [header, setHeader] = useState([]);
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Extract the header row
      const header = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 1 })[0];

      // Extract the data rows
      const exceldata = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 2 });

      setHeader(header);
      setData(exceldata);
    };
    reader.readAsBinaryString(file);
  };

  console.log(header)
  console.log(data)

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <h2>Header:</h2>
      <ul>
        {header.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Data:</h2>
      <table>
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {header.map((item, index) => (
                <td key={index}>{row[item]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddleadsExcel
