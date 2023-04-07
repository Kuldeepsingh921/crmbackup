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
export default function CounsellorPatchModel({name,handleData,counsellorname,email,phone,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [counsellorName,setCounsellorName]=useState(counsellorname)
    const [Email,setEmail]=useState(email)
    const [Phone,setPhone]=useState(phone)

    const handleClick=async()=>{
      const send={
        name:counsellorName,
        email:Email,
        phone:Phone,
       
       }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/counsellor/${id}`,send)
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
            <ModalHeader>Counsellor Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Counsellor Name</label>
             <Input placeholder='Counsellor Name' onChange={(e)=>setCounsellorName(e.target.value)} value={counsellorName}></Input>
            <label htmlFor="">Email</label>
             <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={Email}></Input>
             <label htmlFor="">Phone</label>
             <Input placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} value={Phone}></Input>
            
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