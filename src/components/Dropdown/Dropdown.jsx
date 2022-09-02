/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Dropdown.scss";

function Dropdown() {
  return (
    <div className='dropdown-container'>
      <select className='dropdown' name='platform'>
        <option value=''>Please select a platform</option>
        <option value='xbl'>Xbox</option>
        <option value='psn'>Playstation</option>
        <option value='pc'>PC</option>
      </select>
    </div>
  );
}

export default Dropdown;
