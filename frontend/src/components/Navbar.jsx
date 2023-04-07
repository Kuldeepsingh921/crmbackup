import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Text,
  Icon
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {IoIosNotifications} from "react-icons/io"
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom"
import {signOut} from "../action/authAction"
import {useDispatch, useSelector} from "react-redux"
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch=useDispatch()
  const auth=useSelector((store)=>store.authReducer)
  return (
    <div >
      <Box backgroundColor={colorMode==="light"?"white":"#171923"} px={4} width="100%"  height="88px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} paddingTop="20px">
          <Box width="50%">
          <Marquee gradient={false}>
            <Text fontSize="18px" color="#c63a47">
            It's not what you sell that matters as much as how you sell it
            </Text>
  
</Marquee>
          </Box>

          <Flex alignItems={'center'} gap="20px">
          <Box>
            <Image src="https://www.kindpng.com/picc/m/192-1929235_indian-flag-button-india-flag-button-png-transparent.png" width="35px" borderRadius={"50%"}></Image>
          </Box>
          <Box>
                <Icon as={IoIosNotifications} fontSize="30px"></Icon>
              </Box>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} backgroundColor="white">
                {colorMode === 'light' ? <MoonIcon fontSize={'22px'}/> : <SunIcon fontSize={'25px'}/>}
              </Button>
              

              <Menu zindex={1}>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  style={{ zIndex: 1 }}
                  >
                    <Flex gap="20px" color="black">
                    <Image
                    width="50px"
                    height={"50px"}
                    borderRadius={"50%"}
                    src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                  />
                  <Box>
                    <Text>{auth.name}</Text>
                    <Text>{auth.role}</Text>
                  </Box>
                    </Flex>
                  
                </MenuButton>
                <MenuList alignItems={'center'} style={{ zIndex: 1 }}>
                  <br />
                  <Center>
                    <Image
                      width="200px"
                      height={"200px"}
                      borderRadius={"50%"}
                      src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Text fontWeight="bold">{auth.name}</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem style={{ zIndex: 10 }}>Your Servers</MenuItem>
                  <Link to="/superadminDashboard/manageprofile"><MenuItem>Manage Profile</MenuItem></Link>
                  <MenuItem style={{ zIndex: 10 }} onClick={()=>dispatch(signOut())}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}