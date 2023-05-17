import { FC, useCallback, useEffect, useState } from 'react'
import { getBookList } from '../../services/nytimes/nytimes'
import { Book } from '../../models/Book'
import Card from '../../components/Card/card'
import Header from '../../components/Header/header'
import { useParams } from 'react-router-dom'
import { BooksList, Container, Content } from './booksStyles'

const Books: FC = () => {
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

  if (isLoading) {
    return <div>CARGANDO...</div>
  }
  return (
    <Container>
      <Header />
      <Content>
        <BooksList>
          {books.map((book, index) => (
            <Card
              key={index}
              title={book.title}
              extraInfo={book.author}
              isDetails={true}
            />
          ))}
        </BooksList>
      </Content>
    </Container>
  )
}

export default Books
