import React from 'react'
import Navbar from '../components/Navbar'
import {Flex,Box} from "@chakra-ui/react"
import Sidebar from '../components/Sidebar'
import Sidebar1 from '../components/Sidebar1'
import {Outlet} from "react-router-dom"
const Home = () => {
  return (
    <div>
        <Flex>
          <Box width="20%">
          <Sidebar1 />
          </Box>
          <Box width="80%">
            <Navbar />
            <Outlet />
          </Box>
         </Flex>
        
    </div>
  )
}

export default Home
