import React from "react";
import { Button } from "./styles.js";

const ButtonComponet = props => {
  const {children="Botão"} = props;

  return (
    <>
      <Button
        type="submit" 
        onClick={props.onClick}>
          {children}
      </Button>
    </>
  );
};

export default ButtonComponet;