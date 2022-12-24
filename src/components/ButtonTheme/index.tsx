import { Button } from "@chakra-ui/react";
import React from "react";

interface ButtonThemeProps {
  content: string;
}

function ButtonTheme(props: ButtonThemeProps) {
  const { content } = props;
  return <Button>{content}</Button>;
}

export default ButtonTheme;
