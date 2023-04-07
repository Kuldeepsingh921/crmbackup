import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,useDisclosure,Text,Input,Flex,Box
  } from '@chakra-ui/react'
  import axios from "axios"
import {useState} from "react"
export default function OrganisationPatchModal({name,handleData,patchname,patchaddress,patchemail,patchmobileno,patchphoneno,patchzipcode,patchfax,patchwebsite,id,headername}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Name,setName]=useState(patchname)
    const [address,setAddress]=useState(patchaddress)
    const [email,setEmail]=useState(patchemail)
    const [mobileno,setMobileno]=useState(patchmobileno)
    const [phoneno,setPhoneno]=useState(patchphoneno)
    const [zipcode,setzipCode]=useState(patchzipcode)
    const [fax,setFax]=useState(patchfax)
    const [website,setWebsite]=useState(patchwebsite)
    const handleClick=async()=>{
        const send={
            name:Name,
            address:address,
            email:email,
            mobileno:mobileno,
            phoneno:phoneno,
            zipcode:zipcode,
            fax:fax,
            website:website
          }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/masterorganisation/${id}`,send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }
    return (
      <>
                <Text fontSize={"18px"} onClick={onOpen}>{name}</Text>
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{headername}</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
                <Flex gap="20px" alignItems={"center"} id="line1">
                <Flex gap="10px" alignItems={"center"} width="45%" margin="auto">
                    <Box width="25%" textAlign={"end"}> <label htmlFor=""  margin="auto">Name</label></Box>
               <Box width="70%">
               <Input placeholder='Organisation Name' onChange={(e)=>setName(e.target.value)} size="md" value={Name}></Input>
               </Box>
            </Flex>
                <Flex gap="10px" alignItems={"center"} width="45%" margin="auto">
                <Box width="25%" textAlign={"end"}> <label htmlFor=""  margin="auto">Email</label></Box>
               <Box width="70%">
               <Input placeholder='Organisation Email' onChange={(e)=>setEmail(e.target.value)} size="md" value={email}></Input>
               </Box>
                </Flex>
                </Flex>
                <Flex gap="20px" alignItems={"center"} id="line2" marginTop="20px">
                <Flex gap="10px" alignItems={"center"} width="45%" margin="auto">
                <Box width="25%" textAlign={"end"}> <label htmlFor=""  margin="auto">Mobileno</label></Box>
               <Box width="70%">
               <Input placeholder='Organisation mobileno' onChange={(e)=>setMobileno(e.target.value)} size="md" value={mobileno}></Input>
               </Box>
                </Flex>
                <Flex gap="10px" alignItems={"center"} width="45%" margin="auto">
                <Box width="25%" textAlign={"end"}> <label htmlFor=""  margin="auto">Phoneno</label></Box>
               <Box width="70%">
               <Input placeholder='Organisation phoneno' onChange={(e)=>setPhoneno(e.target.value)} size="md" value={phoneno}></Input>
               </Box>
                </Flex>
                </Flex>
                <Flex gap="20px" alignItems={"center"} id="line2" marginTop="20px">
                <Flex gap="10px" alignItems={"center"} width="45%" margin="auto">
                <Box width="25%" textAlign={"end"}> <label htmlFor=""  margin="auto">ZipCode</label></Box>
               <Box width="70%">
               <Input placeholder='Organisation zipCode' onChange={(e)=>setzipCode(e.target.value)} size="md" value={zipcode}></Input>
               </Box>
                </Flex>
                <Flex gap="10px" alignItems={"center"} width="45%" margin="auto">
                <Box width="25%" textAlign={"end"}> <label htmlFor=""  margin="auto">Fax</label></Box>
               <Box width="70%">
               <Input placeholder='Organisation Fax' onChange={(e)=>setFax(e.target.value)} size="md" value={fax}></Input>
               </Box>
                </Flex>
                </Flex>
                <Box marginTop="10px">
                <label htmlFor="" >Organisation Address</label>
             <Input placeholder="Organisation Address" onChange={(e)=>setAddress(e.target.value)} value={address}></Input>
                </Box>
             <Box marginTop="10px">
             <label htmlFor="">Organisation Website</label>
             <Input placeholder='Organisation Website' onChange={(e)=>setWebsite(e.target.value)} value={website}></Input>
             </Box>
             
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