import { useId } from "react";
import "./Input.css";
import { InputProps, InputTypes } from "../../models";

function Input({ label, type = InputTypes.TEXT, isFull = false }: InputProps) {
  const inputId = useId();

  return (
    <div className="container">
      <input
        id={inputId}
        className={isFull ? "full" : ""}
        placeholder=" "
        type={type}
      />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export default Input;
