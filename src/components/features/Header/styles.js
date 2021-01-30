import styled from 'styled-components';
import LogoMateus from '../../../assets/images/logo-mateus-branca.png';


export const Header = styled.header`
    width: 100%;
    background-color:${({ theme }) => theme.palette.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img.attrs(() => ({
    src: LogoMateus,
    alt: "Logotipo do Grupo Mateus"
  }))`
  max-width: 204px;
  width: 100%;
  padding: 10px 0;
  height: auto;
`;