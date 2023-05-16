import { FC, useCallback } from 'react'
import './card.css'
import type { Props } from './Types'
import Button from '../Button/button'

const Card: FC<Props> = ({ title, extraInfo, isDetails = false, onClick }) => {
  const handleClick = useCallback(() => {
    if(onClick) {
      onClick()
    }
  }, [onClick])
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <div className="cardHeader">{title}</div>
        <div className="cardFooter">
          <div className="cardFooterContent">
            <div className="extraInfo">
                {extraInfo}
                </div>
            {!isDetails && <Button onClick={handleClick}>Detalles</Button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
