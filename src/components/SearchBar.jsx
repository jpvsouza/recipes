import React from 'react';

function SearchBar() {
  const [searchedItem, setSearchedItem] = React.useState('');

  return (
    <input
      type="text"
      data-testid="search-input"
      placeholder="Search Recipe"
      value={ searchedItem }
      onChange={ ({ target }) => setSearchedItem(target.value) }
    />
  );
}

export default SearchBar;
