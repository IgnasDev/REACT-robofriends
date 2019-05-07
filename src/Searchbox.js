import React from 'react';

const Searchbox = ( { searchChange } ) => {

  return (
    <div className="search-container">
    
    <h1 className="search-container__heading">RoboFriends</h1>

      <input
      className="search-container__search"
      type="search"
      placeholder="Search Robots"
      onChange={searchChange}
      />

    </div>
  )
}

export default Searchbox;
