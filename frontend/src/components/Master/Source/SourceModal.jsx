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
export default function SourceModal({name,bgcolor,hover,handleData,headername}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [source,setSource]=useState("")
    const handleClick=async()=>{
      const send={
      sourcename:source
      }
     
      const res=await axios.post("http://localhost:8080/mastersource/addsource",send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    return (
      <>
        <Button backgroundColor="blue.600" color="white" _hover={{bgColor:"blue.500"}} mt="10px">
                <Text fontSize={"15px"} onClick={onOpen}>{name}</Text>
            </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{headername}</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
            <label htmlFor="">Source Name</label>
             <Input placeholder="Source Name" onChange={(e)=>setSource(e.target.value)}></Input>
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