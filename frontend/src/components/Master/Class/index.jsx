import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import ClassModal from './ClassModel'
import CityTablediv from './Table'
import { downloadCSV } from '../DownloadTable'

const Class = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [filtervalue,setFilterValue]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masterclass?location=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masterclass`)
            setData(data.data)
        }
      }
      console.log(value)
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("class-28",data)
 const filterarr =data.length>0?data.filter((item) => {
  const location = typeof item.location === "string" ? item.location.toLowerCase() : "";
  const noofseats = typeof item.noofseats === "string" ? item.noofseats.toLowerCase() : "";
  const classroom = typeof item.classroom === "string" ? item.classroom.toLowerCase() : "";
  return location.includes(filtervalue.toLowerCase())|| noofseats.includes(filtervalue.toLowerCase())|| classroom.includes(filtervalue.toLowerCase())
}):[]
  return (
    <div style={{marginTop:"5px"}}>
<Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Class Details"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
            <ClassModal name="Add New Class" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Class Details"/>
           </Flex>
        </Flex>
        </Box>      
        <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} borderRadius="20px">
       
      <CityTablediv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default Class
