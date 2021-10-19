import React, { useState } from "react";
import SearchButton from "./SearchButton";
import Bookings from "./Bookings";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(evt) {
    // console.log(evt.target.value);
    // not working why
    // setSearchInput((inputValue) => {
    //   return evt.target.value;
    // });
    setSearchInput(evt.target.value);
  }

  const resetInputField = () => {
    setSearchInput("");
  };

  function callSearchFunction(evt) {
    evt.preventDefault();
    // console.log("Storing search key");
    search(searchInput);
    resetInputField();
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={callSearchFunction}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
