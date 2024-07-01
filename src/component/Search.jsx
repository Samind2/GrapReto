import React, { useState } from "react";

const Search = ({ restaurants, setFilteredRestaurants }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value === "") {
      setFilteredRestaurants(restaurants);
      return;
    }

    const result = restaurants.filter((restaurant) =>
      restaurant.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredRestaurants(result);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a restaurant..."
        value={keyword}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
