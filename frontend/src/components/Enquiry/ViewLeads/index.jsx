import React, { useEffect } from 'react'
import PageTitle from '../../Title'
import ViewTableDiv from './ViewLeadsTable'
import {Box,FLex} from "@chakra-ui/react"
import {useState} from "react"
import axios from "axios"
const ViewLeads = () => {
  const [data,setData]=useState("")
  const handleData=async()=>{
    const res=await axios.get("http://localhost:8080/enquiryleads")
    const data=await res.data
    setData(data)
  }
  useEffect(()=>{
    handleData()
  },[])
  return (
    <div style={{marginTop:"20px"}}>
      <PageTitle title="View Leads"/>
      <Box textAlign={"start"} width="95%" margin="auto"  fontFamily={"sans-serif"}  boxShadow="xl" padding="20px">
      <ViewTableDiv data={data} handleData={handleData}/>
      </Box>
      
    </div>
  )
}

export default ViewLeads
