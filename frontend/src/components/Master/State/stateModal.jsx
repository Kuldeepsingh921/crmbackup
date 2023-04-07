import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,useDisclosure,Text,Input,Select
  } from '@chakra-ui/react'
  import axios from "axios"
import {useEffect, useState} from "react"
export default function StateModal({name,bgcolor,hover,handleData,headername}) {
       const [countryarr,setCountryarr]=useState("")
       const handleCountry=async()=>{
        const res=await axios.get("http://localhost:8080/mastercountry")
        const data=await res.data
        console.log(data)
         setCountryarr(data)
       }
       console.log(countryarr)
       const { isOpen, onOpen, onClose } = useDisclosure()
   const [country,setcountryName]=useState("")
   const [state,setStateName]=useState("")
    const handleClick=async()=>{
      const send={
      countryname:country,
      state:state
      }
     
      const res=await axios.post("http://localhost:8080/masterstate/addstate",send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    useEffect(()=>{
        handleCountry()
    },[])
    return (
      <>
        <Button backgroundColor="#be1e2d" color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                <Text fontSize={"18px"} onClick={onOpen}>{name}</Text>
            </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{headername}</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Country Name</label>
               
                    <div height="200px">
                    <Select onChange={(e)=>setcountryName(e.target.value)}>
                    <option value="">Select Country</option>
                   {countryarr?countryarr.map((el)=><option>{el.countryname}</option>):null}
                   </Select>
                    </div>
                   
                
            <label htmlFor="">State</label>
             <Input placeholder="State" onChange={(e)=>setStateName(e.target.value)}></Input>
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