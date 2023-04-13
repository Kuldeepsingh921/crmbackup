import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import DepartmentModal from './departmentModal'
import DepartmentTablediv from './departmentTable'
import { downloadCSV } from '../DownloadTable'
const Department = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [filtervalue,setFilterValue]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masterDepartment?departmentname=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masterDepartment`)
            setData(data.data)
        }
      }
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("department-26",data)
 const filterarr =data.length>0?data.filter((item) => {
  const departmentname = typeof item.departmentname === "string" ? item.departmentname.toLowerCase() : "";
  return departmentname.includes(filtervalue.toLowerCase())
}):[]
  return (
    <div style={{marginTop:"5px"}}>
      <Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Department Details"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
            <DepartmentModal name="Add New Department" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Department Details"/>
           </Flex>
        </Flex>
        </Box>
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}  borderRadius='20px'>
       
      <DepartmentTablediv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default Department
