import type { Meta, StoryObj } from '@storybook/react'
import { Text, Tooltip, TooltipProps } from '@tunnes-ds-test/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,

  args: {
    children: <Text>Hover here</Text>,
    content: 'Content of a Tooltip',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
