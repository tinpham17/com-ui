import { ReactNode } from 'react'

export interface ModalProps {
  open: boolean
  children: ReactNode
  extraClassName?: string
  ariaLabelledBy?: string
  ariaDescribedby?: string
  onClose?: () => void
}
