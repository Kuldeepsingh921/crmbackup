import React, { useState } from 'react'
import {Icon,Flex, Button} from '@chakra-ui/react'
import DataTable from "react-data-table-component";
  import {useEffect} from "react"
  import axios from "axios"
import { MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import TaxpatchModel from "./TaxpatchModel"
const TaxTableDiv = ({mode,remark,data,handleData,value}) => {
    const handleDelete=async(id)=>{    
        const data=await axios.delete(`http://localhost:8080/mastertaxroute/delete/${id}`)
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
      columns: {
        style: {
            minWidth: '55px', // override the row height
        },
    },
      headCells: {
          style: {
             fontWeight:"bold",
             fontSize:"14px",
             //backgroundColor: '#ABDCFB',
             height:"40px",
            //  borderBottom: '1px solid #ddd',
            //  color: '#333',
            //  padding: '10px',
          },
      },
      cells: {
        style: {
           //width:"50px",
           minWidth:"100px"
        },
    },
  };

    const columns = [
     
    { name: "Tax" ,selector: (row) => row.tax, sortable: true,
    },
      { name: "Tax Description" ,selector: (row) => row.description, sortable: true,},
      {
        name: "Action",
        selector: (row) => (
      
              <p>
                <Flex gap='20px'>
              <TaxpatchModel name={<Icon as={FaEdit}  color="#3182ce" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}></Icon>} bgcolor={"white"} hover={hover} id={row._id} patchdescription={row.description} patchtax={row.tax}   handleData={handleData}/>
              <Icon as={MdDelete}  color="red" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}} border="none" onClick={()=>handleDelete(row._id)}></Icon>
              </Flex>
              </p>          
        ),        
      },
    ];
  return (
    <div style={{marginTop:"15px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px",borderRadius:"20px"}} >
   
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

export default TaxTableDiv
