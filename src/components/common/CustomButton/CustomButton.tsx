import { Button } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";

interface ICustomButton {
  bgColor?: string;
  textColor?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export default function CustomButton({ bgColor, onClick, text, textColor }: ICustomButton) {
  return (
    <Button color={textColor} bgColor={bgColor} onClick={onClick}>
      {text}
    </Button>
  );
}
