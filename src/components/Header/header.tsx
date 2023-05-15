import { FC } from "react"
import './header.css'

const Header: FC = () => {
    return (
        <header className="headerContainer">
            <div className="headerContent">
                <h2 className="headerTitle">The New York Times</h2>
            </div>
        </header>
    )
}

export default Header