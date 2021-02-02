import React from "react";
import { Link, useHistory  } from "react-router-dom";
import { Header, Logo, Logout } from "./styles";

const HeaderComponent = () => {
  const history = useHistory();
  return (
    <Header>
      <Logo />
      {history.location.pathname === "/" ? <Logout onClick={() => history.push("/login")} /> : ""}
    </Header>
  );
};
export default HeaderComponent;