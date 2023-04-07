import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import axios from 'axios'
import PageTitle from '../../Title'
import {Link} from "react-router-dom"
import BatchTableDiv from './Table'

const Batch = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masterbatch?batchname=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masterbatch`)
            setData(data.data)
        }
      }
      console.log(value)
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("batch",data)
  return (
    <div style={{marginTop:"5px"}}>
      <PageTitle title="Batch Details"/>
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} borderRadius="20px" padding="20px">
        <Box>
        <Flex justifyContent={"space-between"} width="95%" marginTop="5px">
            <Input width="30%" placeholder={"Search"} onChange={(e)=>setValue(e.target.value)}></Input>
            {/* <Button backgroundColor={"#be1e2d"} color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                <Text fontSize={"18px"}>Add new node</Text>
            </Button> */}
          <Link to={'/master/batch/addbatch'}><Button  backgroundColor="#be1e2d" color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Add New Batch</Button></Link>
        </Flex>
        </Box>
      <BatchTableDiv handleData={handleData} value={value} data={data}/>
      {/* <Tablediv handleData={handleData} value={value} data={data}/> */}
      </Box>
    </div>
  )
}

export default Batch