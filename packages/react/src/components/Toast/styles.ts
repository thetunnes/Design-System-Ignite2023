import { keyframes, styled } from '../../styles'

const toastInRight = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

export const ToastContainer = styled('div', {
  position: 'absolute',
  // bottom: '$8',
  // right: '$8',

  '&.top-right': {
    top: '$8',
    right: '$8',
  },
  '&.top-left': {
    top: '$8',
    left: '$8',
  },
  '&.bottom-right': {
    bottom: '$8',
    right: '$8',
  },
  '&.bottom-left': {
    bottom: '$8',
    left: '$8',
  },
})

export const ToastStyled = styled('div', {
  // position: 'absolute',
  // bottom: '$8',
  // right: '$8',

  width: '$80',

  animation: `${toastInRight} 0.7s`,

  backgroundColor: '$gray800',
  borderColor: '$gray600',
  borderWidth: '1px',
  borderRadius: '$sm',
  padding: '$4 $5',

  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '$1',
    fontFamily: '$default',
  },

  header: {
    color: '$white',
    fontSize: '$xl',
    fontWeight: '$bold',
  },

  p: {
    color: '$gray200',
    fontSize: '$sm',
    fontWeight: '$regular',
    margin: '0',
  },
})

export const BtnCloseContainer = styled('button', {
  width: '$5',
  height: '$5',
  color: '$gray200',

  background: 'none',
  border: '0',

  svg: {
    width: '$5',
    height: '$5',
  },

  '&:hover': {
    cursor: 'pointer',
    filter: 'brightness(0.8)',
    transition: 'filter 0.4s',
  },
})
