import { createStitches } from "@stitches/react";
import { STBlueColors } from "./theme";

export const { theme, styled, css } = createStitches({
  theme: {
    color: {
      ...STBlueColors,
    },
  },
});
