import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "55em",
  md: "67.5em",
  lg: "81em",
  xl: "85em",
  xxl: "88em",
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    transparent: "transparent",
    black: "#1a202c",
    white: "#fff",
  },
  breakpoints,
});

export default theme;
