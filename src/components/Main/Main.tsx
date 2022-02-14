import { Box, Flex, Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.scss";
interface Props {}

const Main = (props: Props) => {
  return (
    <Stack direction={["row"]} minH="100vh">
      <Flex flex={2} className="navbar">
        <Navbar />
      </Flex>
      <Flex flex={6} className="main">
        2
      </Flex>
      <Flex flex={4} className="shoppingList">
        3
      </Flex>
    </Stack>
  );
};

export default Main;
