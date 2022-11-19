import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const theme: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  breakpoints: {
    xx: "1550px",
  },
  useSystemColorMode: true,
  components: {},
  styles: {
    global: (props: StyleFunctionProps) => ({
      "*": {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: "#272727",
      },
      p: {
        fontFamily: `'Montserrat', sans-serif`,
      },
      h1: {
        fontFamily: `'Bebas Neue', cursive !important`,
      },
      h2: {
        fontFamily: `'Bebas Neue', cursive !important`,
      },
      h3: {
        fontFamily: `'Bebas Neue', cursive !important`,
      },
      "a, Link": {
        textDecoration: "none",
        color: "unset",
        fontFamily: `'Montserrat', sans-serif`,
      },
      li: {
        listStyle: "none",
      },
    }),
  },
});
