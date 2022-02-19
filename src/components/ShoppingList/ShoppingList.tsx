import { Flex } from "@chakra-ui/react";
import React from "react";
import ListBanner from "./ListBanner";

function ShoppingList() {
  return (
    <>
      <ListBanner />
      <Flex flex={8}></Flex>
      <Flex flex={2}></Flex>
    </>
  );
}

export default ShoppingList;
