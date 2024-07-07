import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((response) => {
        setRestaurants(response);
        setFilteredRestaurants(response); // Initialize with all restaurants
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Search 
        restaurants={restaurants} 
        setFilteredRestaurants={setFilteredRestaurants} 
      />
      <div className="flex flex-wrap justify-center gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            img={restaurant.img}
            title={restaurant.title}
            description={restaurant.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
