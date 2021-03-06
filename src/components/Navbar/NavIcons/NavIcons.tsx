import { Flex, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import strings from "../../../localization";
import "./style.scss";

export default function NavIcons() {
  const mainIcons = [
    { iconName: "format_list_bulleted" },
    { iconName: "refresh" },
    { iconName: "insert_chart" },
  ];
  const [active, setActive] = useState<number>(0);
  return (
    <>
      {mainIcons.map((i, index) => (
        <Tooltip hasArrow label={strings.items} placement="right">
          <Flex flexDirection={"row"} onClick={() => setActive(index)}>
            <div className={`nav-icons-div${active === index ? "-active" : ""}`} />
            <span className={`material-icons-outlined nav-icons`}>{i.iconName}</span>
          </Flex>
        </Tooltip>
      ))}
    </>
  );
}
