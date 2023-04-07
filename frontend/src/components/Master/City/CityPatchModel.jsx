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
export default function CityPatchModel({name,handleData,countryname,statename,cityname,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [countryName,setCountryName]=useState(countryname)
    const [stateName,setStateName]=useState(statename)
    const [cityName,setCityName]=useState(cityname)

    const handleClick=async()=>{
      const send={
        countryname:countryName,
        statename:stateName,
        cityname:cityName,
       
       }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/mastercity/${id}`,send)
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
            <ModalHeader>City Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Country Name</label>
             <Input placeholder='Country Name' onChange={(e)=>setCountryName(e.target.value)} value={countryName}></Input>
            <label htmlFor="">State Name</label>
             <Input placeholder="State Name" onChange={(e)=>setStateName(e.target.value)} value={stateName}></Input>
             <label htmlFor="">City Name</label>
             <Input placeholder='City Name' onChange={(e)=>setCityName(e.target.value)} value={cityName}></Input>
            
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