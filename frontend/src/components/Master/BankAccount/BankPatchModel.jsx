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

export default function BankPatchModel({name,handleData,bankname,bankaccountname,bankaccountno,ifsccode,id,openingbalance}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [bankName,setBankName]=useState(bankname)
    const [bankAccountName,setBankAccountName]=useState(bankaccountname)
    const [bankAccountNo,setBankAccountNo]=useState(bankaccountno)
    const [ifsc,setIfsc]=useState(ifsccode)
    const [openingBalance,setOpeningBalance]=useState(openingbalance)

    const handleClick=async()=>{
      const send={
        bankname:bankName,
        bankaccountname:bankAccountName,
        bankaccountno:bankAccountNo,
        ifsccode:ifsc,
        openingbalance:openingBalance
       }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/masterbank/${id}`,send)
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
            <ModalHeader>Bank Account Creation</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Bank Name</label>
             <Input placeholder='Bank Name' onChange={(e)=>setBankName(e.target.value)} value={bankName}></Input>
            <label htmlFor="">Bank Account Name</label>
             <Input placeholder="Bank Account Name" onChange={(e)=>setBankAccountName(e.target.value)} value={bankAccountName}></Input>
             <label htmlFor="">Bank Account Number</label>
             <Input placeholder='Bank Account Number' onChange={(e)=>setBankAccountNo(e.target.value)} value={bankAccountNo}></Input>
            <label htmlFor="">IFSC Code</label>
             <Input placeholder="IFSC Code" onChange={(e)=>setIfsc(e.target.value)} value={ifsc}></Input>
             <label htmlFor="">Opening Balance</label>
             <Input placeholder="Opening Balance" onChange={(e)=>setOpeningBalance(e.target.value)} value={openingBalance}></Input>
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