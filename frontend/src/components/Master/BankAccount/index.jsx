import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import BankModel from './BankModel'
import BankTableDiv from './Table'

const Bank = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masterbank?bankname=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masterbank`)
            setData(data.data)
        }
      }
      console.log(value)
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("bank",data)
  return (
    <div style={{marginTop:"5px"}}>
      <PageTitle title="Bank Account Creation Details"/>
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}   padding="20px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} borderRadius="20px">
        <Box>
        <Flex justifyContent={"space-between"} width="95%" marginTop="5px">
            <Input width="30%" placeholder={"Search"} onChange={(e)=>setValue(e.target.value)}></Input>
            {/* <Button backgroundColor={"#be1e2d"} color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                <Text fontSize={"18px"}>Add new node</Text>
            </Button> */}
            <BankModel name="Add new account"  handleData={handleData}/>
        </Flex>
        </Box>
      <BankTableDiv handleData={handleData} value={value} data={data}/>
      {/* <Tablediv handleData={handleData} value={value} data={data}/> */}
      </Box>
    </div>
  )
}

export default Bank
