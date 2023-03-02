import { Input, Prefix, TextInputContainer } from './styles'
import { ComponentProps } from 'react'

export type TextInputProps = {
  prefix?: string
} & ComponentProps<typeof Input>

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
