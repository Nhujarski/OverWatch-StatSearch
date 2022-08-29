import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./Search.scss";

function Search() {
  return (
    <div className='form-container'>
      <h1>OverSearch</h1>
      <form className='search-container'>
        <Dropdown />
        <Input type={"text"} placeholder={"Please Enter a Battle Tag"} />
        <Button onClick={() => console.log("clicked!!!")} children={"Search"} />
      </form>
    </div>
  );
}

export default Search;
