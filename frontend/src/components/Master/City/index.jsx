import React, {  useState } from 'react'
import {Box,Flex,Input} from "@chakra-ui/react"
import axios from 'axios'
import PageTitle from '../../Title'
import CityModal from './CityModel'
import CityTablediv from './Table'
const City = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")

    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/mastercity?countryname=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/mastercity`)
            setData(data.data)
        }
      }
      console.log(value)
 
 console.log("City",data)
  return (
    <div style={{marginTop:"5px"}}>
      <PageTitle title="City Details"/>
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} padding="20px" borderRadius='20px'>
        <Box>
        <Flex justifyContent={"space-between"} width="95%" marginTop="5px">
            <Input width="30%" placeholder={"Search"} onChange={(e)=>setValue(e.target.value)}></Input>
           
            <CityModal name="Add new city"  handleData={handleData}/>
        </Flex>
        </Box>
      <CityTablediv handleData={handleData} value={value} data={data}/>
      </Box>
    </div>
  )
}

export default City
