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
export default function SubjectModal({name,bgcolor,hover,handleData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [bankName,setBankName]=useState("")
    const [bankAccountName,setBankAccountName]=useState("")
    const [bankAccountNo,setBankAccountNo]=useState("")
    const [ifsc,setIfsc]=useState("")
    const [openingBalance,setOpeningBalance]=useState("")

    const handleClick=async()=>{
      const send={
       bankname:bankName,
       bankaccountname:bankAccountName,
       bankaccountno:bankAccountNo,
       ifsccode:ifsc,
       openingbalance:openingBalance
      }
     
      const res=await axios.post("http://localhost:8080/masterbank/addaccount",send)
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
            <ModalHeader>Bank Account Creation</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Bank Name</label>
             <Input placeholder='Bank Name' onChange={(e)=>setBankName(e.target.value)}></Input>
            <label htmlFor="">Bank Account Name</label>
             <Input placeholder="Bank Account Name" onChange={(e)=>setBankAccountName(e.target.value)}></Input>
             <label htmlFor="">Bank Account Number</label>
             <Input placeholder='Bank Account Number' onChange={(e)=>setBankAccountNo(e.target.value)}></Input>
            <label htmlFor="">IFSC Code</label>
             <Input placeholder="IFSC Code" onChange={(e)=>setIfsc(e.target.value)}></Input>
             <label htmlFor="">Opening Balance</label>
             <Input placeholder="Opening Balance" onChange={(e)=>setOpeningBalance(e.target.value)}></Input>
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