import React, { useEffect } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

import "./Search.scss";

function Search() {
  const options = {
    method: "GET",
    // mode: "no - cors",
  };
  // on render
  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=d2f7bdd568msh1ea9d7dc992a568p1c8fd9jsn52e47a262465",
      options
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    fetch(
      "https://cors-anywhere.herokuapp.com/https://playoverwatch.com/en-us/career/xbl/HusseinObama-11715"
    )
      .then((response) => response.json())
      .then((data) => console.log("data >>>>", data))
      .catch((error) => console.log("error >>> ", error));
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
