import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import StateModal from './stateModal'
import StateTablediv from './stateTable'
const State = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
   const [page,setPage]=useState(1)
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masterstate?state=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masterstate`)
            setData(data.data)
        }
      }
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 
  return (
    <div style={{marginTop:"5px"}}>
      <PageTitle title="State Details"/>
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} padding="20px" borderRadius='20px'>
        <Box>
        <Flex justifyContent={"space-between"} width="95%" marginTop="5px">
            <Input width="30%" placeholder={"Search"} onChange={(e)=>setValue(e.target.value)}></Input>
            <StateModal name="Add new State" bgcolor={"#c63a47"} hover={hover} handleData={handleData} headername="State Details"/>
        </Flex>
        </Box>

      <StateTablediv handleData={handleData} value={value} data={data}/>
      
      </Box>
    </div>
  )
}

export default State
