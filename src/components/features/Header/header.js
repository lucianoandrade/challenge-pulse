import React from "react";
import { useHistory } from "react-router-dom";
import { 
  Header, 
  Logo, 
  LogoutContainer, 
  Logout, 
  LogoutSpan 
} from "./styles";

const HeaderComponent = () => {
  const history = useHistory();
  
  const logoutFunction = () => {
    localStorage.setItem('userActive', JSON.stringify([]));
    history.push("/login")
  } 

  return (
    <Header>
      <Logo />
      {history.location.pathname === "/" ?
        <>
          <LogoutContainer onClick={() => logoutFunction()}>         
            <LogoutSpan>Sair</LogoutSpan>
            <Logout />
          </LogoutContainer>
        </> 
        : ""}
    </Header>
  );
};
export default HeaderComponent;