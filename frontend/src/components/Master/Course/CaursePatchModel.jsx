import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,useDisclosure,Text,Input
  } from '@chakra-ui/react'
  import axios from "axios"
import {useState} from "react"
export default function CoursePatchModel({name,handleData,patchcoursename,patchduration,patchnoofmodule,patchfee,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [courseName,setCourseName]=useState(patchcoursename)
    const [Duration,setDuration]=useState(patchduration)
    const [noofModule,setNoOfModule]=useState(patchnoofmodule)
    const [Fee,setFee]=useState(patchfee)
    const handleClick=async()=>{
      const send={
        coursename:courseName,
        duration:Duration,
        noofmodule:noofModule,
        fee:Fee
       }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/mastercourse/${id}`,send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    return (
      <>
                <Text fontSize={"18px"} onClick={onOpen}>{name}</Text>
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Mode of Delivery</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Course Name</label>
             <Input placeholder='Course Name' onChange={(e)=>setCourseName(e.target.value)} value={courseName}></Input>
            <label htmlFor="">Course Duration</label>
             <Input placeholder="Course Duration" onChange={(e)=>setDuration(e.target.value)} value={Duration}></Input>
             <label htmlFor="">No Of Module</label>
             <Input placeholder='No Of Modules' onChange={(e)=>setNoOfModule(e.target.value)} value={noofModule}></Input>
            <label htmlFor="">Course Fee</label>
             <Input placeholder="Course Fee" onChange={(e)=>setFee(e.target.value)} value={Fee}></Input>
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