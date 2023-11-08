import { FC } from 'react'
import { ModalProps } from './ModalProps'
import { cx } from '../../utils/cx'
import './Modal.css'

export const Modal: FC<ModalProps> = ({
  open,
  children,
  extraClassName,
  ariaLabelledBy,
  ariaDescribedby,
  onClose
}) => {
  if (!open) {
    return null
  }

  return (
    <div
      className={cx('modal', extraClassName)}
      role="dialog"
      aria-labelledby={ariaLabelledBy || 'modal-title'}
      aria-describedby={ariaDescribedby || 'modal-description'}
      aria-modal="true"
    >
      <div
        className={cx('modal-backdrop', extraClassName ? `${extraClassName}-backdrop` : '')}
        onClick={onClose}
      />
      <div className={cx('modal-content', extraClassName ? `${extraClassName}-content` : '')}>
        {children}
      </div>
    </div>
  )
}
