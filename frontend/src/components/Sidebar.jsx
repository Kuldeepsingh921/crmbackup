import React from 'react'
import {Box,Flex,Image,Icon,Text} from "@chakra-ui/react"
import {AiFillHome} from "react-icons/ai"
import {FaUserPlus} from "react-icons/fa"
import {MdSchool} from "react-icons/md"

const Sidebar = () => {
  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"20%",fontFamily: "'Montserrat', sans-serif"}}>
        <Box >
        <Image src="https://hh-certificates.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2022/04/04170504/didm-logo.png" width="80%" margin={"auto"}></Image>
        </Box>
        <Box textAlign={"start"} width="80%" margin="auto">
              <Text fontSize={"20px"} fontWeight="600" color="#52526c">General</Text>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={AiFillHome} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Dashboard</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={FaUserPlus} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Add User</Text>
               </Flex>
        </Box>
        <Box textAlign={"start"} id="masters" lineHeight={"40px"} width="80%" margin="auto">
              <Text fontSize={"20px"} fontWeight="600" color="#52526c">Masters</Text>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>
               <Flex gap="10px" alignItems={"center"}>
                <Icon as={MdSchool} fontWeight={"500"} fontSize="20px" color="#818194"></Icon>
                <Text fontWeight={"600"} fontSize="18px" color="#818194">Qualification</Text>
               </Flex>

        </Box>
    </div>
  )
}

export default Sidebar
 