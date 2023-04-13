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
export default function CityModal({name,bgcolor,hover,handleData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [countryName,setCountryName]=useState("")
    const [stateName,setStateName]=useState("")
    const [cityName,setCityName]=useState("")
    const [countryData,setCountryData]=useState("")
    const [stateData,setStateData]=useState("")

    const handleClick=async()=>{
      const send={
       countryname:countryName,
       statename:stateName,
       cityname:cityName,
     
      }
      console.log(send)
     
      const res=await axios.post("http://localhost:8080/mastercity/addcity",send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    const handleCountryData=async()=>{
      const res=await axios.get(`http://localhost:8080/mastercountry`)
      const data=await res.data
      setCountryData(data)
    }
    const handleStateData=async()=>{
      const res=await axios.get(`http://localhost:8080/masterstate`)
      const data=await res.data
      setStateData(data)
    }
    useEffect(()=>{
      handleCountryData()
      handleStateData()
    },[])
    console.log("country",countryData)
    console.log("state",stateData)

    return (
      <>
        <Button backgroundColor="blue.600" color="white" _hover={{bgColor:"blue.500"}} mt="10px">
                <Text fontSize={"15px"} onClick={onOpen}>{name}</Text>
            </Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>City Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Country Name</label>
                <Select onChange={(e)=>setCountryName(e.target.value)}>
                  <option value="">Select Country Name</option>
                {
                   countryData?countryData.map((el)=><option value={el.countryname}>{el.countryname}</option>):null
                }
                </Select>
             
            <label htmlFor="">State Name</label>
            <Select onChange={(e)=>setStateName(e.target.value)}>
              <option value="">Select State Name</option>
             {stateData?stateData.map((el)=><option value={el.state}>{el.state}</option>):null}
            </Select>
             <label htmlFor="">City Name</label>
             <Input placeholder='City Name' onChange={(e)=>setCityName(e.target.value)}></Input>
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