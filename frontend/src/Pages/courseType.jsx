import React from 'react'
import {Box,Text,Flex,Input,Icon,Search,Label,Button, Table} from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"
import Modal from '../components/Modal'
import Tablediv from '../components/Table'
const CourseType = ({mode,remark}) => {
  return (
    <div>
      <Box textAlign={"start"} width="90%" margin="auto"  fontFamily={"sans-serif"}>
        <Text fontSize={"28px"} fontWeight="400">
            Course Type
        </Text>
        <Flex justifyContent={"space-between"} width="95%" marginTop="20px">
            <Input width="30%" placeholder={"Search"}></Input>
            {/* <Button backgroundColor={"#be1e2d"} color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}}>
                <Text fontSize={"18px"}>Add new node</Text>
            </Button> */}
            <Modal />
        </Flex>
       <Tablediv />
      </Box>
    </div>
  )
}

export default CourseType
