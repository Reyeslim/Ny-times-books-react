import { Category, NyTimesCategoriesResponse, normalizeCategory } from "../../models/category"
import { getNyBookCategories, setNyBookCategories } from "../storage/categories"
export const getNyCategories = async (): Promise<Category[]> => {
    const savedCategories = getNyBookCategories()

    if (!savedCategories || savedCategories.length <= 0) {
        const response = await fetch(
            `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=spsk5Ygzx4Db0WUZO8VOo80rHvWXe0aK`
        )
        const data: NyTimesCategoriesResponse = await response.json()
        if (data.status !== "OK") {
            return []
        }
        
        const mappedCategories = data.results.map(normalizeCategory)

        setNyBookCategories(mappedCategories)

        return mappedCategories
    }

    return savedCategories
}