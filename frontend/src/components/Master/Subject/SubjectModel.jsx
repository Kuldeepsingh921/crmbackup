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
export default function SubjectModal({name,bgcolor,hover,handleData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [courseName,setCourseName]=useState("")
    const [subjectCode,setSubjectCode]=useState("")
    const [subjectName,setSubjectName]=useState("")
    const [fee,setFee]=useState("")

    const handleClick=async()=>{
      const send={
       coursename:courseName,
       subjectcode:subjectCode,
       subjectname:subjectName,
       fee:fee
      }
     
      const res=await axios.post("http://localhost:8080/mastersubject/addsubject",send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    return (
      <>
        <Button backgroundColor="#be1e2d" color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                <Text fontSize={"18px"} onClick={onOpen}>{name}</Text>
            </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Subject Master Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Course Name</label>
             <Input placeholder='Course Name' onChange={(e)=>setCourseName(e.target.value)}></Input>
            <label htmlFor="">Subject Code</label>
             <Input placeholder="Subject Code" onChange={(e)=>setSubjectCode(e.target.value)}></Input>
             <label htmlFor="">Subject Name</label>
             <Input placeholder='Subject Name' onChange={(e)=>setSubjectName(e.target.value)}></Input>
            <label htmlFor="">Fee</label>
             <Input placeholder="Fee" onChange={(e)=>setFee(e.target.value)}></Input>
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