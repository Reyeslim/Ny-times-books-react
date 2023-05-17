import styled from 'styled-components'

import { Link as DefaultLink } from 'react-router-dom'

export const Container = styled.div``

export const Form = styled.form`
  background-color: #b0e4dead;
  border-radius: 10px;
  margin: 80px auto;
  padding: 16px;
  text-align: center;
  width: 450px;
`
export const FormContent = styled.div`
  padding: 10px;
`
export const LegendController = styled.div``

export const Legend = styled.legend`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`

export const InputController = styled.div`
  &:not(last-child) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  font-weight: bold;
  margin-right: 15px;
  width: 72px;
`

export const Input = styled.input`
  border: 1px solid #f6f6f6;
  border-radius: 6px;
  background-color: #f6f6f6;
  display: inline-block;
  margin: 8px 0;
  padding: 3px 10px;
  width: 180px;
`
export const InputError = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 12px;
  line-height: 0.9;
  margin-top: 8px;
`
export const Link = styled(DefaultLink)`
  display: block;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.blue100};
  font-size: 14px;
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue700};
  }
`