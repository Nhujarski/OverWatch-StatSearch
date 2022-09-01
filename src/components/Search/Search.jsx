import React, { useEffect } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./Search.scss";

function Search() {
  const handleClick = (e) => {
    e.preventDefault();
    fetch(" https://ow-api.com/v2/stats/pc/cats-11481/profile")
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className='form-container'>
      <h1>OverSearch</h1>
      <form className='search-container'>
        <Dropdown />
        <Input type={"text"} placeholder={"Please Enter a Battle Tag"} />
        <Button onClick={handleClick} children={"Search"} />
      </form>
    </div>
  );
}

export default Search;
