import { FC } from 'react'
import { ModalFooterProps } from './ModalFooterProps'
import { cx } from '../../utils/cx'
import './ModalFooter.css'

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
  extraClassName,
}) => {
  return (
    <div className={cx('modal-footer', extraClassName)}>
      { children }
    </div>
  )
}
