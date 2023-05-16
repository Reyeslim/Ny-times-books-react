import { FC } from 'react'
import type { Props } from './types'
import './button.css'

const Button: FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick} className='detailsBtn'>{children}</button>
}

export default Button
