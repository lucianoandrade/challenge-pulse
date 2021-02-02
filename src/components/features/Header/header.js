import React from "react";
import { Link, useHistory } from "react-router-dom";
import { 
  Header, 
  Logo, 
  LogoutContainer, 
  Logout, 
  LogoutSpan,
  LogoutContainerReset,
  Reset,
  ResetSpan 
} from "./styles";

const HeaderComponent = () => {
  const history = useHistory();
  
  const logoutFunction = () => {
    localStorage.setItem('userActive', JSON.stringify([]));
    history.push("/login")
  } 

  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      {history.location.pathname === "/" ?
        <>
          <LogoutContainer onClick={() => logoutFunction()}>         
            <LogoutSpan>Sair</LogoutSpan>
            <Logout />
          </LogoutContainer>

          <LogoutContainerReset onClick={() => {
            localStorage.clear();
            window.document.location.reload()
          }}>         
            <ResetSpan>Reset</ResetSpan>
            <Reset />
          </LogoutContainerReset>
        </> 
        : ""}
    </Header>
  );
};
export default HeaderComponent;