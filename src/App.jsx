import React, { useState, useEffect } from 'react';
import Search from './Search';
import RestaurantList from './RestaurantList';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Fetch the restaurant data here
    fetch('http://localhost:3000/restaurants')
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data); // Initialize with all restaurants
      })
      .catch((error) => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <div>
      <h1>Restaurant Search</h1>
      <Search restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
};

export default App;
