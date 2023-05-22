import { Book } from '../../models/Book'

const NY_BOOKS_LIST_KEY = 'nyBooks'

const buildKey = (listName: string) => `${NY_BOOKS_LIST_KEY}-${listName}`

export const getCachedBookList = (listName: string): Book[] => {
  const key = buildKey(listName)
  const response = window.localStorage.getItem(key)
  return response ? JSON.parse(response) : []
}

export const setCachedBookList = (listName: string, books: Book[]) => {
    const key = buildKey(listName)
  window.localStorage.setItem(key, JSON.stringify(books))
}
