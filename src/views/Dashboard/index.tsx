import { FC } from "react"
import Header from "../../components/Header/header"
import { cards } from "./constants"
import "./dashboard.css"
import Card from "../../components/Card/card"
import { getNyCategories } from "../../services/nytimes/nytimes"


const Dashboard: FC = () => {
    getNyCategories()

    return (
        <div>
            <Header />
            <div className="dashboardContent">
                <div className="dashboardCards">
                    {cards.map(card => (<Card />))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard