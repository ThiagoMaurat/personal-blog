import { Box, Stack, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { useCallback } from "react";

type MenuLinksProps = {
  isOpen: boolean;
  isLoading?: boolean;
};

export const MenuLinks = ({ isOpen, isLoading }: MenuLinksProps) => {
  const { colorMode } = useColorMode();
  const { asPath } = useRouter();

  const CheckRouterMatchesLabel = useCallback(
    (label: string) => {
      if (asPath.includes(label.toLowerCase())) {
        return true;
      } else if (asPath === "/" && label === "Home") {
        return true;
      }
      return false;
    },
    [asPath]
  );

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
        w="100%"
        fontWeight="normal"
        color={colorMode === "dark" ? "whiteAlpha.900" : "gray.900"}
      >
        <Link
          href={"/"}
          style={
            CheckRouterMatchesLabel("Home")
              ? {
                  borderBottom: "1px solid #35A5F5",
                  borderBottomWidth: "3px",
                  color: "gray.300",
                  fontWeight: "600",
                }
              : undefined
          }
          className={styles.linkMenu}
        >
          Home
        </Link>

        <Link
          href={"/blog"}
          style={
            CheckRouterMatchesLabel("Blog")
              ? {
                  borderBottom: "1px solid #35A5F5",
                  borderBottomWidth: "3px",
                  color: "gray.300",
                  fontWeight: "600",
                }
              : undefined
          }
          className={styles.linkMenu}
        >
          Blog
        </Link>
      </Stack>
    </Box>
  );
};
