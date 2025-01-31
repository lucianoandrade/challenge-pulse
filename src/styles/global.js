import { createGlobalStyle } from 'styled-components';
import Rubik from '../assets/fonts/Rubik-VariableFont_wght.ttf';

export default createGlobalStyle`

  @font-face {
    font-family: "Rubik";
    src: url('${Rubik}')
  }

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
    font-family: Rubik;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: Rubik;
  }

  body {
    overflow: auto;
    -webkit-font-smoothing: antialiased;
    background-color: #E5E5E5;
  }

  a {
    text-decoration: none;
    font-family: Rubik;
  }
`;