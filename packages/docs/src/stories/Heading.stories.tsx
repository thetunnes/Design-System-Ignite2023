import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@tunnes-ds-test/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Ex qui ea qui ex irure magna.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading 1 text',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the heading will always be an h2, this tag can be changed with the `as` attribute',
      },
    },
  },
}
