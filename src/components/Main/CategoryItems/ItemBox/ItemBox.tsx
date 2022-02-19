import { Flex } from "@chakra-ui/react";
import React from "react";
import "./style.scss";

interface IItemBoxProps {
  text: string;
}

export default function ItemBox({ text }: IItemBoxProps) {
  return (
    <Flex className="item-box-main" justify={"space-between"}>
      <div>{text}</div>
      <span className="material-icons item-box-icon">add</span>
    </Flex>
  );
}
