import React, { useState } from 'react'
import {Icon,Flex, Button, Heading} from '@chakra-ui/react'
import DataTable from "react-data-table-component";
  import {useEffect} from "react"
  import axios from "axios"
import { MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import CounsellorPatchModel from './CounsellorPatchModel';

const ShowCounsellorTable = () => {
  const [data,setData]=useState("")
    //const auth=useSelector((store)=>store.authReducer)
    const handleData=async()=>{
            const res=await axios.get(`http://localhost:8080/counsellor`)
            const data=await res.data
            setData(data)        
      }
    
    const hover={
        transform:"scale(1.1)",
        transition:"0.5s"
      }
    console.log(data)
    useEffect(()=>{
     handleData()
    },[])

console.log("counsellor",data)

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

    const columns = [
      { name: "Counsellor Name" ,selector: (row) => row.name, sortable: true,},
      { name: "Email", selector: (row) => row.email, sortable: true },
      { name: "Phone", selector: (row) => row.phone, sortable: true },
     
      {
        name: "Action",
        selector: (row) => (      
              <p>
                <Flex gap='20px'>
              <CounsellorPatchModel name={<Icon as={FaEdit}  color="#3182ce" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}></Icon>} bgcolor={"white"} hover={hover} id={row._id} counsellorname={row.name} email={row.email} phone={row.phone}  handleData={handleData}/>
              </Flex>
              </p>          
        ),        
      },
    ];
  return (
    <div style={{marginTop:"50px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px"}}>
      {/* <Heading>Counsellor Table</Heading> */}
     
<DataTable
                columns={columns}
                pagination
                highlightOnHover
                data={data}
                subHeader
                persistTableHead
                fixedHeader
                fixedHeaderScrollHeight="500px"
                customStyles={customStyles}
                
                      />
    </div>
  )
}

export default ShowCounsellorTable
