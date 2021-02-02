import styled from 'styled-components';
import LogoMateus from '../../../assets/images/challengeLogo.png';

export const Footer = styled.footer`
    width: 100%;
    background-color:${({ theme }) => theme.palette.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-family: 'Open Sans', sans-serif;
    padding: 15px 0;
    bottom: 0;
`;

export const Logo = styled.img.attrs(() => ({
    src: LogoMateus,
    alt: "Logotipo do Desafio Pulse"
  }))`
  max-width: 204px;
  width: 100%;
  height: auto;
`;
