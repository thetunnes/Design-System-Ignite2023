import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors } from './../../../tokens/src/colors'

import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@tunnes-ds-test/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
