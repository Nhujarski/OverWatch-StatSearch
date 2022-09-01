import React from "react";
import Search from "../Search/Search";
import "./Layout.scss";

function Layout() {
  return (
    <div className='layout'>
      <h1>OverSearch</h1>
      <Search />
    </div>
  );
}

export default Layout;
