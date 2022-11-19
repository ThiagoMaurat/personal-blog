import { Text, FlexProps } from "@chakra-ui/react";
import { useState } from "react";
import { MenuLinks } from "./MenuLinks";
import { MenuToggle } from "./MenuToggle";
import { NavBarContainer } from "./NavBarContainer";

type NavBarProps = {
  isLoading: boolean;
} & FlexProps;

export const NavBar = ({ isLoading, ...props }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Text fontWeight={"bold"} fontSize="1.8rem">
        ThiagoDev
      </Text>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
