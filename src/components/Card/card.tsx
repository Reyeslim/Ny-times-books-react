import { FC } from "react"
import "./card.css"

const Card: FC = () => {
    return (
        <div className="cardContainer">
            <div className="cardContent">
                <div className="cardHeader">
                    titulo
                </div>
                <div className="cardFooter">
                    contenido
                </div>
            </div>
        </div>
    )
}

export default Card