import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Figtree, ${base.fonts.heading}`,
    body: `Figtree, ${base.fonts.body}`,
  },
  styles: {
    global: {
      body: {
        bg: "#F6FBFF",
        color: "#293F48",
      },
    },
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  colors: {
    backgroundTeal: "#0E7490",
    backgroundTealHover: "#0A566A",
    textWhite: "#ECFEFF",
    textGray: "#656F78",
    backgroundDark: "#091F2A",
  },
});

export default theme;
