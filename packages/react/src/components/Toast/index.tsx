import { useEffect, useState } from 'react'
import { BtnCloseContainer, ToastContainer, ToastStyled } from './styles'
import { X } from 'phosphor-react'

interface ISingleToast {
  id: number
  title: string
  content: string
}

export interface ToastProps {
  list: Array<ISingleToast>
  pos: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}
// extends ComponentProps<typeof ToastStyled> {}

export function Toast({ list, pos = 'bottom-right' }: ToastProps) {
  const [listToast, setListToast] = useState<Array<ISingleToast>>([])
  // const timer = 5000

  function deleteToast(idToast: number) {
    setListToast((prevList) => prevList.filter((toast) => toast.id !== idToast))
  }

  useEffect(() => {
    setListToast(list)
  }, [])

  return (
    <ToastContainer className={pos}>
      {listToast.map((toast) => (
        <ToastStyled key={toast.id}>
          <BtnCloseContainer onClick={() => deleteToast(toast.id)}>
            <X />
          </BtnCloseContainer>
          <section>
            <header>{toast.title}</header>
            <p>{toast.content}</p>
          </section>
        </ToastStyled>
      ))}
    </ToastContainer>
  )
}
