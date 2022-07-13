import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html{
    font-size: 62.5%;
    
    height: 100%;
  }


  body{
    font-family: 'Raleway', sans-serif;

    min-height: 100%;
    position: relative;
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden; /* Hide horizontal scrollbar */
     
    padding-bottom: 6rem;
  }


`

export default GlobalStyle
