import { Flex } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as DrinkIcon } from "../../../assets/icons/drink.svg";
import strings from "../../../localization";
import "./style.scss";

export default function ListBanner() {
  return (
    <Flex flex={2} className="list-banner-container" flexDir={"row"}>
      <Flex flex={4} className="list-banner-drink-icon">
        <DrinkIcon />
      </Flex>
      <Flex flex={8} flexDirection="column">
        <div className="list-banner-text">{strings.didntFind}</div>
        <div>asdasd</div>
      </Flex>
    </Flex>
  );
}
