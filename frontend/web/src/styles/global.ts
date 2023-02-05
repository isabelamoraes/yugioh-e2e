import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #16002e;
    --purple-500: #9328C0;
    --purple-800: #330F69;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    background: url("bg.jpg") no-repeat fixed center;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root{
    min-height: 100vh;
}

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;