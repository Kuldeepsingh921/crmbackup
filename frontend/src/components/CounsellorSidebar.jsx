import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import { useMediaQuery } from '@chakra-ui/react'
import {Box,Flex,Image,Icon,Text} from "@chakra-ui/react"
import {AiFillHome} from "react-icons/ai"
import style from "./sidebar.module.css"
import {FaChalkboardTeacher} from "react-icons/fa"
import {Link} from "react-router-dom"
import {SiGoogleadsense} from "react-icons/si"
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
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Counsellor</Text>
               </Flex>} backgroundColor="#ffffff">
                <Link to="singlecounsellor/leadstable">
                <MenuItem>
        <Flex gap="10px" alignItems={"center"}>
                <Icon as={SiGoogleadsense} fontWeight={"500"} fontSize="20px" color="#818194" textAlign="start"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194" textAlign="start">Counsellor Leads</Text>
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