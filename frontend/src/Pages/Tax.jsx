import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import Modal from '../components/Modal'
import Tablediv from '../components/Table'
import axios from 'axios'
import PageTitle from '../components/Title'
import TaxTablediv from '../components/Master/Tax/TaxTable'
import TaxModel from '../components/Master/Tax/TaxModel'
const Tax = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
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
 
  return (
    <div style={{marginTop:"20px"}}>
      <PageTitle title="Tax Details"/>
      <Box textAlign={"start"} width="90%" margin="auto"  fontFamily={"sans-serif"}  boxShadow="xl" padding="20px">
        <Box>
        <Flex justifyContent={"space-between"} width="95%" marginTop="20px">
            <Input width="30%" placeholder={"Search"} onChange={(e)=>setValue(e.target.value)}></Input>
            <TaxModel name="Add new Tax" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Tax Details"/>
        </Flex>
        </Box>
       
      <TaxTablediv handleData={handleData} value={value} data={data}/>
      </Box>
    </div>
  )
}

export default Tax
