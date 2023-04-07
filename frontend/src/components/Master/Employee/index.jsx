import React, { useEffect, useState } from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios'
import PageTitle from '../../Title'
import EmployeeTableDiv from './Table'
import EmployeeModal from './EmployeeModel'
import { AddEmployee } from './AddEmployee'
import {Link} from "react-router-dom"

const Employee = () => {
  const [value,setValue]=useState("")
   const [data,setData]=useState("")
    const handleData=async()=>{
        if(value){
            const data=await axios.get(`http://localhost:8080/masteremployee?employeename=${value}`)
            setData(data.data)
        }
        else{
            const data=await axios.get(`http://localhost:8080/masteremployee`)
            setData(data.data)
        }
      }
      console.log(value)
 const hover={
   transform:"scale(1.1)",
   transition:"0.5s"
 }
 console.log("employee",data)
  return (
    <div style={{marginTop:"20px"}}>
      <PageTitle title="Employee Details"/>
      <Box textAlign={"start"} width="90%" margin="auto"  fontFamily={"sans-serif"}  boxShadow="xl" padding="20px">
        <Box>
        <Flex justifyContent={"space-between"} width="95%" marginTop="20px">
            <Input width="30%" placeholder={"Search"} onChange={(e)=>setValue(e.target.value)}></Input>
            {/* <Button backgroundColor={"#be1e2d"} color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                <Text fontSize={"18px"}>Add new node</Text>
            </Button> */}
          <Link to={'/master/employee/addemployee'}><Button  backgroundColor="#be1e2d" color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Add New Employee</Button></Link>
        </Flex>
        </Box>
      <EmployeeTableDiv handleData={handleData} value={value} data={data}/>
      {/* <Tablediv handleData={handleData} value={value} data={data}/> */}
      </Box>
    </div>
  )
}

export default Employee




// [
//   {
//     "_id": "64227fef5962352974f585ba",
//     "employeecode": "01",
//     "employeename": "Dheeraj",
//     "dob": "21 Dec 2000",
//     "dateofjoining": "12 April 2022",
//     "gender": "Male",
//     "mobileno": "7489983923",
//     "phone": "798903032",
//     "email": "abc@gamil.com",
//     "department": "Software Development",
//     "countryname": "India",
//     "statename": "Punjab",
//     "cityname": "Amritsar",
//     "maritalstatus": "unmarried"
//   },
//   {
//     "_id": "642280b95962352974f585bf",
//     "employeecode": "02",
//     "employeename": "Chunnu",
//     "dob": "34 Dec 2000",
//     "dateofjoining": "16 May 2022",
//     "gender": "Male",
//     "mobileno": "555656",
//     "phone": "989889897",
//     "email": "xyz@gamil.com",
//     "department": "Web Development",
//     "countryname": "India",
//     "statename": "Bihar",
//     "cityname": "Chhapra",
//     "maritalstatus": "unmarried"
//   }
// ]