import React, { useState, useEffect } from "react";
import Search from "./../component/Search";
import Restaurant from "./../component/Restaurant";

function Home() {
  // สร้าง state สำหรับเก็บรายการร้านอาหารทั้งหมดและรายการร้านอาหารที่ถูกกรอง
  const [restaurants, setRestaurants] = useState([]); // เก็บรายการร้านอาหารทั้งหมด
  const [filterRestaurant, setfilterRestaurant] = useState([]); // เก็บรายการร้านอาหารที่ถูกกรอง

  // ใช้ useEffect เพื่อดึงข้อมูลร้านอาหารจากเซิร์ฟเวอร์เมื่อ component โหลดเสร็จ
  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
    .then(res => {
      console.log(res); // Log the response object
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      setRestaurants(data);
      setfilterRestaurant(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []); // กำหนดว่า useEffect จะทำงานเฉพาะครั้งแรกเมื่อ component โหลดเสร็จ

  // ฟังก์ชัน addRestaurant ใช้สำหรับเพิ่มร้านอาหารใหม่เข้าไปในรายการ
  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]); // เพิ่มร้านอาหารใหม่ลงในรายการทั้งหมด
    setfilterRestaurant([...restaurants, newRestaurant]); // เพิ่มร้านอาหารใหม่ลงในรายการที่ถูกกรอง
  };

  // ส่วนของ JSX ที่แสดง UI ของหน้า Home
  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-4">
        {/* Component Search ส่ง restaurants และ setfilterRestaurant เป็น props */}
        <Search
          restaurants={restaurants}
          setfilterRestaurant={setfilterRestaurant}
        />
        <div className="container flex flex-row flex-wrap items-center justify-center">
          {/* Component Restaurant ส่ง filterRestaurant เป็น props */}
          <Restaurant restaurants={filterRestaurant} />
        </div>
      </div>
    </>
  );
}

export default Home;
