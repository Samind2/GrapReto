import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  // ใช้ useParams เพื่อดึงค่า id จาก URL ที่ถูกส่งมาจาก React Router
  const { id } = useParams();

  // สร้าง state สำหรับเก็บข้อมูลร้านอาหาร ซึ่งมีค่าเริ่มต้นเป็น object ที่มี title, description, และ img
  const [restaurant, setRestaurant] = useState({
    title: "",
    description: "",
    img: "",
  });

  // ใช้ useEffect เพื่อดึงข้อมูลร้านอาหารจากเซิร์ฟเวอร์ทุกครั้งที่ id เปลี่ยนแปลง
  useEffect(() => {
    fetch(`http://localhost:5000/restaurants/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((response) => {
        setRestaurant(response); // อัปเดตข้อมูลร้านอาหารใน state
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]); // กำหนดว่า useEffect จะทำงานเมื่อ id เปลี่ยนแปลง

  // ฟังก์ชัน handleChange ใช้สำหรับอัปเดตค่าของ restaurant state เมื่อมีการเปลี่ยนแปลงใน input fields ของฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // ฟังก์ชัน handleSubmit ใช้สำหรับส่ง HTTP PUT request เพื่ออัปเดตข้อมูลร้านอาหาร
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant), // ส่งข้อมูลร้านอาหารในรูปแบบ JSON
      });

      if (response.ok) {
        alert("Restaurant updated successfully"); // แจ้งเตือนเมื่ออัปเดตข้อมูลสำเร็จ
      } else {
        alert("Failed to update restaurant"); // แจ้งเตือนเมื่อไม่สามารถอัปเดตข้อมูลได้
      }
    } catch (error) {
      console.log(error); // แสดง error ใน console กรณีที่เกิดข้อผิดพลาดในการส่ง request
    }
  };

  // ส่วนของ JSX ที่แสดง UI ของหน้าแก้ไขร้านอาหาร
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl text-center mb-4">Edit Restaurant</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="flex flex-col">
          <span className="mb-2">Restaurant Name</span>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Restaurant Name"
            name="title"
            onChange={handleChange}
            value={restaurant.title} // กำหนดค่าของ input จาก restaurant state
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2">Restaurant Type</span>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Restaurant Type"
            name="description"
            onChange={handleChange}
            value={restaurant.description} // กำหนดค่าของ input จาก restaurant state
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2">Restaurant Image URL</span>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Restaurant Image URL"
            name="img"
            onChange={handleChange}
            value={restaurant.img} // กำหนดค่าของ input จาก restaurant state
          />
        </label>
        {/* เงื่อนไขที่ใช้ในการแสดงตัวอย่างรูปภาพ */}
        {restaurant.img && (
          <div className="flex justify-center mt-4">
            <img
              src={restaurant.img} // ใช้ URL รูปภาพจาก restaurant state
              alt="Restaurant Preview"
              className="max-w-full h-auto rounded"
              style={{ maxWidth: "500px" }}
            />
          </div>
        )}
        <button
          className="btn btn-success bg-green-500 text-white py-2 px-4 rounded mx-auto block"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
