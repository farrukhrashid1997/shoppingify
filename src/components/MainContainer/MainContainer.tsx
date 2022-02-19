import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import AddItem from "../AddItem";
import Main from "../Main";
import Navbar from "../Navbar/Navbar";
import ShoppingList from "../ShoppingList";
import "./style.scss";
interface Props {}

const MainContainer = (props: Props) => {
  return (
    <Stack direction={["row"]} minH="100vh">
      <Flex flex={1} className="navbar" maxW={"65px"}>
        <Navbar />
      </Flex>
      <Flex flex={8} className="main" px={14} alignItems="center" flexDirection={"column"}>
        <Main />
      </Flex>
      <Flex flex={3} className="shopping-list" flexDirection={"column"}>
        <ShoppingList />
      </Flex>
    </Stack>
  );
};

export default MainContainer;
