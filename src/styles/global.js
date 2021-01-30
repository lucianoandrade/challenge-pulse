import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
/* 
  p {
    font-size: 1.2em;
  } */

  body {
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    background-color: #ededed;
  }

  a {
    text-decoration: none;
  }
`;