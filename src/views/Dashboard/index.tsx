import { FC, useCallback, useEffect, useState } from "react"
import Header from "../../components/Header/header"
import "./dashboard.css"
import Card from "../../components/Card/card"
import { getNyCategories } from "../../services/nytimes/nytimes"
import { Category } from "../../models/category"


const Dashboard: FC = () => {
    const [categories, setCategories] = useState<Category[]>([])


    const [isLoading, setIsLoading] = useState(true)

    const handleSetCategories = useCallback(async () => {
        const categoriesList = await getNyCategories()
        setCategories(categoriesList)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        handleSetCategories()
    }, [handleSetCategories])

    if (isLoading) {
        return (
            <div>
                CARGANDO...
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className="dashboardContent">
                <div className="dashboardCards">
                    {categories.map((category, title) => (<Card key={title} title={category.title} updated={category.updated} />))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard