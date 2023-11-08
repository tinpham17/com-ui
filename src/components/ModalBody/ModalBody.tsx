import { FC } from 'react'
import { ModalBodyProps } from './ModalBodyProps'
import { cx } from '../../utils/cx'
import './ModalBody.css'

export const ModalBody: FC<ModalBodyProps> = ({
  children,
  extraClassName,
}) => {
  return (
    <div className={cx('modal-body', extraClassName)}>
      { children }
    </div>
  )
}
