import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function ToogleButtomDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={() => toggleColorMode()}
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.600"}
    >
      {colorMode === "dark" ? (
        <BsSunFill color={colorMode === "dark" ? "#FFFF" : "#FFFF"} />
      ) : (
        <BsFillMoonFill />
      )}
    </Button>
  );
}
