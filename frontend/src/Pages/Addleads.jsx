import React, { useEffect, useState } from 'react'
import {Box,Flex,Text,Input,Textarea,Select,Checkbox,Radio, RadioGroup,Stack,Button,useToast} from "@chakra-ui/react"
import PageTitle from '../components/Title'
import axios from "axios"
import AddleadsExcel from './AddleadsExcel'
const Addleads = () => {
    const [data,setData]=useState("")
    const [country,setCountry]=useState("")
    const [course,setCourse]=useState("")
    const [enquirydate,setEnquiryDate]=useState("")
    const [address,setAddress]=useState("")
    const [modeofstudy,setModeofStudy]=useState("")
    const [preferedtime,setPreferedTime]=useState("")
    const [candidatename,setCandidateName]=useState("")
    const [followupmedium,setFollowupMedium]=useState("")
    const [gender,setGender]=useState("")
    const [enquirysource,setEnquirySoruce]=useState("")
    const [mobileno,setMobileno]=useState("")
    const [assignedto,setAssignedto]=useState("")
    const [alternateno,setAlternateno]=useState("")
    const [interestlevel,setInterestLevel]=useState("")
    const [email,setEmail]=useState("")
    const [status,setStatus]=useState("")
    const [demoattended,setDemoAttended]=useState("")
    const [countryname,setCountryname]=useState("")
    const [cityname,setCityname]=useState("")
    const [visitor,setVisitor]=useState("")
    const [statename,setStatename]=useState("")
    const [discount ,setDiscount]=useState("")
    const [remark,setremark]=useState("")
    const [nextfollowupdate,setNextFollowUpdate]=useState("")
    const [newcourse,setnewCourse]=useState("")
    const [newmodule,setnewModule]=useState("")
    const [nodiscount,setNoDiscount]=useState("")
    const toast = useToast()
    const handleFollowup=async()=>{
        const res=await axios.get(`http://localhost:8080/masterfollowup`)
        const data=await res.data
        console.log(data)
        setData(data)
    }
    const handleCountry=async()=>{
        const res=await axios.get("http://localhost:8080/mastercountry")
        const data=await res.data
        console.log(data)
        setCountry(data)
    }
    const handleCourse=async()=>{
        const res=await axios.get("http://localhost:8080/mastercourse")
        const data=await res.data
        console.log(data)
        setCourse(data)
    }
    const handleSubmit=async()=>{
        const send={
            enquirydate:enquirydate,
            address:address,
            modeofstudy:modeofstudy,
            preferedtime:preferedtime,
            candidatename:candidatename,
            followupmedium:followupmedium,
            gender:gender,
            enquirysource:enquirysource,
            mobileno:mobileno,
            assignedto:assignedto,
            alternateno:alternateno,
            interestlevel:interestlevel,
            email:email,
            status:status,
            demoattended:demoattended,
            countryname:countryname,
            visitor:visitor===true?"Yes":"No",
            statename:statename,
            discount:discount==="1"?"Yes":"No",
            cityname:cityname,
            remark:remark,
            nextfollowupdate:nextfollowupdate,
            course:newcourse,
            module:newmodule
        }
        console.log(send)
        const res=await axios.post("http://localhost:8080/enquiryleads/addleads",send)
        const data=await res.data
        console.log(data)

        const superres=await axios.post("http://localhost:8080/superadminleads/addleads",send)
        const superdata=await superres.data
        console.log(superdata)
        toast({
            title: 'New Leads created.',
            description: "We've created your new leads for you.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        
    }
    useEffect(()=>{
        handleFollowup()
        handleCountry()
        handleCourse()
    },[])
  return (
    <div style={{marginTop:"20px"}}>
      <AddleadsExcel />
      <Box marginTop="20px" width="95%" margin="auto">
       <PageTitle title={"Add Leads"}/>
       <Box id="input" textAlign={"start"} width="90%" margin="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"20px"} padding="20px">
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Enquiry Date</label>
            <Input type="date" onChange={(e)=>setEnquiryDate(e.target.value)}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Address</label>
           <Textarea placeholder='Enter your addresss here' onChange={(e)=>setAddress(e.target.value)}></Textarea>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Mode of Study</label>
           <Select onChange={(e)=>setModeofStudy(e.target.value)}>
            <option value="Online">Online</option>
            <option value="In Class">In Class</option>
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Prefered Time
</label>
           <Input type="time" placeholder='Enter Time' onChange={(e)=>setPreferedTime(e.target.value)}></Input>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Candidate Name</label>
          <Input placeholder='Enter Candidate Name' onChange={(e)=>setCandidateName(e.target.value)}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Follow Up Medium
</label>
           <Select onChange={(e)=>setFollowupMedium(e.target.value)}>
            <option value="">Select Follow up Medium</option>
            {data?data.map((el)=><option>
                {el.followup}
            </option>):null}
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Gender</label>
           <Select onChange={(e)=>setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Enquiry Source</label>
           <Select onChange={(e)=>setEnquirySoruce(e.target.value)}>
            <option value="">Select Enquiry Medium</option>
            {data?data.map((el)=><option value={el.followup}>
                {el.followup}
            </option>):null}
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Mobile Number</label>
           <Input placeholder='Enter Mobile No' onChange={(e)=>setMobileno(e.target.value)}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Assigned To</label>
       <Select onChange={(e)=>setAssignedto(e.target.value)}>
             <option value="">Select</option>
            <option value="Naman">Naman</option>
            <option value="Manish">Manish</option>
            <option value="Anil">Anil</option>
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Alternate Mobile No</label>
           <Input placeholder='Enter Alternate Mobile No' onChange={(e)=>setAlternateno(e.target.value)}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Interest Level</label>
       <Select onChange={(e)=>setInterestLevel(e.target.value)}>
             <option value="">Select</option>
            <option value="Hot">Hot</option>
            <option value="Warm">Warm</option>
            <option value="Cold">Cold</option>
            <option value="Not Intrested">Not Intrested</option>
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Email</label>
           <Input placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Status</label>
       <Select onChange={(e)=>setStatus(e.target.value)}>
             <option value="">Select</option>
            <option value="Admission Done">Admission Done</option>
            <option value="Join Another Institute">Join Another Institute</option>
            <option value="Non-visiting">Non-visiting</option>
            <option value="Visiting">Visiting</option>
           </Select>
           <Checkbox size='md' colorScheme='green' fontSize="20px" onChange={(e)=>setDemoAttended(e.target.checked)}>
    Demo Attanded
  </Checkbox>
           </Box>
            </Flex>  
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Alternate Email</label>
           <Input placeholder='Enter Alternate Email'></Input>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Status</label>
       <Select>
             <option value="">Select</option>
            <option value="Attend">Attend</option>
            <option value="Not Attend">Not Attend</option>
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems="center">
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Country Name</label>
       <Select onChange={(e)=>setCountryname(e.target.value)}>
             <option value="">Select</option>
            {country?country.map((el)=><option>{el.countryname}</option>):null}
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <Checkbox size='lg' colorScheme='green' fontSize="25px" onChange={(e)=>setVisitor(e.target.checked)}>
   Visistor
  </Checkbox>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems="center">
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>State Name</label>
       <Select onChange={(e)=>setStatename(e.target.value)}>
             <option value="">Select</option>
            {country?country.map((el)=><option>{el.countryname}</option>):null}
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
            <label htmlFor="" style={{fontSize:"17px"}}>Discount</label>
           <RadioGroup defaultValue='2' >
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='green' value='1' size="lg" onChange={(e)=>setDiscount(e.target.value)}>
     YES
    </Radio>
    <Radio colorScheme='red' value='2' size="lg" onChange={(e)=>setNoDiscount(e.target.value)}>
     NO
    </Radio>
  </Stack>
</RadioGroup>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>City Name</label>
           <Select onChange={(e)=>setCityname(e.target.value)}>
             <option value="">Select</option>
            {country?country.map((el)=><option>{el.countryname}</option>):null}
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Remark</label>
           <Textarea placeholder='Enter Remark here' onChange={(e)=>setremark(e.target.value)}></Textarea>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Next Follow Date</label>
          <Input type="date" onChange={(e)=>setNextFollowUpdate(e.target.value)}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="400" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Cource</label>
           <Select onChange={(e)=>setnewCourse(e.target.value)}>
             <option value="">Select</option>
            {course?course.map((el)=><option>{el.coursename}</option>):null}
           </Select>
           </Box>
            </Flex>
            <Textarea placeholder='All modules are display here' marginTop="20px"></Textarea>
            <Flex width="18%" margin="auto" justifyContent={"space-between"} marginTop="20px">
                <Button backgroundColor="#4361ee" color="white" _hover={{transform:"scale(1.1) ",transition:"0.5s"}} onClick={handleSubmit}>Submit</Button>
                <Button backgroundColor="#28a745" color="white" _hover={{transform:"scale(1.1) ",transition:"0.5s"}}>Cancel</Button>
            </Flex>
       </Box>
      </Box>
    </div>
  )
}

export default Addleads
