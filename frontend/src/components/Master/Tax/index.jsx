import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import TaxTablediv from './TaxTable'
import TaxModel from './TaxModel'
import { downloadCSV } from '../DownloadTable';
const Tax = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [filtervalue,setFilterValue]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/mastertaxroute?tax=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/mastertaxroute`)
            setData(data.data)
        }
      }
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("tax",data)
 const filterarr =data.length>0?data.filter((item) => {
  const tax = typeof item.tax === "string" ? item.tax.toLowerCase() : "";
  const description = typeof item.description === "string" ? item.description.toLowerCase() : "";
  return tax.includes(filtervalue.toLowerCase()) || description.includes(filtervalue.toLowerCase())
}):[]
  return (
    <div style={{marginTop:"5px"}}>
      
      <Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Tax Details"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
            <TaxModel name="Add new Tax" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Tax Details"/>
           </Flex>
        </Flex>
        </Box>
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}    borderRadius='20px'>
        
       
      <TaxTablediv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default Tax
