import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import OrganisationModal from './oraganisationModal'
import OrganisationTablediv from './oragnisationTable'
import { downloadCSV } from '../DownloadTable';

const Organisation = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [filtervalue,setFilterValue]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masterorganisation?name=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masterorganisation`)
            setData(data.data)
        }
      }
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("organisation",data)
 const filterarr =data.length>0?data.filter((item) => {
  const name = typeof item.name === "string" ? item.name.toLowerCase() : "";
  const email = typeof item.email === "string" ? item.email.toLowerCase() : "";
  const mobileno = typeof item.mobileno === "string" ? item.mobileno.toLowerCase() : "";
  return name.includes(filtervalue.toLowerCase()) || email.includes(filtervalue.toLowerCase())|| mobileno.includes(filtervalue.toLowerCase())
}):[]
  return (
    <div style={{marginTop:"5px"}}>
     <Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="Organisation Details"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
            <OrganisationModal name="Add New Oganisation" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Organisation Details"/>
           </Flex>
        </Flex>
        </Box>
       <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"} borderRadius='20px'>
      <OrganisationTablediv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default Organisation
