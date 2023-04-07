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
import {useState} from "react"
export default function SubjectPatchModel({name,handleData,countryname,statename,cityname,id}) {
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
      console.log(id)
     const res=await axios.patch(`http://localhost:8080/masteremployee/${id}`,send)
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
            <ModalHeader>Employee Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody lineHeight={"30px"}>
            <label htmlFor="">Employee Code</label>
            <Input placeholder='Employee Code' disabled={true} onChange={(e)=>setEmployeeCode(e.target.value)}></Input>
            <label htmlFor="">Employee Name</label>
            <Input placeholder='Employee Name' onChange={(e)=>setEmployeeName(e.target.value)}></Input>
            
            <label htmlFor="">Date Of Joining</label>
            <Input placeholder='Date Of Joining' type={'date'} onChange={(e)=>setDateOfJoining(e.target.value)}></Input>
           
            <label htmlFor="">Mobile No.</label>
            <Input placeholder='Mobile No' type={'number'} onChange={(e)=>setMobileNo(e.target.value)}/>
           
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
                
            <label htmlFor="">State Name</label>
             <Input placeholder="State Name" onChange={(e)=>setStateName(e.target.value)} value={stateName}></Input>
             
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