import { NyTimesBooksResponse, normalizeBook } from '../../models/Book'
import {
  Category,
  NyTimesCategoriesResponse,
  normalizeCategory,
} from '../../models/category'
import { getNyBookCategories, setNyBookCategories } from '../storage/categories'
export const getNyCategories = async (): Promise<Category[]> => {
  const savedCategories = getNyBookCategories()

  if (!savedCategories || savedCategories.length <= 0) {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_NY_KEY}`
    )
    const data: NyTimesCategoriesResponse = await response.json()
    if (data.status !== 'OK') {
      return []
    }

    const mappedCategories = data.results.map(normalizeCategory)

    setNyBookCategories(mappedCategories)

    return mappedCategories
  }

  return savedCategories
}

export const getBookList = async (listName: string) => {
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${process.env.REACT_APP_NY_KEY}`
  )
  const data: NyTimesBooksResponse = await response.json()

  if (data.status !== 'OK') {
    return []
  }

  return data.results.books.map(normalizeBook)
}
