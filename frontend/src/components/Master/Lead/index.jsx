import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import LeadStatusModal from './LeadStatusModal'
import LeadStatusPatchModal from './LeadStatusPatchModal'
import { downloadCSV } from '../DownloadTable';
import LeadStatusTableDiv from './LeadStatusTable'
const LeadStatus = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [filtervalue,setFilterValue]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/leadsstatus?status=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/leadsstatus`)
            setData(data.data)
        }
      }
      console.log("data",data)
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }

 console.log("leads",data)
 const filterarr =data.length>0?data.filter((item) => {
  const status = typeof item.status === "string" ? item.status.toLowerCase() : "";
  const desc = typeof item.desc === "string" ? item.desc.toLowerCase() : "";
  return status.includes(filtervalue.toLowerCase()) || desc.includes(filtervalue.toLowerCase())
}):[]
  return (
    <div style={{marginTop:"5px"}}>
      <Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Leads Status"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
            <LeadStatusModal name="Add New Lead" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Leads Details"/>
           </Flex>
        </Flex>
        </Box>
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  borderRadius='20px'>
  
      <LeadStatusTableDiv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default LeadStatus
