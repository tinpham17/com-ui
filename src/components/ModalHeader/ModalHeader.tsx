import { FC } from 'react'
import { ModalHeaderProps } from './ModalHeaderProps'
import { cx } from '../../utils/cx'
import './ModalHeader.css'

export const ModalHeader: FC<ModalHeaderProps> = ({
  title,
  extraClassName,
}) => {
  return (
    <div className={cx('modal-header', extraClassName)}>
      <div className={cx('modal-header-title', extraClassName ? `${extraClassName}-title` : '')}>
        { title }
      </div>
    </div>
  )
}
