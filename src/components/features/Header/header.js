import React from "react";
import { useHistory } from "react-router-dom";
import { Header, Logo, Logout } from "./styles";

const HeaderComponent = () => {
  const history = useHistory();
  
  const logoutFunction = () => {
    localStorage.setItem('userActive', JSON.stringify([]));
    history.push("/login")
  } 

  return (
    <Header>
      <Logo />
      {history.location.pathname === "/" ? <Logout onClick={() => logoutFunction()} /> : ""}
    </Header>
  );
};
export default HeaderComponent;