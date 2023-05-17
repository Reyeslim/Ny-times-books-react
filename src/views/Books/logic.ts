import { useCallback, useEffect, useState } from 'react'
import { Book } from '../../models/Book'
import { useParams } from 'react-router-dom'
import { getBookList } from '../../services/nytimes/nytimes'

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

  return {
    books,
    isLoading
  }
}

export default useBookLogic