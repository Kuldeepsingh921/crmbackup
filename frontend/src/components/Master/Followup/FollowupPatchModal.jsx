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
export default function FollowupPatchModal({name,handleData,patchFollowup,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [followup,setFollowup]=useState(patchFollowup)
    const handleClick=async()=>{
        const send={
            followup:followup
           }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/masterfollowup/${id}`,send)
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
            <ModalHeader>Country Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
            <label htmlFor="">Country Name</label>
             <Input placeholder="Country Name" onChange={(e)=>setFollowup(e.target.value)}value={followup}></Input>
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