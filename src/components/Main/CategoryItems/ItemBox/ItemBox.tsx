import { Flex } from "@chakra-ui/react";
import React from "react";
import "./style.scss";

interface IItemBoxProps {
  text: string;
  flex: number;
}

export default function ItemBox({ text, flex }: IItemBoxProps) {
  return (
    <Flex className="item-box-main" justify={"space-between"} flex={flex}>
      <div>{text}</div>
      <span className="material-icons item-box-icon">add</span>
    </Flex>
  );
}
