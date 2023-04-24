import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  position: 'relative',
  cursor: 'pointer',
})

export const TooltipSpan = styled('span', {
  position: 'absolute',
  backgroundColor: '$gray900',
  color: '$gray100',
  padding: '$3 $4',

  fontFamily: '$default',
  fontSize: '$sm',

  '&::before': {
    content: ' ',
    top: '-12px',
    left: '6px',
    border: 'solid transparent',
    borderWidth: '6px',
    borderBottomColor: '$gray900',
    height: '0',
    width: '0',
    position: 'absolute',
    pointerEvents: 'none',
    marginRight: 'calc(6px * -1)',
  },
})
