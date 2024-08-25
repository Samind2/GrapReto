import { useState } from 'react';

const Search = ({ restaurants, setfilterRestaurant }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (e.target.value === "") {
      setfilterRestaurant(restaurants);
      return;
    }
    const result = restaurants.filter((restaurant) =>
      restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.type.toLowerCase().includes(keyword.toLowerCase())
    );
    setfilterRestaurant(result);
  };

  return (
    <label className="input input-bordered flex items-center gap-2 w-5/6">
      <input
        type="text"
        className="grow"
        placeholder="Search"
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
