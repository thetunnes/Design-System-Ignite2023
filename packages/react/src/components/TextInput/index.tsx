import { Input, Prefix, TextInputContainer } from './styles'
import { ComponentProps, ElementRef, forwardRef } from 'react'

export type TextInputProps = {
  prefix?: string
} & ComponentProps<typeof Input>

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
