import { Flex } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as DrinkIcon } from "../../../assets/icons/drink.svg";
import strings from "../../../localization";
import CustomButton from "../../common/CustomButton";
import "./style.scss";

export default function ListBanner() {
  return (
    <Flex flex={2} className="list-banner-container" flexDir={"row"}>
      <Flex flex={4}>
        <DrinkIcon className="list-banner-drink-icon" />
      </Flex>
      <Flex flex={8} flexDirection="column" justifyContent={"space-around"}>
        <Flex className="list-banner-text" flex={6} alignItems={"center"}>
          {strings.didntFind}
        </Flex>
        <Flex className="list-banner-button" flex={6}>
          <CustomButton text={strings.addItem} bgColor={"white"} onClick={() => {}} />
        </Flex>
      </Flex>
    </Flex>
  );
}
