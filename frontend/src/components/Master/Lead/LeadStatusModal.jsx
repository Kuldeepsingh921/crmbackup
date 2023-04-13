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
export default function LeadStatusModal({name,bgcolor,hover,handleData,headername}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [Status,setStatus]=useState("")
  const [Desc,setDesc]=useState("")

    const handleClick=async()=>{
      const send={
       status:Status,
       desc:Desc
      }
     
      const res=await axios.post("http://localhost:8080/leadsstatus/addleadstatus",send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    return (
      <div style={{marginTop:"10px"}}>
        <Button bgColor="blue.600" color="white" _hover={{bgColor:"blue.500"}}>
                <Text fontSize={"15px"}  onClick={onOpen}>{name}</Text>
            </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{headername}</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
            <label htmlFor="">Status</label>
             <Input placeholder="Status" onChange={(e)=>setStatus(e.target.value)}></Input>
             <label htmlFor="">Description</label>
             <Input placeholder="Description" onChange={(e)=>setDesc(e.target.value)}></Input>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>handleClick()} _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                Add
              </Button>
              <Button variant='ghost' onClick={onClose} color="white" backgroundColor={"red"} _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Discard</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }