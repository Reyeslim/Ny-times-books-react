import styled from 'styled-components'
import { Props } from './types'

export const CustomButton = styled.button<{$variant: Props['variant']}> `
background-color: #fff;
border: 1px solid ${({theme}) => theme.colors.blue100};
border-radius: 5px;
color: ${({theme}) => theme.colors.blue100};
cursor: pointer;
font-weight: ${({$variant}) => $variant === 'primary' ? 'normal' : 'bold'};
padding: 8px 16px;
transition: all 200ms ease-in-out;


&:hover {
    background-color: ${({theme, $variant}) => $variant === 'primary' ? theme.colors.blue100 : theme.colors.greenPale};
    color: ${({theme, $variant}) => $variant === 'primary' ? 'white' : theme.colors.blue700};
}

`
