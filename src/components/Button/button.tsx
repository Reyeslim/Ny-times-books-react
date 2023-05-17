import { FC } from 'react'
import { CustomButton } from './btnStyles'
import type { Props } from './types'

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <CustomButton onClick={onClick}>
      {children}
    </CustomButton>
  )
}

export default Button
