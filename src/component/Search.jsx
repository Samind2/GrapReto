import { useState } from 'react';

const Search = ({ restaurants, setFilteredRestaurants }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value === "") {
      setFilteredRestaurants(restaurants);
      return;
    }

    const result = restaurants.filter((restaurant) => {
      const title = restaurant.title ? restaurant.title.toLowerCase() : "";
      const description = restaurant.description ? restaurant.description.toLowerCase() : "";
      return title.includes(value.toLowerCase()) || description.includes(value.toLowerCase());
    });

    setFilteredRestaurants(result);
  };

  return (
    <label className="input input-bordered flex items-center gap-2 w-5/6">
      <input
        type="text"
        className="grow"
        placeholder="Search"
        value={keyword}
        onChange={handleChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};

export default Search;
