import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    Image,
    FormLabel,
    Link,
    useColorModeValue,
    HStack,
    FormControl,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';

import { useState,useEffect } from 'react';
  
import { useNavigate } from 'react-router-dom';

import {signIn} from "../action/authAction"
  
  export default function Login() {
   
    const auth=useSelector((store)=>store.authReducer)
        console.log(auth)
    const dispatch = useDispatch()

    const navigate=useNavigate()


    useEffect(()=>{
       if(auth.token){
        navigate('/superadmindashboard')
       }
    },[auth])


    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const handleEmailChange=(e)=>{
        setEmail(e.target.value)

    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)

    }
    const handleSubmit=()=>{
        
      dispatch(signIn({email:email,password:password}))
     

        navigate("/")
      
    }
    return (
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
            
          <Stack spacing={{ base: 1, md: 1 }}>
          <Image  h='250px' w='250px' src='https://cnswebtechnologies.com/newsitecss/image/enterprise/logos/logo20.png' />
            <Text
              lineHeight={1.5}
              fontFamily={"Times New Roman"}
              fontWeight='bold'
              fontSize={{ base: 'sm', sm: 'md', md: 'xl', lg: 'xl' }}>
              <span style={{color:"green"}}><em>CNS WEB TECHNOLOGIES (P) LTD</em></span> provides superior services for managing the implementation of Internet Development Systems as well as Software System in the industry, serving both the domestic and international.
            </Text>
            
          </Stack>
          <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.100', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login To Your Account!
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            
            <FormControl  id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input  value={email} type="email" onChange={handleEmailChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={password} onChange={handlePasswordChange} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </Container>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
          zIndex={-3}
        />
      </Box>
    );
  }
  
  export const Blur = (props) => {
    return (
      <Icon
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };