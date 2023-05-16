import { FC, useCallback, useEffect, useState } from 'react'
import { getBookList } from '../../services/nytimes/nytimes'
import { Book } from '../../models/Book'
import Card from '../../components/Card/card'
import './books.css'
import Header from '../../components/Header/header'
import { useParams } from 'react-router-dom'

const Books: FC = () => {
  const [books, setBooks] = useState<Book[]>([])

  const [isLoading, setIsLoading] = useState(true)
  const { listName } = useParams()

  const handleSetBooks = useCallback(async () => {
    if(listName) {
      const categoriesList = await getBookList(listName)
      setBooks(categoriesList)
    }
    
    setIsLoading(false)
  }, [listName])

  useEffect(() => {
    handleSetBooks()
  }, [handleSetBooks])

  if (isLoading) {
    return <div>CARGANDO...</div>
  }
  return (
    <div>
      <Header />
      <div className="booksContainer">
        <div className="books">
          {books.map((book, index) => (
            <Card key={index} title={book.title} extraInfo={book.author} isDetails={true} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Books
