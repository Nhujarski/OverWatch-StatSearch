import React from "react";
import "./Input.scss";

function Input({ type, placeholder }) {
  return <input className='form-input' type={type} placeholder={placeholder} />;
}

export default Input;
