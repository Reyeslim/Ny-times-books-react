import styled from 'styled-components'

export const Container = styled.header`
  height: 32px;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.blue100};
  padding: 16px;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  line-height: 1.2;
`
