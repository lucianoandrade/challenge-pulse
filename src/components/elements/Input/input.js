import React from "react";
import { Field, Label, Input, ErrorMessage } from "./styles";

const InputComponet = props => {
  const {
    id,
    type = "text",
    name,
    placeholder,
    label,
    disabled = false,
    required = false,
    onChange,
    value,
    error,
    errorMessage,
    defaultValue
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
          defaultValue={defaultValue}
          value={value}
          error={error} 
        />
        {error ? <ErrorMessage>{errorMessage}</ErrorMessage> : ""}
      </Field>
    </>
  );
};

export default InputComponet;