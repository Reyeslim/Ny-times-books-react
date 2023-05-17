import { FC, memo } from 'react'
import { CustomButton } from './btnStyles'
import type { Props } from './types'

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <CustomButton onClick={onClick}>
      {children}
    </CustomButton>
  )
}

export default memo(Button)
