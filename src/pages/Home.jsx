import React, { useState, useEffect } from "react";
import Search from "./../component/Search";
import Restaurant from "./../component/Restaurant";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";


function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  useEffect(() => {
    const getRestaurant = async () =>{
      try {
        const response = await RestaurantService.getAllRestaurant();
        if(response.status === 200){
          setRestaurants(response.data);
          setFilterRestaurant(response.data)
        }
      } catch (error) {
        Swal.file({
          title:"Get All Restaurant",
          text:error?.response?.data?.message || error.message,
          icon:"error"
        })
      }
    }
    getRestaurant()
  }, []);

  return (
    <>
      <div className="container flex flex-row flex-wrap mx-auto items-center justify-center">
        <Search
          restaurants={restaurants}
          setfilterRestaurant={setFilterRestaurant}
        />
        <Restaurant restaurants={filterRestaurant} />
      </div>
    </>
  );
}

export default Home;
