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
export default function QualificationPatchModal({name,handleData,patchqualificationcode,patchqualificationname,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [code,setCode]=useState(patchqualificationcode)
    const [Name,setName]=useState(patchqualificationname)
    const handleClick=async()=>{
      const send={
        code:code,
        name:Name
       }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/masterqualification/${id}`,send)
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
            <ModalHeader>Edit Qualification</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Qualification Code</label>
             <Input placeholder='Qualification Code' onChange={(e)=>setCode(e.target.value)} value={code}></Input>
            <label htmlFor="">Qualification Name</label>
             <Input placeholder="Qualification Name" onChange={(e)=>setName(e.target.value)} value={Name}></Input>
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