import { Flex } from "@chakra-ui/react";
import React from "react";
import "./style.scss";
import strings from "../../localization";

export default function Main() {
  return (
    <>
      <Flex justifyContent={"space-around"} flex={2} width="full">
        <Flex className="shoppingify-text-main" flex={6}>
          <p>
            <span className="shoppingify-text-name">{strings.shoppingify} </span>
            {strings.shoppingifyInfo}
          </p>
        </Flex>
        <Flex flex={6}>{/* <input />  */}</Flex>
      </Flex>
      <Flex flex={10}>n</Flex>
    </>
  );
}
