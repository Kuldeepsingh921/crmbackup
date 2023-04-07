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
export default function SubjectPatchModel({name,handleData,coursename,subjectname,subjectcode,fee,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [courseName,setCourseName]=useState(coursename)
    const [subjectCode,setSubjectCode]=useState(subjectcode)
    const [subjectName,setSubjectName]=useState(subjectname)
    const [Fee,setFee]=useState(fee)

    const handleClick=async()=>{
      const send={
        coursename:courseName,
        subjectcode:subjectCode,
        subjectname:subjectName,
        fee:Fee
       }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/mastersubject/${id}`,send)
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
            <label htmlFor="">Subject Code</label>
             <Input placeholder="Subject Code" onChange={(e)=>setSubjectCode(e.target.value)} value={subjectCode}></Input>
             <label htmlFor="">Subject Name</label>
             <Input placeholder='Subject Name' onChange={(e)=>setSubjectName(e.target.value)} value={subjectName}></Input>
            <label htmlFor="">Fee</label>
             <Input placeholder="Fee" onChange={(e)=>setFee(e.target.value)} value={Fee}></Input>
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