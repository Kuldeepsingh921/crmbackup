import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const PageTitle = ({ title }) => {
  return (
    <Box bg={"#fff"} px={"15px"} py={"10px"} width={"100%"} textAlign="start" >
      <Heading fontSize={"23px"} fontWeight="500">{title}</Heading>
    </Box>
  );
};

export default PageTitle;