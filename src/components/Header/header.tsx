import { FC, memo } from 'react'
import { Container, Content, Title } from './headerStyles'

const Header: FC = () => {
  return (
    <Container>
      <Content>
        <Title>The New York Times</Title>
      </Content>
    </Container>
  )
}

export default memo(Header)
