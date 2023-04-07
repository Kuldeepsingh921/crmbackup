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
export default function PatchModel({name,bgcolor,hover,id,patchmode,patchremark,handleData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mode,setMode]=useState(patchmode)
    const [remark,setRemark]=useState(patchremark)
    // const handleData=async()=>{
    //   const data=await axios.get("http://localhost:8080/modeofdelivery")
    // }
    const handleClick=async()=>{
      const send={
        mode:mode,
        remark:remark
      }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/modeofdelivery/${id}`,send)
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
            <ModalBody>
                <label htmlFor="">Model Name</label>
             <Input placeholder='Model Name' onChange={(e)=>setMode(e.target.value)} value={mode}></Input>
            <label htmlFor="">Remark</label>
             <Input placeholder="Remark" onChange={(e)=>setRemark(e.target.value)} value={remark}></Input>
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