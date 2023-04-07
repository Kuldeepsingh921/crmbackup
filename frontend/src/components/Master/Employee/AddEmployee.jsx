import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Select } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PageTitle from '../../Title'

export const AddEmployee = () => {

    const [data, setdata] = useState({})
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
        //handleData()
      console.log(send)
      //onClose()
      }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setdata({
            ...data,
            [name]:value

        })
    }

    const handlesubmit = (e)=>{
            e.preventDefault()

            console.log(data)
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
  return (
    
      <div style={{marginTop:"30px"}}>
        <PageTitle title="Employee Details" />
    <Box border='0px solid red' p='10px' w='95%'  m='auto' boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}  >
        <form onSubmit={handlesubmit}>
        <FormControl>
        <Flex  m='auto' w='90%' justifyContent="space-between" >
        <Box w='45%'>
        <FormLabel fontSize='18px' >Upload Image</FormLabel>
        <Flex><Image src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' h='70px' w='70px' />
        <input name="image" onChange={handleChange} style={{marginTop:"20px"}}  type='file' required />
        <Button mt='10px' bgColor='blue.300' _hover={{bgColor:"blue.200"}}>Upload</Button></Flex>
        </Box>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Upload Document</FormLabel>
        <Flex><Image src='https://www.freeiconspng.com/thumbs/document-icon/document-icon-10.jpg' h='70px' w='70px' />
        <input  name="document" style={{marginTop:"20px"}}  type='file'  onChange={handleChange} required />
        <Button mt='10px' bgColor='blue.300' _hover={{bgColor:"blue.200"}}>Upload</Button></Flex>
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Employee Code</FormLabel>
        <Input name="employeecode" placeholder='Employee Code' required  onChange={handleChange}/>
        </Box>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Employee Name</FormLabel>
        <Input name="employeename" placeholder='Employee Name' required  onChange={handleChange}/>
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel  fontSize='18px'>Date Of Birth</FormLabel>
        <Input name="dob" placeholder='Date Of Birth' type="date"  onChange={handleChange} required/>
        </Box>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Date Of Joining</FormLabel>
        <Input name="doj2" placeholder='Date Of Joining'  onChange={handleChange} type='date'required />
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Gender</FormLabel>
        <Select name="gender" onChange={handleChange}  required placeholder='Select Gender'>
        <option value='option1'>Male</option>
        <option value='option2'>Female</option>
        <option value='option3'>Others</option>
        </Select>
        </Box>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Mobile No.</FormLabel>
        <Input name="mobileno"  onChange={handleChange} required placeholder='Mobile No' type='number'  />
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel  fontSize='18px'>Phone</FormLabel>
        <Input name="phone" placeholder='Phone' type="number"  onChange={handleChange} required/>
        </Box>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Email</FormLabel>
        <Input name="email" placeholder='Email'  onChange={handleChange} type='email'required />
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Department Name</FormLabel>
        <Select onChange={(e)=>setDepartmentData(e.target.value)} required>
                  <option value="">Select Department</option>
                {
                   departmentData?departmentData.map((el)=><option value={el.departmentname}>{el.departmentname}</option>):null
                }
                </Select>
        </Box>
        <Box w='45%'>
        <FormLabel fontSize='18px' htmlFor="">Designation</FormLabel>
                <Select onChange={(e)=>setDesignationData(e.target.value)} required>
                  <option value="">Select Designation</option>
                {
                   designationData?designationData.map((el)=><option value={el.designationname}>{el.designationname}</option>):null
                }
                </Select>
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontSize='18px'>Country Name</FormLabel>
        <Select onChange={(e)=>setCountryData(e.target.value)} required>
                  <option value="">Select Country</option>
                {
                   countryData?countryData.map((el)=><option value={el.countryname}>{el.countryname}</option>):null
                }
                </Select>
        </Box>
        <Box w='45%'>
        <FormLabel fontSize='18px' htmlFor="">State Name</FormLabel>
        <Select onChange={(e)=>setStateData(e.target.value)} required>
              <option value="">Select State Name</option>
             {stateData?stateData.map((el)=><option value={el.state}>{el.state}</option>):null}
            </Select>
        </Box>
        </Flex>

        <Flex  m='auto' w='90%' justifyContent="space-between" mt='22px'>
        <Box w='45%'>
        <FormLabel fontSize='18px'>City Name</FormLabel>
        <Select onChange={(e)=>setCityData(e.target.value)} required>
              <option value="">Select City Name</option>
             {cityData?cityData.map((el)=><option value={el.cityname}>{el.cityname}</option>):null}
            </Select>
        </Box>
        <Box w='45%'>
        <FormLabel fontSize='18px' htmlFor="">Marital Status</FormLabel>
        <Select name="maritalstatus" onChange={handleChange} required>
        <option value='option1'>Married</option>
        <option value='option2'>UnMarried</option>
        <option value='option3'>Other</option>
            </Select>
        </Box>
        </Flex>
        
        <Button type='submit' bgColor={'blue.300'} mt='30px' _hover={{bgColor:"blue.200"}}>Submit</Button>
        <Button ml="30px" bgColor={'red.500'} mt='30px' _hover={{bgColor:"red.300"}}>Cancel</Button>
       
        </FormControl>
        </form>
    </Box>
    </div>
  )
}
