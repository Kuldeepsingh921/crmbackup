import React, { useEffect, useState } from 'react'
import {Box,Flex,Text,Input,Textarea,Select,Checkbox,Radio, RadioGroup,Stack,Button,useToast} from "@chakra-ui/react"
import PageTitle from '../../Title'
import axios from "axios"
import { useParams } from 'react-router-dom'
const PatchLeads = () => {
    const [leadsdata,setLeadsData]=useState("")
    const {id}=useParams()
    console.log(id)
    const handleData=async()=>{
        const res=await axios.get(`http://localhost:8080/enquiryleads/${id}`)
        const data=await res.data
       setLeadsData(data)
    }
    console.log(leadsdata)
    useEffect(()=>{
        setNewAddress(leadsdata.address)
        setEnquiryDate(leadsdata.enquirydate)
        setModeofStudy(leadsdata.modeofstudy)
        setPreferedTime(leadsdata.preferedtime)
        setCandidateName(leadsdata.candidatename)
        setFollowupMedium(leadsdata.followupmedium)
        setEnquirySoruce(leadsdata.enquirysource)
        setMobileno(leadsdata.mobileno)
        setAssignedto(leadsdata.assignedto)
        setGender(leadsdata.gender)
        setAlternateno(leadsdata.alternateno)
        setInterestLevel(leadsdata.interestlevel)
        setEmail(leadsdata.email)
        setStatus(leadsdata.status)
        setDemoAttended(leadsdata.demoattended)
        setCountryname(leadsdata.countryname)
        setCityname(leadsdata.cityname)
        setStatename(leadsdata.statename)
        setVisitor(leadsdata.visitor)
        setDiscount(leadsdata.discount)
        setremark(leadsdata.remark)
        setNextFollowUpdate(leadsdata.nextfollowupdate)
        setnewCourse(leadsdata.course)
        setnewModule(leadsdata.module)
    },[leadsdata])
    const [data,setData]=useState("")
    const [country,setCountry]=useState()
    const [course,setCourse]=useState()
    const [enquirydate,setEnquiryDate]=useState()
    const [newaddress,setNewAddress]=useState()
    const [modeofstudy,setModeofStudy]=useState()
    const [preferedtime,setPreferedTime]=useState()
    const [candidatename,setCandidateName]=useState()
    const [followupmedium,setFollowupMedium]=useState()
    const [gender,setGender]=useState()
    const [enquirysource,setEnquirySoruce]=useState()
    const [mobileno,setMobileno]=useState()
    const [assignedto,setAssignedto]=useState()
    const [alternateno,setAlternateno]=useState()
    const [interestlevel,setInterestLevel]=useState()
    const [email,setEmail]=useState()
    const [status,setStatus]=useState()
    const [demoattended,setDemoAttended]=useState()
    const [countryname,setCountryname]=useState()
    const [cityname,setCityname]=useState()
    const [visitor,setVisitor]=useState()
    const [statename,setStatename]=useState()
    const [discount ,setDiscount]=useState()
    const [remark,setremark]=useState()
    const [nextfollowupdate,setNextFollowUpdate]=useState()
    const [newcourse,setnewCourse]=useState()
    const [newmodule,setnewModule]=useState()
    const [nodiscount,setNoDiscount]=useState("")
    const toast = useToast()
    console.log(newaddress)
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
            address:newaddress,
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
        const res=await axios.patch(`http://localhost:8080/enquiryleads/${id}`,send)
        const data=await res.data
        console.log(data)
        toast({
            title: ' Leads Edited Successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        
    }
    useEffect(()=>{
        handleFollowup()
        handleCountry()
        handleCourse()
        handleData()
    },[])
    
  return(
    <div style={{marginTop:"20px"}}>
        {leadsdata? <Box marginTop="20px" width="95%" margin="auto">
       <PageTitle title={"Edit Leads Details"}/>
       <Box id="input" textAlign={"start"} width="90%" margin="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"20px"} padding="20px">
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Enquiry Date</label>
            <Input type="date" onChange={(e)=>setEnquiryDate(e.target.value)} value={leadsdata.enquirydate}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Address</label>
           <Textarea placeholder='Enter your addresss here' onChange={(e)=>setNewAddress(e.target.value)} value={newaddress}></Textarea>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Mode of Study</label>
           <Select onChange={(e)=>setModeofStudy(e.target.value)} value={modeofstudy}>
            <option value="Online">Online</option>
            <option value="In Class">In Class</option>
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Prefered Time
</label>
           <Input type="time" placeholder='Enter Time' onChange={(e)=>setPreferedTime(e.target.value)} value={preferedtime}></Input>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Candidate Name</label>
          <Input placeholder='Enter Candidate Name' onChange={(e)=>setCandidateName(e.target.value)} value={candidatename}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Follow Up Medium
</label>
           <Select onChange={(e)=>setFollowupMedium(e.target.value)}>
            <option value={followupmedium}>{followupmedium}</option>
            {data?data.map((el)=><option>
                {el.followup}
            </option>):null}
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Gender</label>
           <Select onChange={(e)=>setGender(e.target.value)}>
            <option value={gender}>{gender}r</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Enquiry Source</label>
           <Select onChange={(e)=>setEnquirySoruce(e.target.value)}>
            <option value={enquirysource}>{enquirysource}</option>
            {data?data.map((el)=><option value={el.followup}>
                {el.followup}
            </option>):null}
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Mobile Number</label>
           <Input placeholder='Enter Mobile No' onChange={(e)=>setMobileno(e.target.value)} value={mobileno}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Assigned To</label>
       <Select onChange={(e)=>setAssignedto(e.target.value)}>
             <option value={assignedto}>{assignedto}</option>
            <option value="Naman">Naman</option>
            <option value="Manish">Manish</option>
            <option value="Anil">Anil</option>
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Alternate Mobile No</label>
           <Input placeholder='Enter Alternate Mobile No' onChange={(e)=>setAlternateno(e.target.value)} value={alternateno}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Interest Level</label>
       <Select onChange={(e)=>setInterestLevel(e.target.value)}>
             <option value={interestlevel}>{interestlevel}</option>
            <option value="Hot">Hot</option>
            <option value="Warm">Warm</option>
            <option value="Cold">Cold</option>
            <option value="Not Intrested">Not Intrested</option>
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Email</label>
           <Input placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Status</label>
       <Select onChange={(e)=>setStatus(e.target.value)}>
             <option value={status}>{status}</option>
            <option value="Admission Done">Admission Done</option>
            <option value="Join Another Institute">Join Another Institute</option>
            <option value="Non-visiting">Non-visiting</option>
            <option value="Visiting">Visiting</option>
           </Select>
           <Checkbox size='md' colorScheme='green' fontSize="20px" onChange={(e)=>setDemoAttended(e.target.checked)} value={demoattended}>
    Demo Attanded
  </Checkbox>
           </Box>
            </Flex>  
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Alternate Email</label>
           <Input placeholder='Enter Alternate Email' ></Input>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Status</label>
       <Select>
             <option value="">Select</option>
            <option value="Attend">Attend</option>
            <option value="Not Attend">Not Attend</option>
           </Select>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems="center">
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Country Name</label>
       <Select onChange={(e)=>setCountryname(e.target.value)}>
             <option value={countryname}>{countryname}</option>
            {country?country.map((el)=><option>{el.countryname}</option>):null}
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <Checkbox size='lg' colorScheme='green' fontSize="25px" onChange={(e)=>setVisitor(e.target.checked)} value={visitor}>
   Visistor
  </Checkbox>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems="center">
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>State Name</label>
       <Select onChange={(e)=>setStatename(e.target.value)}>
             <option value={statename}>{statename}</option>
            {country?country.map((el)=><option>{el.countryname}</option>):null}
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
            <label htmlFor="" style={{fontSize:"17px"}}>Discount</label>
           <RadioGroup defaultValue='2' >
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='green'  size="lg" onChange={(e)=>setDiscount(e.target.value)} value={discount}>
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
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>City Name</label>
           <Select onChange={(e)=>setCityname(e.target.value)}>
             <option value={cityname}>{cityname}</option>
            {country?country.map((el)=><option>{el.countryname}</option>):null}
           </Select>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Remark</label>
           <Textarea placeholder='Enter Remark here' onChange={(e)=>setremark(e.target.value)} value={remark}></Textarea>
           </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
            <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Next Follow Date</label>
          <Input type="date" onChange={(e)=>setNextFollowUpdate(e.target.value)} value={nextfollowupdate}></Input>
           </Box>
           <Box marginTop="10px" fontWeight="500" lineHeight={"40px"} width="45%">
           <label htmlFor="" style={{fontSize:"17px"}}>Cource</label>
           <Select onChange={(e)=>setnewCourse(e.target.value)} value={newcourse}>
             <option value="">Select</option>
            {course?course.map((el)=><option>{el.coursename}</option>):null}
           </Select>
           </Box>
            </Flex>
            <Textarea placeholder='All modules are display here' marginTop="20px" value={newmodule}></Textarea>
            <Flex width="18%" margin="auto" justifyContent={"space-between"} marginTop="20px">
                <Button backgroundColor="#4361ee" color="white" _hover={{transform:"scale(1.1) ",transition:"0.5s"}} onClick={handleSubmit}>Submit</Button>
                <Button backgroundColor="#28a745" color="white" _hover={{transform:"scale(1.1) ",transition:"0.5s"}}>Cancel</Button>
            </Flex>
       </Box>
      </Box>
   :null}
   </div>
  )
}

export default PatchLeads
