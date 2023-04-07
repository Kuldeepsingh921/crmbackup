import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";

const PageTitle = ({ title }) => {
  return (
    <Box bg={"#fff"} px={"40px"} py={"18px"} width={"100%"} textAlign="start" >
      <Heading fontSize={"26px"} fontWeight="500">{title}</Heading>
    </Box>
  );
};

export default PageTitle;