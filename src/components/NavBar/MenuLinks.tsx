import { Box, Stack } from "@chakra-ui/react";
import Link from "next/link";

type MenuLinksProps = {
  isOpen: boolean;
  isLoading?: boolean;
};

export const MenuLinks = ({ isOpen, isLoading }: MenuLinksProps) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={16}
        align={"center"}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[8, 8, 0, 0]}
        fontWeight="normal"
      >
        <Link href={""}> Home</Link>

        <Link href={""}> Portfolio</Link>

        <Link href={""}> Stack</Link>

        <Link href={""}> Blog</Link>
      </Stack>
    </Box>
  );
};
