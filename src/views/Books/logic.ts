import { useCallback, useEffect, useState } from 'react'
import { Book } from '../../models/Book'
import { useParams } from 'react-router-dom'
import { getBookList } from '../../services/nytimes/nytimes'
import {
  getCachedBookList,
  setCachedBookList,
} from '../../services/storage/books'

const useBookLogic = () => {
  const [books, setBooks] = useState<Book[]>([])

  const [isLoading, setIsLoading] = useState(true)
  const { listName } = useParams()

  const handleSetBooks = useCallback(async () => {
    if (listName) {
      const categoriesList = await getBookList(listName)
      setBooks(categoriesList)
    }

    setIsLoading(false)
  }, [listName])

  useEffect(() => {
    handleSetBooks()
  }, [handleSetBooks])

  const handleRemoveBook = useCallback(
    (bookTitle: string) => {
      if (listName) {
        const obtainedBook = getCachedBookList(listName)
        const filteredBooks = obtainedBook.filter(
          (book) => book.title !== bookTitle
        )
        setBooks(filteredBooks)
        setCachedBookList(listName, filteredBooks)
      }
    },
    [listName]
  )

  return {
    books,
    isLoading,
    handleRemoveBook,
  }
}

export default useBookLogic
