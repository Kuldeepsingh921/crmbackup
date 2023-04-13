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
export default function BatchPatchModel({name,handleData,batchcode,batchname,startdate,completiondate,classroom,batchstatus,id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [batchCode,setBatchCode]=useState(batchcode)
    const [batchName,setBatchName]=useState(batchname)
    const [startDate,setStartDate]=useState(startdate)
    const [completionDate,setCompletionDate]=useState(completiondate)
    const [classRoom,setClassRoom]=useState(classroom)
    const [Status,setStatus]=useState(batchstatus)
    const [classRoomData,setClassRoomData]=useState('')


    const handleClick=async()=>{
      const send={
        batchcode:batchCode,
        batchname:batchName,
        startdate:startDate,
        completiondate:completionDate,
        classroom:classRoom,
        batchstatus:Status,
       
       }
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/masterbatch/${id}`,send)
      const data=await res.data
      console.log(data)
      handleData()
    console.log(send)
    onClose()
    }

    const handleClassRoomData=async()=>{
      const res=await axios.get(`http://localhost:8080/masterclass`)
      const data=await res.data
      setClassRoomData(data)
    }
    useEffect(()=>{
      handleClassRoomData()
    },[])
    return (
      <>
        <Text fontSize={"15px"} onClick={onOpen}>{name}</Text>
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Batch Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
            <label htmlFor="">Batch Code</label>
            <Input placeholder='Batch Code' value={batchCode} disabled={true} onChange={(e)=>setBatchCode(e.target.value)}></Input>
            <label htmlFor="">Batch Name</label>
            <Input placeholder='Batch Name' value={batchName} onChange={(e)=>setBatchName(e.target.value)}></Input>
            
            <label htmlFor="">Start Date</label>
            <Input placeholder='Start Date'  type="date" onChange={(e)=>setStartDate(e.target.value)} value={startDate}></Input>
           
            <label htmlFor="">Completion Date</label>
            <Input placeholder='Completion Date' value={completionDate} type={'date'} onChange={(e)=>setCompletionDate(e.target.value)}/>
           
            <label htmlFor="">Class Room</label>
                <Select onChange={(e)=>setClassRoom(e.target.value)}>
                  <option value="">Select Class Room</option>
                {
                   classRoomData?classRoomData.map((el)=><option key={el._id} value={el.location}>{el.location}</option>):null
                }
                </Select>
            <label htmlFor="">Status</label>
            <Input placeholder='Status' value={Status} type={'text'} onChange={(e)=>setStatus(e.target.value)}/>
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