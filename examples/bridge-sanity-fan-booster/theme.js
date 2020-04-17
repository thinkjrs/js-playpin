import React from "react";
import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["40em", "52em", "64em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
    primary: {
      "50": "#e9f5f2",
      "100": "#d4dcd9",
      "200": "#bbc3be",
      "300": "#a1aba5",
      "400": "#87938b",
      "500": "#6d7972",
      "600": "#555f58",
      "700": "#323c34",
      "800": "#232924",
      "900": "#272727"
    },
    accent: {
      "50": "#ede4d3",
      "100": "#fbe3b2",
      "200": "#f6d086",
      "300": "#f1be58",
      "400": "#eca419",
      "500": "#d49212",
      "600": "#a5710b",
      "700": "#775105",
      "800": "#483100",
      "900": "#1d0f00"
    }
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: "0 0 3000 3163"
    }
  }
};

export default theme;