import React, { useState } from 'react'
import {Icon,Flex, Button, Heading, Input, Box} from '@chakra-ui/react'
import DataTable from "react-data-table-component";
  import {useEffect} from "react"
  import axios from "axios"
  import {Link} from "react-router-dom"
import {FaEdit} from "react-icons/fa"
import CounsellorPatchModel from './CounsellorPatchModel';
import PageTitle from '../components/Title';
import { downloadCSV } from '../components/Master/DownloadTable';

const ShowCounsellorTable = () => {
  const [data,setData]=useState("")
  const [filtervalue,setFilterValue]=useState("")
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

 const filterarr =data.length>0?data.filter((item) => {
  const name = typeof item.name === "string" ? item.name.toLowerCase() : "";
  const email = typeof item.email === "string" ? item.email.toLowerCase() : "";
  const phone = typeof item.phone === "string" ? item.phone.toLowerCase() : "";
  return name.includes(filtervalue.toLowerCase()) || email.includes(filtervalue.toLowerCase())||phone.includes(filtervalue.toLowerCase())
}):[]
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
    <div>
      <Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Counsellors"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
           <Link to="/superadmindashboard/createcounsellor"><Button backgroundColor="blue.600" color="white" _hover={{bgColor:"blue.500"}} mt="10px">Add Counsellor</Button></Link> 
           </Flex>
        </Flex>
        </Box>
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px",width:"98%",margin:"auto", borderRadius:"20px",marginTop:"10px"}}>
     
<DataTable
                columns={columns}
                pagination
                highlightOnHover
                data={filterarr}
                //subHeader
                persistTableHead
                fixedHeader
                fixedHeaderScrollHeight="500px"
                customStyles={customStyles}
                
                      />
    </div>
    </div>
  )
}

export default ShowCounsellorTable
