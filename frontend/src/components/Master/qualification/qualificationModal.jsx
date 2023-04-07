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
export default function QualificationModal({name,bgcolor,hover,handleData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [code,setCode]=useState("")
    const [Name,setName]=useState("")
    const handleClick=async()=>{
      const send={
       code:code,
       name:Name
      }
     
      const res=await axios.post("http://localhost:8080/masterqualification/addqualification",send)
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
            <ModalHeader>Add Qualification Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Qualification Code</label>
             <Input value={code} placeholder='Qualification Code' onChange={(e)=>setCode(e.target.value)}></Input>
            <label htmlFor="">Qualification Name</label>
             <Input value={Name} placeholder="Qualification Name" onChange={(e)=>setName(e.target.value)}></Input>
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