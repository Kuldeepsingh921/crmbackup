import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import { useMediaQuery } from '@chakra-ui/react'
import {Box,Flex,Image,Icon,Text} from "@chakra-ui/react"
import {AiFillHome, AiOutlineTable} from "react-icons/ai"
import {FaUserPlus} from "react-icons/fa"
import {MdPersonAddAlt, MdSchool} from "react-icons/md"
import {MdLibraryBooks} from "react-icons/md"
import {TbTruckDelivery} from "react-icons/tb"
import style from "./sidebar.module.css"
import {FaPeopleArrows} from "react-icons/fa"
import {FaChalkboardTeacher} from "react-icons/fa"
import {BsPatchQuestionFill} from "react-icons/bs"
import {MdCreateNewFolder} from "react-icons/md"
import {BsPersonFillAdd} from "react-icons/bs"
import {FaUnlockAlt} from "react-icons/fa"
import {BsPersonFillCheck} from "react-icons/bs"
import {FaRupeeSign} from "react-icons/fa"
import {GiNotebook} from "react-icons/gi"
import {AiFillMessage} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {FaUserLock} from "react-icons/fa"
import {AiFillSchedule} from "react-icons/ai"
import {MdManageAccounts} from "react-icons/md"
import {AiFillCalculator} from "react-icons/ai"
import {FaPeopleCarry} from "react-icons/fa"
import {TbPigMoney} from "react-icons/tb"
import {FaUserGraduate} from "react-icons/fa"
import {Link} from "react-router-dom"
import {FaDivide} from "react-icons/fa"
import {FaUserTie} from "react-icons/fa"
import {AiFillFlag} from "react-icons/ai"
import {BsFillBuildingsFill} from "react-icons/bs"
import {MdOutlineDirectionsBike} from "react-icons/md"
import {FaHandHoldingWater} from "react-icons/fa"
import {FaHospitalUser} from "react-icons/fa"
import {ImBooks} from "react-icons/im"
import {BsBank} from "react-icons/bs"
import {FaCity} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs"
import {SiGoogleads, SiGoogleclassroom} from "react-icons/si"
import {MdOutlineClass} from "react-icons/md"
import {GrStatusUnknown} from "react-icons/gr"
import {useSelector} from "react-redux"

const Sidebar1 = () => {
    const { collapseSidebar } = useProSidebar();
    const [isLargerThan800] = useMediaQuery('(min-width: 768px)')
    const auth=useSelector((store)=>store.authReducer)
  return (
    <div>
      <div>
      <Sidebar backgroundColor='#f6f9fc' fontFamily= "'Montserrat', sans-serif" style={{height:"100vh",position:"fixed",width:"20%"}}>
        <Box backgroundColor={"white"} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px;" >
        <Image src="https://hh-certificates.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2022/04/04170504/didm-logo.png" width="90%" margin={"auto"} paddingTop="20px"></Image>
        </Box>
     
  <Menu>
  <Flex gap="20px" color="black" marginTop="20px" marginLeft="10px">
                    <Image
                    width="50px"
                    height={"50px"}
                    borderRadius={"50%"}
                    src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                  />
                  <Box>
                    <Text fontWeight={"600"}>{auth.name}</Text>
                    <Text fontWeight={"600"}>{auth.role}</Text>
                  </Box>
                    </Flex>
  <MenuItem>
  <Flex gap="10px" alignItems={"center"} marginTop="10px">
                <Icon as={AiFillHome} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Dashboard</Text>
               </Flex>
               </MenuItem>
    <SubMenu label={<Flex gap="10px" alignItems={"center"} marginTop="10px">
                <Icon as={FaChalkboardTeacher} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Master</Text>
               </Flex>} backgroundColor="#ffffff">
                <Link to="master/organisation">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={FaUserGraduate} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Organisation</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/tax">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={FaDivide} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Tax</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/country">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={AiFillFlag} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Country</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/state">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={BsFillBuildingsFill} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">State</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/followup">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdOutlineDirectionsBike} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Follow Up</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/source">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={FaHandHoldingWater} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Source</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/department">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={FaHospitalUser} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Department</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/designation">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={FaUserTie} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Designation</Text>
               </Flex>
               </MenuItem>
                </Link>

               <Link to="master/qualification">
               <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Qualification</Text>
               </Flex>
               </MenuItem>
               </Link>
       
               <Link to="master/course">
               <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdLibraryBooks} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Course</Text>
               </Flex>
               </MenuItem>
               </Link>
               <Link to="master/subject">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={ImBooks} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Subject</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/bank">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={BsBank} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Bank</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/city">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={FaCity} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">City</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/employee">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={BsPeopleFill} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Employee</Text>
               </Flex>
               </MenuItem>
                </Link>
                <Link to="master/batch">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={SiGoogleclassroom} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Batch</Text>
               </Flex>
               </MenuItem>
                </Link>

               
              <Link to='master/leadstatus'>
              <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={GrStatusUnknown} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Leads Status</Text>
               </Flex>
               </MenuItem>
              </Link>
              

                <Link to="master/class">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdOutlineClass} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Class</Text>
               </Flex>
               </MenuItem>
                </Link>
               <Link to="master/modeofdelivery">
               <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={TbTruckDelivery} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Mode of delivery</Text>
               </Flex>
               </MenuItem>
               </Link>
             
    </SubMenu>
    <SubMenu label={<Flex gap="10px" alignItems={"center"} marginTop="10px">
                <Icon as={BsPatchQuestionFill} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Enquiry</Text>
               </Flex>}>
    <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={FaPeopleArrows} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Department</Text>
               </Flex>
               </MenuItem>
        <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Qualification</Text>
               </Flex>
               </MenuItem>
               <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdLibraryBooks} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Course Type</Text>
               </Flex>
               </MenuItem>
               <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={TbTruckDelivery} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Mode of delivery</Text>
               </Flex>
               </MenuItem>
              
    </SubMenu>
    <SubMenu label={<Flex gap="10px" alignItems={"center"} marginTop="10px">
                <Icon as={FaChalkboardTeacher} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Counsellor</Text>
               </Flex>}>
    <Link to={'/superadmindashboard/counsellortable'}>
    <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={AiOutlineTable} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Counsellors Table</Text>
               </Flex>
               </MenuItem>
    </Link>
       <Link to={'/superadmindashboard/createcounsellor'}>
       <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdPersonAddAlt} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Add Counsellor</Text>
               </Flex>
               </MenuItem>
       </Link>
              
    </SubMenu> 
  </Menu>
</Sidebar>;
      </div>
    </div>
  )
}
export default Sidebar1