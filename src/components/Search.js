import React from "react";

function Search({search, setSearch}) {

  function handleSearchChange(e){
    setSearch(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={handleSearchChange}
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
