import styled from 'styled-components'
import DefaultButton from '../../components/Button/button'

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue100};
  border-radius: 5px;
  height: 240px;
  width: 150px;
`
export const Content = styled.div`
  padding: 16px;
  text-align: center;
`

export const Header = styled.div`
  height: 64px;
`
export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.blue100};
  margin-top: 16px;
`

export const FooterContent = styled.div`
  margin-top: 16px;
`
export const ExtraInfo = styled.div`
  margin-bottom: 25px;
`
export const Button = styled(DefaultButton)`
  width: 100%;
`
