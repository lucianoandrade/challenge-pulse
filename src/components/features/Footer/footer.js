import React from "react";
import { Link } from "react-router-dom";
import {Footer, Logo} from "./styles.js";

const FooterComponent = () => {
  return (
    <Footer>
      <Link to="/">
        <Logo />
      </Link>
    </Footer>
  );
};
export default FooterComponent;