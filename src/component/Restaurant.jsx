import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/restaurants")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
   // Array ว่างหมายความว่า useEffect นี้จะทำงานเพียงครั้งเดียวตอน component mount

  return (
    <div className="flex flex-col items-center">
      {/* แสดง component Search และส่ง props restaurants และ setFilteredRestaurants */}
      <Search 
        restaurants={restaurants} 
        setFilteredRestaurants={setFilteredRestaurants} 
      />
      <div className="flex flex-wrap justify-center gap-4">
        {/* map ข้อมูล filteredRestaurants แล้วแสดงผลผ่าน component Card */}
        {filteredRestaurants.map((restaurant) => (
          <Card
          id={restaurant.id}
            key={restaurant.id} // กำหนด key ให้กับแต่ละ Card
            img={restaurant.img} // ส่ง img ไปเป็น prop ให้กับ Card
            title={restaurant.title} // ส่ง title ไปเป็น prop ให้กับ Card
            description={restaurant.description} // ส่ง description ไปเป็น prop ให้กับ Card
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants; // ส่งออก component Restaurants เพื่อใช้งานในไฟล์อื่น
