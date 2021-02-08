import React from "react";

function Search({ searchText, setSearchText }) {
  return (
    <input
      data-testid="filterInput"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="large"
      placeholder="Enter Country Name"
    />
  );
}

export default Search;
