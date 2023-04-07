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
    Flex
  } from '@chakra-ui/react'
  import {useState,useEffect} from "react"
  import axios from "axios"
import {AiFillEdit} from "react-icons/ai"
import {MdAddModerator, MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import AddModal from './Modal'
import PatchModel from './PatchModel'
const Tablediv = ({mode,remark,data,handleData,value}) => {
    const handleDelete=async(id)=>{
        
        const data=await axios.delete(`http://localhost:8080/modeofdelivery/delete/${id}`)
        console.log(data)
        handleData()
    }
    // const handleChange=async()=>{
    //     const send={
    //         mode:mode,
    //         remark:remark
    //     }
    //     console.log(send)
    //     // const data=await axios.patch("http://localhost:8080/modeofdelivery/delete/${id}")
    // }
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
        <Th>Mode</Th>
        <Th>Remark</Th>
        <Th>
           Action
        </Th>
      </Tr>
    </Thead>
    <Tbody>
        {data?data.map((el)=><Tr key={el._id}>
            <Td>{el.mode}</Td>
            <Td>{el.remark}</Td>
            <Td>
             <Flex gap="20px">
                <PatchModel name={<Icon as={FaEdit}  color="#3182ce" fontSize="30px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}></Icon>} bgcolor={"white"} hover={hover} id={el._id} patchcountryname={el.countryname} handleData={handleData}/>
                
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

export default Tablediv
