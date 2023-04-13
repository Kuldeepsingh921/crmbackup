import React from 'react'
import {Icon,Flex, Button, border} from '@chakra-ui/react'
import DataTable from "react-data-table-component";
  import {useEffect} from "react"
  import axios from "axios"
import { MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import OrganisationPatchModal from "./organisationPatchModal"

const OrganisationTableDiv = ({mode,remark,data,handleData,value}) => {
  
    const handleDelete=async(id)=>{    
        const data=await axios.delete(`http://localhost:8080/masterorganisation/delete/${id}`)
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
      headCells:{
          style: {
             fontWeight:"bold",
             fontSize:"14px"
          },
      },
  };

    const columns = [
      { name: "Organisation Name" ,selector: (row) => row.name, sortable: true},
      { name: "Email-ID" ,selector: (row) => row.email, sortable: true},
      { name: "Mobile No." ,selector: (row) => row.mobileno, sortable: true},
      {
        name: "Action",
        selector: (row) => (
      
              <p>
              <Flex gap='20px'>
              <OrganisationPatchModal name={<Icon as={FaEdit}  color="#3182ce" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}></Icon>} bgcolor={"white"} hover={hover} id={row._id} patchname={row.name} patchaddress={row.address} patchemail={row.email} patchmobileno={row.mobileno} patchphoneno={row.phoneno} patchzipcode={row.zipcode} patchfax={row.fax} patchwebsite={row.website} headername={"Edit Organisation Details"} handleData={handleData}/>
              <Icon as={MdDelete}  color="red" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}} border="none" onClick={()=>handleDelete(row._id)}></Icon>
              </Flex>
              </p >           
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

export default OrganisationTableDiv
