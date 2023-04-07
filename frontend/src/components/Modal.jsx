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
export default function AddModal({name,bgcolor,hover,handleData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mode,setMode]=useState("")
    const [remark,setRemark]=useState("")
    const handleClick=async()=>{
      const send={
        mode:mode,
        remark:remark
      }
     
      const res=await axios.post("http://localhost:8080/modeofdelivery/addnode",send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    return (
      <>
        <Button backgroundColor={bgcolor} color="white" _hover={hover}>
                <Text fontSize={"18px"} onClick={onOpen}>{name}</Text>
            </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Mode of Delivery</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <label htmlFor="">Model Name</label>
             <Input placeholder='Model Name' onChange={(e)=>setMode(e.target.value)}></Input>
            <label htmlFor="">Remark</label>
             <Input placeholder="Remark" onChange={(e)=>setRemark(e.target.value)}></Input>
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