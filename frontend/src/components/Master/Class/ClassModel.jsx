import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,useDisclosure,Text,Input, Select
  } from '@chakra-ui/react'
  import axios from "axios"
import {useEffect, useState} from "react"
export default function ClassModal({name,bgcolor,hover,handleData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Location,setLocation]=useState('')
    const [noOfSeats,setNoOfSeats]=useState('')
    const [classRoom,setClassRoom]=useState('')
    const handleClick=async()=>{
      const send={
        location:Location,
        noofseats:noOfSeats,
        classroom:classRoom,
     
      }
      console.log(send)
     
      const res=await axios.post("http://localhost:8080/masterclass/addclass",send)
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
            <ModalHeader>Class Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Location</label>
                <Input placeholder='Location' onChange={(e)=>setLocation(e.target.value)} />
                             
            <label htmlFor="">No. Of Seats</label>
            <Input placeholder='No Of Seats' onChange={(e)=>setNoOfSeats(e.target.value)} />
             <label htmlFor="">Class Room</label>
             <Input placeholder='Class Room' onChange={(e)=>setClassRoom(e.target.value)}></Input>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleClick} _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                Add
              </Button>
              <Button variant='ghost' onClick={onClose} color="white" backgroundColor={"red"} _hover={{transform:"scale(1.1)",transition:"0.5s"}}>Discard</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }