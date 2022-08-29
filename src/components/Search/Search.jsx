import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./Search.scss";

function Search() {
  const ow = require("overwatch-stats-api");
  console.log("ow >>> ", ow);
  const handleClick = async (e) => {
    e.preventDefault();
    const stats = await ow.getAllStats("HusseinObama-11715", "pc");
    console.log("stats >>>> ", stats);
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
