import styled from 'styled-components';
import LogoMateus from '../../../assets/images/challengeLogo.png';
import { RiLogoutCircleRLine } from 'react-icons/ri';

export const Header = styled.header`
    width: 100%;
    background-color:${({ theme }) => theme.palette.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img.attrs(() => ({
    src: LogoMateus,
    alt: "Logotipo do Desafio Pulse"
  }))`
  max-width: 204px;
  width: 100%;
  padding: 10px 0;
  height: auto;
`;

export const LogoutContainer = styled.div`
  color: ${({ theme }) => theme.palette.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  cursor: pointer;
`;

export const Logout = styled(RiLogoutCircleRLine)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.palette.white};
  margin: 30px 5px;
  cursor: pointer;
`;

export const LogoutSpan = styled.span`
  color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
`;