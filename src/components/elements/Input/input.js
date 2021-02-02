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
    defaultValue,
    accept,
    style
  } = props;

  return (
    <>
      <Field>
        <Label htmlFor={id} accept={accept}>{label}</Label>
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
          style={style} 
        />
        {error ? <ErrorMessage>{errorMessage}</ErrorMessage> : ""}
      </Field>
    </>
  );
};

export default InputComponet;