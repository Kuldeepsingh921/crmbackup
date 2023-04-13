import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,useDisclosure,Text,Input,Select
  } from '@chakra-ui/react'
  import axios from "axios"
import {useState,useEffect} from "react"
export default function DesignationModal({name,bgcolor,hover,handleData,headername}) {
  const [departmentarr,setDepartmentarr]=useState("")
  const handleDepartment=async()=>{
    const res=await axios.get("http://localhost:8080/masterdepartment")
    const data=await res.data
    console.log(data)
    setDepartmentarr(data)
  }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [departmentname,setDepartmentName]=useState("")
    const [designationname,setDesignationName]=useState("")
    const handleClick=async()=>{
      const send={
        departmentname:departmentname,
        designationname:designationname
      }
     console.log(send)
      const res=await axios.post("http://localhost:8080/masterdesignation/adddesignation",send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    useEffect(()=>{
      handleDepartment()
  },[])
    return (
      <>
        <Button backgroundColor="blue.600" color="white" _hover={{bgColor:"blue.500"}} mt="10px">
                <Text fontSize={"15px"} onClick={onOpen}>{name}</Text>
            </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{headername}</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Department Name</label>
                <Select onChange={(e)=>setDepartmentName(e.target.value)}>
                   <option value="">Select Department</option>
                   {departmentarr?departmentarr.map((el)=><option value={el.departmentname}>{el.departmentname}</option>):null}
                </Select>
            <label htmlFor="">Designation Name</label>
             <Input placeholder="Designation Name" onChange={(e)=>setDesignationName(e.target.value)}></Input>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>handleClick()} _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                Add
              </Button>
              <Button variant='ghost' onClick={onClose} color="white" backgroundColor={"red"} _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Discard</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }