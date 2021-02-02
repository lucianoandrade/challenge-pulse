import React from "react";
import { Link, useHistory } from "react-router-dom";
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
      <Link to="/">
        <Logo />
      </Link>
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