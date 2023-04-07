import { Box, Button, Divider, Flex, FormControl, FormLabel, Image, Input, Select, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '../../Title'

export const AddBatch = () => {
    //const [data, setdata] = useState({})
    const [batchCode,setBatchCode]=useState("")
    const [batchName,setBatchName]=useState("")
    const [startDate,setStartDate]=useState("")
    const [completionDate,setCompletionDate]=useState("")
    const [classRoom,setClassRoom]=useState("")
    const [batchTimeFrom,setBatchTimeFrom]=useState("")
    const [batchTimeTo,setBatchTimeTo]=useState("")
    const [faculty1,setFaculty1]=useState("")
    const [faculty2,setFaculty2]=useState("")  
    const [batchType,setBatchType]=useState("")
    const [batchSize,setBatchSize]=useState("")
    const [batchStatus,setBatchStatus]=useState("")
    const [batchRemark,setBatchRemark]=useState("")
    const [classRoomData,setClassRoomData]=useState('')

    const navigate=useNavigate()

    const handleClick=async()=>{
        const send={
          batchcode:batchCode,
        batchname:batchName,
        startdate:startDate,
        completiondate:completionDate,
        batchtimefrom:batchTimeFrom,
        batchtimeTo:batchTimeTo,
        classroom:classRoom,
        faculty1:faculty1,
        faculty2:faculty2,
        batchtype:batchType,
        batchsize:batchSize,
        batchstatus:batchStatus,
        batchremark:batchRemark,
       
        }
        console.log(send)
       
        const res=await axios.post("http://localhost:8080/masterbatch/addbatch",send)
        const data=await res.data
        console.log(data)
        //handleData()
      console.log(send)
      //onClose()
      }
      const handleClassRoomData=async()=>{
        const res=await axios.get(`http://localhost:8080/masterclass`)
        const data=await res.data
        setClassRoomData(data)
      }
      useEffect(()=>{
        handleClassRoomData()
      },[])

    const handlesubmit = (e)=>{
      e.preventDefault()
      handleClick()
      //console.log(data)
    navigate("/master/batch") 
    }
  return (    
      <div style={{marginTop:"30px"}}>
        <PageTitle title="Batch Details" />
        
    <Box borderRadius={'10px'} border='0px solid red' p='10px' w='95%'  m='auto' boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}  >
        <form onSubmit={handlesubmit}>
        <FormControl mt='20px'>
        <Flex  m='auto' w='90%' justifyContent="space-between" >
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px' >Batch Code</FormLabel>
        <Input name="batchcode" value={batchCode} onChange={(e)=>setBatchCode(e.target.value)}   type='' />
        </Box>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Batch Name</FormLabel>
        <Input  name="batchname" value={batchName} placeholder="Batch Name" type=''  onChange={(e)=>setBatchName(e.target.value)} required />
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Start Date</FormLabel>
        <Input name="startdate" value={startDate} placeholder='Start Date' type={'date'} required  onChange={(e)=>setStartDate(e.target.value)}/>
        </Box>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Completion Date</FormLabel>
        <Input name="completiondate" value={completionDate} placeholder='Completion Date' type={'date'} required  onChange={(e)=>setCompletionDate(e.target.value)}/>
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontWeight='400'  fontSize='18px'>Batch Time From</FormLabel>
        <Input name="batchtimefrom" value={batchTimeFrom} placeholder='Batch Time From' type="time"  onChange={(e)=>setBatchTimeFrom(e.target.value)} />
        </Box>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Batch Time To</FormLabel>
        <Input name="batchtimeto" value={batchTimeTo} placeholder='Batch Time To'  onChange={(e)=>setBatchTimeTo(e.target.value)} type='time' />
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Class Room</FormLabel>
        <Select onChange={(e)=>setClassRoom(e.target.value)}>
                  <option value="">Select Class Room</option>
                {
                   classRoomData?classRoomData.map((el)=><option value={el.location}>{el.location}</option>):null
                }
                </Select>
        </Box>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Faculty 1</FormLabel>
        <Select name="faculty1" value={faculty1} onChange={(e)=>setFaculty1(e.target.value)}  placeholder='Faculty 1'>
        <option value='Subhash'>Subhash</option>
        <option value='Sachin'>Sachin</option>
        <option value='Mukesh'>Mukesh</option>
        </Select>
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Faculty 2</FormLabel>
        <Select name="faculty2" value={faculty2} onChange={(e)=>setFaculty2(e.target.value)}  placeholder='Faculty 2'>
        <option value='Shubham'>Shubham</option>
        <option value='Kamlesh'>Kamlesh</option>
        <option value='Vinod'>Vinod</option>
        </Select>
        </Box>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Batch Type</FormLabel>
        <Select name="batchtype" value={batchType} onChange={(e)=>setBatchType(e.target.value)} required  placeholder='Batch Type'>
        <option value="Online">Online</option>
        <option value="In-class">In-class</option>
        <option value="COD">COD</option>
        </Select>
        </Box>
        </Flex>
   
        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel  fontWeight='400' fontSize='18px'>Batch Size</FormLabel>
        <Input name="batchsize" value={batchSize} placeholder='Batch Size'  onChange={(e)=>setBatchSize(e.target.value)} type='' />
        </Box>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px' htmlFor="">Batch Status</FormLabel>
        <Select  onChange={(e)=>setBatchStatus(e.target.value)} required>
        <option value="Select Batch Status">Select Batch Status</option>
        <option value="Admission Closed">Admission Closed</option>
        <option value="Admission Opened">Admission Opened</option>
        </Select>
        </Box>
        </Flex>
        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontWeight='400' fontSize='18px'>Remark</FormLabel>
        <Textarea name="batchremark" value={batchRemark} placeholder='Remark'  onChange={(e)=>setBatchRemark(e.target.value)} type='' />
        </Box>
        
        </Flex>
        
        <Button type='submit' color="white"  bgColor={'blue.300'} mt='30px' _hover={{bgColor:"blue.200"}}>Submit</Button>
        <Button ml="30px" color="white" bgColor={'red.500'} mt='30px' _hover={{bgColor:"red.300"}}>Cancel</Button>
       
        </FormControl>
        </form>
    </Box>
    </div>
  )
}
