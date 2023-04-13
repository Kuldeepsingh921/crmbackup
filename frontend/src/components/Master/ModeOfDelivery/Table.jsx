import React from 'react'
import {Icon,Flex} from '@chakra-ui/react'
  import {useEffect} from "react"
  import axios from "axios"
import { MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import PatchModel from './PatchModel'
import DataTable from 'react-data-table-component'
const Tablediv = ({mode,remark,data,handleData,value}) => {
    const handleDelete=async(id)=>{
        
        const data=await axios.delete(`http://localhost:8080/modeofdelivery/delete/${id}`)
        console.log(data)
        handleData()
    }
    // const handleChange=async()=>{
    //     const send={
    //         mode:mode,
    //         remark:remark
    //     }
    //     console.log(send)
    //     // const data=await axios.patch("http://localhost:8080/modeofdelivery/delete/${id}")
    // }
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
      { name: "Mode" ,selector: (row) => row.mode, sortable: true,},
      { name: "Remark" ,selector: (row) => row.remark, sortable: true,},
      
      {
        name: "Action",
        selector: (row) => (
      
              <p>
                <Flex gap='20px'>
              <PatchModel name={<Icon as={FaEdit}  color="#3182ce" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}></Icon>} bgcolor={"white"} hover={hover} id={row._id} patchmode={row.mode} patchremark={row.remark}  handleData={handleData}/>
              <Icon as={MdDelete}  color="red" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}} border="none" onClick={()=>handleDelete(row._id)}></Icon>
              </Flex>
              </p>          
        ),        
      },
    ];
  return (
    <div style={{marginTop:"15px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"20px",padding:"10px"}}>
      
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

export default Tablediv
