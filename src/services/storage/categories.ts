import { Category } from "../../models/category"

const NY_BOOKS_CATEGORY_KEY = "nyBooksLists"

export const getNyBookCategories = (): Category[] => {
    const response = window.localStorage.getItem(NY_BOOKS_CATEGORY_KEY)
    return response ? JSON.parse(response) : []
}

export const setNyBookCategories = (categories: Category[]) => {
    window.localStorage.setItem(NY_BOOKS_CATEGORY_KEY, JSON.stringify(categories))
}