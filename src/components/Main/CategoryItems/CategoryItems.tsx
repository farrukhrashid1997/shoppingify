import { Flex } from "@chakra-ui/react";
import React from "react";
import ItemBox from "./ItemBox";
import "./style.scss";
import { ICategoryItems } from "./types/ICategoryItems";

export default function CategoryItems({ categoryTitle, items }: ICategoryItems) {
  return (
    <Flex flexDirection={"column"} className="category-items-container">
      <Flex className="category-items-title" pb={4} flex={1}>
        {categoryTitle}
      </Flex>
      <Flex>
        {items.map((item) => (
          <ItemBox text={item.name} />
        ))}
      </Flex>
    </Flex>
  );
}
