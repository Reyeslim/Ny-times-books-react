import { FC, memo } from 'react'
import { CustomButton } from './btnStyles'
import type { Props } from './types'
import { type } from 'os'

const Button: FC<Props> = ({ children, onClick, type = 'button' }) => {
  return (
    <CustomButton type={type} onClick={onClick}>
      {children}
    </CustomButton>
  )
}

export default memo(Button)
