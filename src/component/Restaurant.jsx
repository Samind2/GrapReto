import React, { useEffect, useState } from "react"; // นำเข้า useEffect และ useState จาก React
import Search from "./Search"; // นำเข้า component Search
import Card from "./Card"; // นำเข้า component Card

const Restaurants = () => {
  // สร้าง state สำหรับเก็บข้อมูล restaurants และ filteredRestaurants
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // useEffect จะทำงานเมื่อ component ถูก mount
  useEffect(() => {
    // Fetch ข้อมูลจาก API
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json()) // แปลง response เป็น JSON
      .then((response) => {
        // อัพเดท state restaurants และ filteredRestaurants ด้วยข้อมูลที่ได้จาก API
        setRestaurants(response);
        setFilteredRestaurants(response); // ตั้งค่าเริ่มต้นให้ filteredRestaurants มีค่าเท่ากับ restaurants ทั้งหมด
      })
      .catch((err) => {
        // ถ้ามี error ในการ fetch ข้อมูล จะทำการ log error นั้น
        console.log(err.message);
      });
  }, []); // Array ว่างหมายความว่า useEffect นี้จะทำงานเพียงครั้งเดียวตอน component mount

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
