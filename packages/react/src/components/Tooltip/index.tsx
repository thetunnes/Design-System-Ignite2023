import { ReactNode, useState } from 'react'
import { TooltipContainer, TooltipSpan } from './styles'

export interface TooltipProps {
  children: ReactNode
  content: ReactNode
  delay: number
}

export function Tooltip(props: TooltipProps) {
  // let timeout
  const [isHovered, setIsHovered] = useState(false)

  const showTip = () => {
    setTimeout(() => {
      setIsHovered(true)
    }, props.delay || 400)
  }

  const hideTip = () => {
    // clearInterval(timeout)
    setIsHovered(false)
  }

  return (
    <TooltipContainer
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {isHovered && <TooltipSpan>{props.content}</TooltipSpan>}
    </TooltipContainer>
  )
}
