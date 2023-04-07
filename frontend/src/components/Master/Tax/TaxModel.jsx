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
export default function TaxModel({name,bgcolor,hover,handleData,headername}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [tax,setTax]=useState("")
    const [description,setDescription]=useState("")
    const handleClick=async()=>{
      const send={
       tax:tax,
       description:description
      }
     
      const res=await axios.post("http://localhost:8080/mastertaxroute/addtax",send)
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
            <ModalHeader>{headername}</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Tax(GST)</label>
             <Input placeholder='Tax(GST)' onChange={(e)=>setTax(e.target.value)}></Input>
            <label htmlFor="">Description</label>
             <Input placeholder="Description" onChange={(e)=>setDescription(e.target.value)}></Input>
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