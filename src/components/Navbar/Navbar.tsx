import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Cart from "./Cart";
import NavIcons from "./NavIcons/NavIcons";

export default function Navbar() {
  return (
    <VStack py={5}>
      <Flex flex={3}>
        <Logo />
      </Flex>
      <Flex flex={6} flexDirection="column" justifyContent={"space-evenly"}>
        <NavIcons />
      </Flex>
      <Flex flex={3} alignItems="flex-end">
        <Cart />
      </Flex>
    </VStack>
  );
}
