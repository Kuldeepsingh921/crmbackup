import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import QualificationModal from './qualificationModal'
import QualificationTablediv from './qualificationTable'
import { downloadCSV } from '../DownloadTable'
const Qualification = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [filtervalue,setFilterValue]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masterqualification?code=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masterqualification`)
            setData(data.data)
        }
      }
      console.log(data)
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("qualification",data)
 
 const filterarr =data.length>0?data.filter((item) => {
  const code = typeof item.code === "string" ? item.code.toLowerCase() : "";
  const name = typeof item.name === "string" ? item.name.toLowerCase() : "";
  
  return code.includes(filtervalue.toLowerCase()) || name.includes(filtervalue.toLowerCase())
}):[]
  return (
    <div style={{marginTop:"5px"}}>
<Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Qualification Details"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
            <QualificationModal name="Add New Qualification" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Qualification Details"/>
           </Flex>
        </Flex>
        </Box> 
     <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}  borderRadius='20px'>
        
      <QualificationTablediv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default Qualification
