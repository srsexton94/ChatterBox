import { useId } from "react";
import "./Input.css";
import { InputProps, InputTypes } from "../../models";

function Input({ label, value, type = InputTypes.TEXT, isFull = false, onChange }: InputProps) {
  const inputId = useId();

  return (
    <div className="container">
      <input
        id={inputId}
        className={isFull ? "full" : ""}
        placeholder=" "
        type={type}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export default Input;
