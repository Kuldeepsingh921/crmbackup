import React, { useState } from 'react'
import {Icon,Flex, Button} from '@chakra-ui/react'
import DataTable from "react-data-table-component";
  import {useEffect} from "react"
  import axios from "axios"
import { MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import * as XLSX from 'xlsx';
const ShowAdminTable = ({value}) => {
  const [header, setHeader] = useState([]);
  const [data, setData] = useState([]);


  const handleChange=async(e)=>{
    const formdata=new FormData()
    formdata.append("file",e.target.files[0])
    console.log(e.target.files[0])
    const res=await axios.post(`http://localhost:8080/excelleads/upload`,formdata)
    const data=await res.data
    console.log(data)
  }

  const handleFileUpload = (event) => {
    handleChange(event)
    console.log(event)
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Extract the header row
      const header = XLSX.utils.sheet_to_json(worksheet, { header: 1,range:0})[0];

      // Extract the data rows
      const exceldata = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 2 });

      setHeader(header);
      setData(exceldata);
    };
    reader.readAsBinaryString(file);
  };
    
    const customStyles = {
      rows: {
          style: {
              minHeight: '72px', // override the row height
          },
      },
      headCells: {
          style: {
             fontWeight:"bold",
             fontSize:"14px"
          },
      },
  };


  const arr = header.map((columnName, index) => ({
    name: columnName,
    selector: (row) => row[index],
    sortable: true,
  }));

       
  return (
    <div style={{marginTop:"50px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px"}}>
      <input type="file" onChange={handleFileUpload} />
<DataTable
                columns={arr}
                pagination
                highlightOnHover
                data={data}
                subHeader
                persistTableHead
                fixedHeader
                fixedHeaderScrollHeight="400px"
                customStyles={customStyles}
                
                      />
    </div>
  )
}

export default ShowAdminTable