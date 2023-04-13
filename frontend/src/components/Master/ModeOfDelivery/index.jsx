import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import Modal from './Modal'
import Tablediv from './Table'
import axios from 'axios'
import PageTitle from '../../Title'
import { downloadCSV } from '../DownloadTable'
const Modedelivery = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [filtervalue,setFilterValue]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/modeofdelivery?mode=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/modeofdelivery`)
            setData(data.data)
        }
      }
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("mode",data)
 const filterarr =data.length>0?data.filter((item) => {
  const mode = typeof item.mode === "string" ? item.mode.toLowerCase() : "";
  const remark = typeof item.remark === "string" ? item.remark.toLowerCase() : "";
  return mode.includes(filtervalue.toLowerCase()) || remark.includes(filtervalue.toLowerCase())
}):[]
  return (
    <div style={{marginTop:"5px"}}>
      <Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Mode Of Delivery"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
            <Modal name="Add New Mode" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Delivery Details"/>
           </Flex>
        </Flex>
        </Box>
      <Box  textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  borderRadius='20px' >
       
      <Tablediv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default Modedelivery
