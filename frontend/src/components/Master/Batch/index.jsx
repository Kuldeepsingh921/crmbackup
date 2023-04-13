import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import axios from 'axios'
import PageTitle from '../../Title'
import {Link} from "react-router-dom"
import BatchTableDiv from './Table'
import { downloadCSV } from '../DownloadTable'

const Batch = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [filtervalue,setFilterValue]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masterbatch?batchname=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masterbatch`)
            setData(data.data)
        }
      }
      console.log(value)
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("batch-27",data)
 const filterarr =data.length>0?data.filter((item) => {
  const batchcode = typeof item.batchcode === "string" ? item.batchcode.toLowerCase() : "";
  const batchname = typeof item.batchname === "string" ? item.batchname.toLowerCase() : "";
  const startdate = typeof item.startdate === "string" ? item.startdate.toLowerCase() : "";
  const completiondate = typeof item.completiondate === "string" ? item.completiondate.toLowerCase() : "";
  const classroom = typeof item.classroom === "string" ? item.classroom.toLowerCase() : "";
  const batchstatus = typeof item.batchstatus === "string" ? item.batchstatus.toLowerCase() : "";
  return batchcode.includes(filtervalue.toLowerCase())|| batchname.includes(filtervalue.toLowerCase())|| startdate.includes(filtervalue.toLowerCase())|| completiondate.includes(filtervalue.toLowerCase())|| classroom.includes(filtervalue.toLowerCase())|| batchstatus.includes(filtervalue.toLowerCase())
}):[]
  return (
    <div style={{marginTop:"5px"}}>
      <Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Batch Details"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
         <Link to={'/superadmindashboard/master/batch/addbatch'}><Button fontSize="15px"  backgroundColor="blue.600" color="white" _hover={{bgColor:"blue.500"}} mt="10px">Add New Batch</Button></Link>
           </Flex>
        </Flex>
        </Box> 
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} borderRadius="20px">
        
      <BatchTableDiv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default Batch