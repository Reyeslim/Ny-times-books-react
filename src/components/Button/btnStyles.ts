import styled from 'styled-components'

export const CustomButton = styled.button `
background-color: #fff;
border: 1px solid ${({theme}) => theme.colors.blue100};
border-radius: 5px;
color: ${({theme}) => theme.colors.blue100};
cursor: pointer;
padding: 8px 16px;
transition: all 200ms ease-in-out;


&:hover {
    background-color: ${({theme}) => theme.colors.blue100};
    color:#fff;
}
`
