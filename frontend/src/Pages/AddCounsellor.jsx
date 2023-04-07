import React, { useEffect, useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  FormHelperText,
  InputRightElement,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateCounsellor = () => {
   const auth=useSelector((store)=>store.authReducer)
   console.log(auth)
   const {token}=auth
  const [show, setShow] = React.useState(false);

  const [adddata, setData] = useState({});

  const handleClick = () => setShow(!show);
  const toast = useToast()

  const handleChange = (e) => {
    setData({
      ...adddata,
      [e.target.name]: e.target.value,
    });
  };

  console.log(adddata)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/counsellor/createcounsellor`,adddata,{
      
        headers: {
          Authorization : token,
          "Content-Type":"application/json"
          }
    })
    .then((res)=>{
      console.log(res.data)
      toast({
        title: 'Counsellor created Succesfully',
        description: "thank you for creating counsellor",
        status: 'success',
        position: "top-center",
        duration: 2000,
        isClosable: true,
      })
    })
    .catch((err)=>{
      toast({
        title: 'Counsellor is not created ',
        description: "Email or Phone No. already exists!",
        status: 'error',
        position: "top-center",
        duration: 2000,
        isClosable: true,
      })
    })
  };

  return (
    <div
      style={{ width: "90%", margin: "auto", fontFamily: "Times New Roman" }}
    >
      <Text textAlign={"start"} mb="1%" mt='1%' fontSize="24px" fontWeight="600">
        Create Counsellor
      </Text>
      <Box
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        padding="20px"
        borderRadius={"20px"}
      >
        <form onSubmit={handleSubmit}>
          <FormControl mr="5%" isRequired>
            <FormLabel htmlFor="first-name" fontWeight={"normal"}>
              Full Name
            </FormLabel>
            <Input
              onChange={handleChange}
              id="first-name"
              name="name"
              placeholder="Full name"
            />
          </FormControl>

          <FormControl mt="2%" isRequired>
            <FormLabel htmlFor="email" fontWeight={"normal"}>
              Email Address
            </FormLabel>
            <Input
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Enter Email Address"
              name="email"
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl mt="2%" isRequired>
            <FormLabel htmlFor="email" fontWeight={"normal"}>
              Enter Phone Number
            </FormLabel>
            <Input
              onChange={handleChange}
              id="number"
              type="text"
              placeholder="Enter Phone Number"
              maxLength={10}
              name="phone"
            />
            <FormHelperText >
              We'll never share your Phone Number.
            </FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                onChange={handleChange}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name="password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl mt="2%" size="md" isRequired>
            <FormLabel htmlFor="email" fontWeight={"normal"}>
              Enter Website
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon children="https://" />
              <Input onChange={handleChange} placeholder="mysite" name="web" />
              <InputRightAddon children=".com" />
            </InputGroup>
          </FormControl>
         
            <Button
              type="submit"
              marginTop="20px"
              backgroundColor="#FF6E31"
              color="white"
              _hover={{ transform: "scale(1.1)", transition: "0.5s" }}
            >
              Submit
            </Button>
         
        </form>
      </Box>
    </div>
  );
};
export default CreateCounsellor;
