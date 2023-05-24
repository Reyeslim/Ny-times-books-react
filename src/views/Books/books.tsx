import { FC, memo } from 'react'
import Card from '../../components/Card/card'
import Header from '../../components/Header/header'
import { BooksList, Container, Content } from './booksStyles'
import useBookLogic from './logic'
import { Props } from './types'

const Books: FC<Props> = ({ onLogout }) => {
  const { isLoading, books } = useBookLogic()

  if (isLoading) {
    return <div>CARGANDO...</div>
  }
  return (
    <Container>
      <Header onLogout={onLogout} />
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

export default memo(Books)
