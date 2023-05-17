import { FC, useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header/header'
import Card from '../../components/Card/card'
import { getNyCategories } from '../../services/nytimes/nytimes'
import { Category } from '../../models/category'
import { useNavigate } from 'react-router-dom'
import { Cards, Container, Content } from './dashboardStyles'


const Dashboard: FC = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()
  
  const handleGoToDetails = useCallback((listName: string) => {
    navigate(`/dashboard/${listName}`)
  }, [navigate])

  const handleSetCategories = useCallback(async () => {
    const categoriesList = await getNyCategories()
    setCategories(categoriesList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    handleSetCategories()
  }, [handleSetCategories])

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

export default Dashboard
