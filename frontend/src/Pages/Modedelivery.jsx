import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import Modal from '../components/Master/ModeOfDelivery/Modal'
import Tablediv from '../components/Master/ModeOfDelivery/Table'
import axios from 'axios'
import PageTitle from '../components/Title'
const Modedelivery = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
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
 
  return (
    <div style={{marginTop:"20px"}}>
      <PageTitle title="Mode Details"/>
      <Box textAlign={"start"} width="90%" margin="auto"  fontFamily={"sans-serif"}  boxShadow="xl" padding="20px">
        <Box>
        <Flex justifyContent={"space-between"} width="95%" marginTop="20px">
            <Input width="30%" placeholder={"Search"} onChange={(e)=>setValue(e.target.value)}></Input>
            {/* <Button backgroundColor={"#be1e2d"} color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                <Text fontSize={"18px"}>Add new node</Text>
            </Button> */}
            <Modal name="Add New Mode"  bgcolor={"#c63a47"} hover={hover} handleData={handleData}/>
        </Flex>
        </Box>
       
      <Tablediv handleData={handleData} value={value} data={data}/>
      </Box>
    </div>
  )
}

export default Modedelivery
