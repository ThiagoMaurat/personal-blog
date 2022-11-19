import { Box } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};

export const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <IoClose fontSize={"1.5rem"} />
      ) : (
        <MdOutlineMenu fontSize={"1.5rem"} />
      )}
    </Box>
  );
};
