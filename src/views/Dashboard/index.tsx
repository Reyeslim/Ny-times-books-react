import { FC, memo } from 'react'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import { Cards, Container, Content } from './dashboardStyles'
import useLogic from './logic'


const Dashboard: FC = () => {
  const {isLoading, categories, handleGoToDetails} = useLogic()

  if (isLoading) {
    return <div>CARGANDO...</div>
  }

  return (
    <Container>
      <Header />
      <Content>
        <Cards>
          {categories.map((category, index) => (
            <Card
              key={index}
              onClick={() => handleGoToDetails(category.key)}
              title={category.title}
              extraInfo={category.updated}
            />
          ))}
        </Cards>
      </Content>
    </Container>
  )
}

export default memo(Dashboard)
