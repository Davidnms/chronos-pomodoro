import React from "react";
import styles from "./styles.module.css";

type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  labelText?: string;
};

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText ? <label htmlFor={id}>{labelText}</label> : ""}
      <input
        className={styles.input}
        id={id}
        type={type}
        {...rest}
        placeholder="Digite algo..."
      />
    </>
  );
}
