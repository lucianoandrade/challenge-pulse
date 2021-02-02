import React from "react";
import { Card } from "./styles";

const CardComponent = (props) => {
  return (
    <Card onClick={props.onClick}>
      {props.children}
    </Card>
  );
};
export default CardComponent;