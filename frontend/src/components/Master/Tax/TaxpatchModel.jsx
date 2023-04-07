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
export default function TaxpatchModel({name,handleData,patchtax,patchdescription,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [tax,setTax]=useState(patchtax)
    const [description,setDescription]=useState(patchdescription)
    const handleClick=async()=>{
        const send={
            tax:tax,
            description:description
           }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/mastertaxroute/${id}`,send)
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
            <ModalHeader>Tax Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Tax(GST)</label>
             <Input placeholder='Tax(GST)' onChange={(e)=>setTax(e.target.value)} value={tax}></Input>
            <label htmlFor="">Description</label>
             <Input placeholder="Description" onChange={(e)=>setDescription(e.target.value)} value={description}></Input>
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