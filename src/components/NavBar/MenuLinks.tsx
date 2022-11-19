import { Box, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

type MenuLinksProps = {
  isOpen: boolean;
  isLoading?: boolean;
};

export const MenuLinks = ({ isOpen, isLoading }: MenuLinksProps) => {
  const router = useRouter();
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
        <Link href={""} passHref>
          {" "}
          <a>Home</a>
        </Link>

        <Link href={""} passHref>
          {" "}
          <a>Portfolio</a>
        </Link>

        <Link href={""} passHref>
          {" "}
          <a>Stack</a>
        </Link>

        <Link href={""} passHref>
          {" "}
          <a>Blog</a>
        </Link>
      </Stack>
    </Box>
  );
};
