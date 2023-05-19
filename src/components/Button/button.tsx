import { FC, memo } from 'react'
import { CustomButton } from './btnStyles'
import type { Props } from './types'

const Button: FC<Props> = ({
  className,
  children,
  onClick,
  type = 'button',
  variant = 'primary'
}) => {
  return (
    <CustomButton $variant={variant} className={className} type={type} onClick={onClick}>
      {children}
    </CustomButton>
  )
}

export default memo(Button)
