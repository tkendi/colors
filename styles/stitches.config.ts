import { createStitches } from '@stitches/react';
import { themes } from './theme';
import { generateMdeia } from './breakPoints/createMedia';

export const { theme, styled, css } = createStitches({
  media: {
    ...generateMdeia(),
  },
  theme: {
    color: {
      ...themes,
    },
    fonts: {
      SUIT: 'SUIT Variable, sans-serif',
    },
  },
});
