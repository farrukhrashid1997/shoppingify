import { Flex } from "@chakra-ui/react";
import React from "react";
import "./style.scss";
import strings from "../../localization";
import CategoryItems from "./CategoryItems";
import { IItems } from "./types/IItems";

const data: IItems[] = [
  {
    id: 1,
    categoryId: 24,
    category: "Beverages",
    name: "Water",
  },
  {
    id: 1,
    categoryId: 25,
    category: "Beverages",
    name: "Water",
  },
  {
    id: 3,
    categoryId: 25,
    category: "Beverages",
    name: "Water",
  },
];

interface IPrev {
  [key: number]: IItems[];
}

export default function Main() {
  const categorizedData = data.reduce((prev: IPrev, cur: IItems) => {
    return { ...prev, [cur.categoryId]: [...(prev?.[cur?.categoryId] || []), cur] };
  }, {});

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
      <Flex flex={10} width="full" flexDirection={"column"}>
        {Object.keys(categorizedData).map((dataKey) => (
          <CategoryItems
            categoryTitle={categorizedData[parseInt(dataKey)][0].category}
            items={categorizedData[parseInt(dataKey)]}
          />
        ))}
      </Flex>
    </>
  );
}
