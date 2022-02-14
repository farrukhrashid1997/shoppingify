import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Cart from "../common/Cart";

export default function Navbar() {
  return (
    <VStack py={5} pl={5}>
      <Flex flex={1}>
        <Logo />
      </Flex>
      <Flex flex={10}></Flex>
      <Flex flex={1}>
        <Cart />
      </Flex>
    </VStack>
  );
}
