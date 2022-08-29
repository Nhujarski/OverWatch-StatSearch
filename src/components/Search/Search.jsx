import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Search() {
  return (
    <div className='form-container'>
      <form className='search-container'>
        <Input type={"text"} placeholder={"Please Enter a Battle Tag"} />
        <Button onClick={() => console.log("clicked!!!")} children={"Search"} />
      </form>
    </div>
  );
}

export default Search;
