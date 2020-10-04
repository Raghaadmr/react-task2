import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${props=> props.theme.backgroundColor};
    color:${props=> props.theme.mainColor};
}`
