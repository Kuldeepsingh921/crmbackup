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
export default function LeadStatusPatchModal({name,handleData,status,desc,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Status,setStatus]=useState(status)
    const [Desc,setDesc]=useState(desc)

    const handleClick=async()=>{
        const send={
            status:Status,
            desc:Desc
           }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/leadsstatus/${id}`,send)
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
            <ModalHeader>Leads Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
            <label htmlFor="">Status</label>
             <Input placeholder="Status" onChange={(e)=>setStatus(e.target.value)}value={Status}></Input>
             <label htmlFor="">Description</label>
             <Input placeholder="Description" onChange={(e)=>setDesc(e.target.value)} value={Desc}></Input>
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