import React from 'react'
import {Icon,Flex, Button} from '@chakra-ui/react'
import DataTable from "react-data-table-component";
  import {useEffect} from "react"
  import axios from "axios"
import { MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import BatchPatchModel from './BatchPatchModel'
const BatchTableDiv = ({mode,remark,data,handleData,value}) => {
    const handleDelete=async(id)=>{
        
        const data=await axios.delete(`http://localhost:8080/masterbatch/delete/${id}`)
        console.log(data)
        handleData()
    }
    const hover={
        transform:"scale(1.1)",
        transition:"0.5s"
      }
    console.log(data)
    useEffect(()=>{
     handleData()
    },[value])

    

    const customStyles = {
      rows: {
          style: {
              minHeight: '25px', // override the row height
          },
      },
      headCells: {
          style: {
             fontWeight:"bold",
             fontSize:"14px"
          },
      },
  };

    const columns = [
      { name: "Batch Code" ,selector: (row) => row.batchcode, sortable: true,},
      { name: "Batch Name", selector: (row) => row.batchname, sortable: true },
      { name: "Start Date", selector: (row) => row.startdate, sortable: true },
      { name: "Completion", selector: (row) => row.completiondate, sortable: true },
      { name: "Class Room", selector: (row) => row.classroom, sortable: true },
      { name: "Status", selector: (row) => row.batchstatus, sortable: true },
      {
        name: "Action",
        selector: (row) => (
      
              <p>
                <Flex gap='20px'>
              <BatchPatchModel name={<Icon as={FaEdit}  color="#3182ce" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}></Icon>} bgcolor={"white"} hover={hover} id={row._id} batchname={row.batchname} batchcode={row.batchcode} startdate={row.startdate} completiondate={row.completiondate} classroom={row.classroom} batchstatus={row.batchstatus} handleData={handleData}/>
              <Icon as={MdDelete}  color="red" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}} border="none" onClick={()=>handleDelete(row._id)}></Icon>
              </Flex>
              </p >          
        ),        
      },
    ];
  return (
    <div style={{marginTop:"15px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px",borderRadius:"20px"}}>
       
<DataTable
                columns={columns}
                pagination
                highlightOnHover
                data={data}
                //subHeader
                persistTableHead
                fixedHeader
                fixedHeaderScrollHeight="400px"
                customStyles={customStyles}
                      />
    </div>
  )
}

export default BatchTableDiv
