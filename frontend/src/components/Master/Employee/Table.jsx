import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Icon,
    Flex,
    Text
  } from '@chakra-ui/react'
  import {useEffect} from "react"
  import axios from "axios"
import { MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import {BsCurrencyRupee} from "react-icons/bs"
import EmployeePatchModel from './EmployeePatchModel'

const EmployeeTableDiv = ({mode,remark,data,handleData,value}) => {
    const handleDelete=async(id)=>{
        
        const data=await axios.delete(`http://localhost:8080/masteremployee/delete/${id}`)
        console.log(data)
        handleData()
    }
    const hover={
        transform:"scale(1.1)",
        transition:"0.5s"
      }
    console.log(data)
    useEffect(()=>{
     handleData()
    },[value])
  return (
    <div style={{marginTop:"50px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px"}}>
      <TableContainer>
  <Table variant='striped' colorScheme='blackAlpha'size="md">
    <Thead>
      <Tr>
        <Th>Employee Code</Th>
        <Th> Employee Name</Th>
        <Th>State</Th>
        <Th>Mobile No</Th>
        <Th>Email-ID</Th>
        <Th>Department</Th>
        <Th>Designation</Th>
        <Th>Joining Date</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
        {data?data.map((el)=><Tr key={el._id}>
            <Td>{el.employeecode}</Td>
            <Td>
            <Flex>
            <Text>{el.employeename}</Text>
            </Flex>
            </Td>
            <Td>{el.statename}</Td>
            <Td>{el.mobileno}</Td>
            <Td>{el.email}</Td>
            <Td>{el.department}</Td>
            <Td>{el.designation}</Td>
            <Td>{el.dateofjoining}</Td>
          
            <Td>
             <Flex gap="20px">
                <EmployeePatchModel name={<Icon as={FaEdit}  color="#3182ce" fontSize="30px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}></Icon>} bgcolor={"white"} hover={hover} id={el._id} countryname={el.countryname} statename={el.statename} cityname={el.cityname} fee={el.fee}  handleData={handleData}/>
                <Icon as={MdDelete}  color="red" fontSize="30px" _hover={{transform:"scale(1.1)",transition:"0.5s"}} border="none" onClick={()=>handleDelete(el._id)}></Icon>
                </Flex>
                </Td>
            </Tr>):""}
    </Tbody>
    <Tfoot>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default EmployeeTableDiv
