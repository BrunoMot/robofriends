import React from "react";

const SearchBox = ({ search_field, search_change }) => {
  return (
    <div className='pa2'>
      <input
        type='search'
        placeholder='Search robot'
        className='pa3 ba b--green bg-lightest-blue'
        onChange={search_change}
      />
    </div>
  );
};

export default SearchBox;
