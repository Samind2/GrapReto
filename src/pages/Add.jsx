import React from "react";
import { useState } from "react";

const Add = () => {
  // สร้าง state สำหรับเก็บข้อมูลร้านอาหาร
  const [restaurant, setRestaurant] = useState({
    title: "",
    description: "",
    img: "",
  });

  // ฟังก์ชัน handleChange ใช้สำหรับอัพเดตค่า state เมื่อมีการเปลี่ยนแปลงใน input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // ฟังก์ชัน handleSubmit ใช้สำหรับการส่งข้อมูลร้านอาหารไปยังเซิร์ฟเวอร์
  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันการทำงาน default ของ form
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("เพิ่มร้านอาหารเรียบร้อยแล้ว");
        setRestaurant({ title: "", description: "", img: "" }); // รีเซ็ตค่าใน form เมื่อเพิ่มข้อมูลสำเร็จ
      }
    } catch (error) {
      console.log(error);
    }
  };

  // JSX ที่เป็น UI สำหรับฟอร์มเพิ่มร้านอาหาร
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl text-center mb-4">เพิ่มร้านอาหาร</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="input input-bordered flex items-center gap-2">
          ชื่อร้านอาหาร
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="ชื่อร้านอาหาร"
            name="title"
            onChange={handleChange}
            value={restaurant.title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          ประเภทร้านอาหาร
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="ประเภทร้านอาหาร"
            name="description"
            onChange={handleChange}
            value={restaurant.description}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          ลิงก์รูปภาพร้านอาหาร
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="ลิงก์รูปภาพร้านอาหาร"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </label>
        {/* แสดงภาพร้านอาหารตาม URL ที่กรอก */}
        {restaurant.img && (
          <div className="flex justify-center mt-4">
            <img
              src={restaurant.img}
              alt="ตัวอย่างร้านอาหาร"
              className="max-w-full h-auto rounded"
              style={{ maxWidth: "500px" }}
            />
          </div>
        )}
        {/* ปุ่มสำหรับเพิ่มร้านอาหาร */}
        <button
          className="btn btn-success bg-green-500 text-white py-2 px-4 rounded mx-auto block"
          type="submit"
        >
          เพิ่มร้านอาหาร
        </button>
      </form>
    </div>
  );
};

export default Add;
