import React from "react";
import { Button } from "./styles.js";

const ButtonComponet = props => {
  const {children="Botão", background="default", color="default"} = props;

  return (
    <>
      <Button
        type="submit"
        background={background}
        color={color} 
        onClick={props.onClick}>
          {children}
      </Button>
    </>
  );
};

export default ButtonComponet;