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
export default function ClassPatchModel({name,handleData,location,noofseats,classroom,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Location,setLocation]=useState(location)
    const [noOfSeats,setNoOfSeats]=useState(noofseats)
    const [classRoom,setClassRoom]=useState(classroom)

    const handleClick=async()=>{
      const send={
        location:Location,
        noofseats:noOfSeats,
        classroom:classRoom,
       
       }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/masterclass/${id}`,send)
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
            <ModalHeader>Class Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Location</label>
             <Input placeholder='Location' onChange={(e)=>setLocation(e.target.value)} value={Location}></Input>
            <label htmlFor="">No. Of Seats</label>
             <Input placeholder="No Of Seats" onChange={(e)=>setNoOfSeats(e.target.value)} value={noOfSeats}></Input>
             <label htmlFor="">Class Room</label>
             <Input placeholder='Class Room' onChange={(e)=>setClassRoom(e.target.value)} value={classRoom}></Input>
            
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