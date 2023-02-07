import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  body {
    background-color: ${({theme}) => theme.colors.primary};
    font-family: 'Montserrat', sans-serif;
  }
`

export default GlobalStyle;