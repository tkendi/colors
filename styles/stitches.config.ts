import { createStitches } from "@stitches/react";
import { themes  } from "./theme";

export const { theme, styled, css } = createStitches({
  theme: {
    color: {
      ...themes
    },
    fonts: {
      SUIT: 'SUIT Variable, sans-serif'
    }
  },
});
