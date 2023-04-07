import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import Modal from '../components/Modal'
import Tablediv from '../components/Table'
import axios from 'axios'
import PageTitle from '../components/Title'
import SourceModal from '../components/Master/Source/SourceModal'
import SourceTablediv from '../components/Master/Source/SourceTable'
const Source = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/mastersource?sourcename=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/mastersource`)
            setData(data.data)
        }
      }
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 
  return (
    <div style={{marginTop:"20px"}}>
      <PageTitle title="Source Details"/>
      <Box textAlign={"start"} width="90%" margin="auto"  fontFamily={"sans-serif"}  boxShadow="xl" padding="20px">
        <Box>
        <Flex justifyContent={"space-between"} width="95%" marginTop="20px">
            <Input width="30%" placeholder={"Search"} onChange={(e)=>setValue(e.target.value)}></Input>
            <SourceModal name="Add new Source" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="Source Details"/>
        </Flex>
        </Box>
       
      <SourceTablediv handleData={handleData} value={value} data={data}/>
      </Box>
    </div>
  )
}

export default Source
