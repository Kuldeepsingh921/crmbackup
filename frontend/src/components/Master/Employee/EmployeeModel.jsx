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
export default function EmployeeModal({name,bgcolor,hover,handleData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [employeeCode,setEmployeeCode]=useState("")
    const [employeeName,setEmployeeName]=useState("")
    const [DOB,setDOB]=useState("")
    const [dateOfJoining,setDateOfJoining]=useState("")
    const [gender,setGender]=useState("")
    const [mobileNo,setMobileNo]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [department,setDepartment]=useState("")
    const [designation,setDesignation]=useState("")
    const [countryName,setCountryName]=useState("")
    const [stateName,setStateName]=useState("")
    const [cityName,setCityName]=useState("")
    const [maritalStatus,setMaritalStatus]=useState("")
    const [countryData,setCountryData]=useState("")
    const [stateData,setStateData]=useState("")
    const [cityData,setCityData]=useState("")
    const [departmentData,setDepartmentData]=useState("")
    const [designationData,setDesignationData]=useState("")

    const handleClick=async()=>{
      const send={
        employeecode:employeeCode,
        employeename:employeeName,
        dob:DOB,
        dateofjoining:dateOfJoining,
        gender:gender,
        mobileno:mobileNo,
        phone:phone,
        email:email,
        department:department,
        designation:designation,
       countryname:countryName,
       statename:stateName,
       cityname:cityName,
       maritalstatus:maritalStatus
     
      }
      console.log(send)
     
      const res=await axios.post("http://localhost:8080/masteremployee/addemployee",send)
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
    const handleCityData=async()=>{
      const res=await axios.get(`http://localhost:8080/mastercity`)
      const data=await res.data
      setCityData(data)
    }
    const handleDepartmentData=async()=>{
      const res=await axios.get(`http://localhost:8080/masterdepartment`)
      const data=await res.data
      setDepartmentData(data)
    }
    const handleDesignationData=async()=>{
      const res=await axios.get(`http://localhost:8080/masterdesignation`)
      const data=await res.data
      setDesignationData(data)
      console.log("designation",data)
    }
    useEffect(()=>{
      handleCountryData()
      handleStateData()
      handleCityData()
      handleDepartmentData()
      handleDesignationData()
    },[])
    console.log("country",countryData)
    console.log("state",stateData)

    return (
      <>
        <Button backgroundColor="#be1e2d" color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                <Text fontSize={"18px"} onClick={onOpen}>{name}</Text>
            </Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Employee Master</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
            <label htmlFor="">Employee Code</label>
            <Input placeholder='Employee Code' disabled={true} onChange={(e)=>setEmployeeCode(e.target.value)}></Input>
            <label htmlFor="">Employee Name</label>
            <Input placeholder='Employee Name' onChange={(e)=>setEmployeeName(e.target.value)}></Input>
            <label htmlFor="">Date Of Birth</label>
            <Input placeholder='Date Of Birth' type={'date'} onChange={(e)=>setDOB(e.target.value)}></Input>
            <label htmlFor="">Date Of Joining</label>
            <Input placeholder='Date Of Joining' type={'date'} onChange={(e)=>setDateOfJoining(e.target.value)}></Input>
            <label htmlFor="">Gender</label>
            <Select onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="">Male</option>   
              <option value="">Female</option>
              <option value="">Others</option>   
            </Select>
            <label htmlFor="">Mobile No.</label>
            <Input placeholder='Mobile No' type={'number'} onChange={(e)=>setMobileNo(e.target.value)}/>
            <label htmlFor="">Phone</label>
            <Input placeholder='Phone' type={'number'} onChange={(e)=>setPhone(e.target.value)}/>
            <label htmlFor="">Email</label>
            <Input placeholder='Email' type={'email'} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Department</label>
                <Select onChange={(e)=>setDepartment(e.target.value)}>
                  <option value="">Select Department</option>
                {
                   departmentData?departmentData.map((el)=><option value={el.departmentname}>{el.departmentname}</option>):null
                }
                </Select>
                <label htmlFor="">Designation</label>
                <Select onChange={(e)=>setDesignation(e.target.value)}>
                  <option value="">Select Designation</option>
                {
                   designationData?designationData.map((el)=><option value={el.designationname}>{el.designationname}</option>):null
                }
                </Select>
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
             <Select onChange={(e)=>setCityName(e.target.value)}>
              <option value="">Select City Name</option>
             {cityData?cityData.map((el)=><option value={el.cityname}>{el.cityname}</option>):null}
            </Select>
            <label htmlFor="">Marital Status</label>
            <Select onChange={(e)=>setMaritalStatus(e.target.value)}>
              <option value="">Select Marital Status</option>
              <option value="">Married</option>
              <option value="">Unmarried</option>
              <option value="">Other</option>
            </Select>
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