import { FC, memo } from 'react'
import { Button, Container, Content, Title } from './headerStyles'
import useLogic from './logic'
import { Props } from './types'

const Header: FC<Props> = ({ onLogout }) => {
  const { handleLogout } = useLogic(onLogout)
  return (
    <Container>
      <Content>
        <Title>The New York Times</Title>
        <Button variant="secondary" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Content>
    </Container>
  )
}

export default memo(Header)
