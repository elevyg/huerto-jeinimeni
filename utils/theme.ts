import { spacing } from "./units";
import "../src/css/typography.css";

const white = "#fff";
const black = "#111";

const breakpoints = {
  xsmall: 500,
  small: 700,
  medium: 900,
  large: 1040,
  xlarge: 1200
}


const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: "#05594C",
    light: "#CD8D59",
    dark: "#7D4312",
    contrastText: white,
  },
  error: {
    main: "#A51C30",
    light: "#A7333F",
    contrastText: white,
  },
  grey: {
    100: "#EAEAEA",
    200: "#C9C5C5",
    300: "#888",
    400: "#666",
  },
};

const shadows = {
  0: "none",
  1: "0px 5px 10px rgba(0, 0, 0, 0.12)",
  2: "0px 8px 30px rgba(0, 0, 0, 0.24)",
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
  customFont: "Nexa Rust",
  mainFont: "Billabong"
};

const shape = {
  borderRadius: spacing["xxsmall"],
};

export const theme = {
  breakpoints,
  palette,
  shadows,
  typography,
  shape,
};
