import React, {  useState } from 'react'
import {Box,Button,Flex,Input} from "@chakra-ui/react"
import axios from 'axios'
import PageTitle from '../../Title'
import CityModal from './CityModel'
import CityTablediv from './Table'
import { downloadCSV } from '../DownloadTable'
const City = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
const [filtervalue,setFilterValue]=useState("")
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
 
      console.log("city",data)
      const filterarr =data.length>0?data.filter((item) => {
       const countryname = typeof item.countryname === "string" ? item.countryname.toLowerCase() : "";
       const statename = typeof item.statename === "string" ? item.statename.toLowerCase() : "";
       const cityname = typeof item.cityname === "string" ? item.cityname.toLowerCase() : "";
       return countryname.includes(filtervalue.toLowerCase())|| statename.includes(filtervalue.toLowerCase())|| cityname.includes(filtervalue.toLowerCase())
     }):[]
  return (
    <div style={{marginTop:"5px"}}>
      <Box>
        <Flex justifyContent={"space-between"} width="98%" marginTop="5px">
        <Box><PageTitle title="City Details"/></Box>
            <Input mt="10px" width="30%" border="2px solid gray" placeholder={"Search"} onChange={(e)=>setFilterValue(e.target.value)} value={filtervalue}></Input>
           <Flex  justifyContent={"end"} gap="10px">
         <Box>  <Button  onClick={()=>downloadCSV(data)} mt="10px" fontSize="15px" bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button></Box>
            <CityModal name="Add New City" bgcolor={"#c63a47"} handleData={handleData} headername="City Details"/>
           </Flex>
        </Flex>
        </Box> 
      <Box textAlign={"start"} width="98%" margin="auto"  fontFamily={"sans-serif"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}  borderRadius='20px'>
        
      <CityTablediv handleData={handleData} value={value} data={filterarr}/>
      </Box>
    </div>
  )
}

export default City
