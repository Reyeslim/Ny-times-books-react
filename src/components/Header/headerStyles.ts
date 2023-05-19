import styled from 'styled-components'
import DefaultButton from '../../components/Button/button'

export const Container = styled.header`
  height: 32px;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.blue100};
  padding: 16px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  line-height: 1.2;
`
export const Button = styled(DefaultButton)`
  
`