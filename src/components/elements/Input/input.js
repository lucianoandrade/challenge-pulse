import React from "react";
import { Field, Label, Input, ErrorMessage } from "./styles";

const InputComponet = props => {
  const {
    id = "id",
    type = "text",
    name = "name",
    placeholder = "placeholder",
    label = "label",
    disabled = false,
    required = false,
    onChange,
    value,
    error,
    errorMessage
  } = props;

  return (
    <>
      <Field>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          value={value}
          error={error} 
        />
        {error ? <ErrorMessage>{errorMessage}</ErrorMessage> : ""}
      </Field>
    </>
  );
};

export default InputComponet;