import { FC } from "react"
import "./card.css"
import { Props } from "./Types"

const Card: FC<Props> = ({title, updated}) => {
    return (
        <div className="cardContainer">
            <div className="cardContent">
                <div className="cardHeader">
                    {title}
                </div>
                <div className="cardFooter">
                    <div className="cardFooterContent">
                    {updated}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card