import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;


  
}

body {
    background: ${(props) => props.theme.base_card};
   
    -webkit-font-smoothing: antialiased;

  
}
input, button, body {
  font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`
