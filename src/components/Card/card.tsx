import { FC, memo, useCallback } from 'react'
import {
  Button,
  Container,
  Content,
  Eliminate,
  ExtraInfo,
  Footer,
  FooterContent,
  Header,
} from './cardStyles'
import type { Props } from './Types'

const Card: FC<Props> = ({ title, extraInfo, isDetails = false, onClick }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick()
    }
  }, [onClick])
  return (
    <Container>
      <Content>
        <Header>{title}</Header>
        <Footer>
          <FooterContent>
            <ExtraInfo>{extraInfo}</ExtraInfo>
            {!isDetails && <Button onClick={handleClick}>Detalles</Button>}
            {isDetails && <Eliminate onClick={handleClick}>Eliminar</Eliminate>}
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  )
}

export default memo(Card)
