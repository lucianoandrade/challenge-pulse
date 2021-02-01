import React from "react";
import { Link } from "react-router-dom";
import { Header, Logo } from "./styles.js";

const HeaderComponent = () => {
  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
    </Header>
  );
};
export default HeaderComponent;