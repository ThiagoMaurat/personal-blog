import { Text, FlexProps, useColorMode, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ToggleButtonDarkMode from "../ToogleButtonDarkMode";
import { MenuLinks } from "./MenuLinks";
import { MenuToggle } from "./MenuToggle";
import { NavBarContainer } from "./NavBarContainer";

type NavBarProps = {
  isLoading: boolean;
} & FlexProps;

export const NavBar = ({ isLoading, ...props }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode } = useColorMode();
  const { push } = useRouter();

  return (
    <NavBarContainer {...props}>
      <Text
        fontWeight={"bold"}
        fontSize="1.7rem"
        color={colorMode === "light" ? "gray.900" : "#FFFF"}
        cursor="pointer"
        onClick={() => push("/")}
      >
        Thiago🚀Dev
      </Text>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
