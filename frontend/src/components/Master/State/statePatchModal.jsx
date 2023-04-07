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
import {useState,useEffect} from "react"
export default function StatePatchModal({name,handleData,patchcountryname,patchstate,id}) {
    const [countryarr,setCountryarr]=useState("")
       const handleCountry=async()=>{
        const res=await axios.get("http://localhost:8080/mastercountry")
        const data=await res.data
        console.log(data)
         setCountryarr(data)
       }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [country,setcountryName]=useState(patchcountryname)
    const [state,setStateName]=useState(patchstate)
    const handleClick=async()=>{
        const send={
            countryname:country,
            state:state
            }
           
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/masterstate/${id}`,send)
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
                <Text fontSize={"18px"} onClick={onOpen}>{name}</Text>
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>State Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <label htmlFor="">Country Name</label>
               
                <div height="200px">
                    <Select onChange={(e)=>setcountryName(e.target.value)}>
                    <option value={country}>{country}</option>
                   {countryarr?countryarr.map((el)=><option value={el.countryname}>{el.countryname}</option>):null}
                   </Select>
                    </div>
                   
                
            <label htmlFor="">State</label>
             <Input placeholder="State" onChange={(e)=>setStateName(e.target.value)} value={state}></Input>
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