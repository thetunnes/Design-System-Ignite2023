import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@tunnes-ds-test/react'

export default {
  title: 'Data display/Toast',
  component: Toast,

  args: {
    list: [
      {
        id: 1,
        title: 'Agendamento realizado',
        content: 'Quarta-feira, 23 de Outubro às 16h',
      },
    ],
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const TopRight: StoryObj<ToastProps> = {
  args: {
    list: [
      {
        id: 1,
        title: 'Agendamento realizado',
        content: 'Quarta-feira, 23 de Outubro às 16h',
      },
    ],
    pos: 'top-right',
  },
}
