import React from "react";
import './Button.scss';

function Button({ onClick, children }) {
  return <button className='search-button' onClick={onClick}>{children}</button>;
}

export default Button;
