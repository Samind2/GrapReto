import { useState } from 'react';

// ฟังก์ชัน Search รับ props คือ restaurants และ setFilteredRestaurants
const Search = ({ restaurants, setFilteredRestaurants }) => {
  // สร้าง state สำหรับ keyword โดยค่าเริ่มต้นเป็น string ว่าง
  const [keyword, setKeyword] = useState("");

  // ฟังก์ชัน handleChange จะถูกเรียกเมื่อมีการเปลี่ยนแปลงใน input field
  const handleChange = (e) => {
    // รับค่าใหม่จาก input field
    const value = e.target.value;
    // อัพเดทค่า keyword ใน state
    setKeyword(value);

    // ถ้าค่า input ว่าง ให้รีเซ็ตผลลัพธ์กลับไปที่ restaurants ทั้งหมด
    if (value === "") {
      setFilteredRestaurants(restaurants);
      return;
    }

    // ฟิลเตอร์ restaurants โดยเช็คว่าชื่อหรือคำอธิบายมี keyword ที่กรอกใน input หรือไม่
    const result = restaurants.filter((restaurant) => {
      // ตรวจสอบว่า title มีหรือไม่ ถ้ามีก็แปลงเป็นตัวพิมพ์เล็ก ถ้าไม่มีก็เป็น string ว่าง
      const title = restaurant.title ? restaurant.title.toLowerCase() : "";
      // ตรวจสอบว่า description มีหรือไม่ ถ้ามีก็แปลงเป็นตัวพิมพ์เล็ก ถ้าไม่มีก็เป็น string ว่าง
      const description = restaurant.description ? restaurant.description.toLowerCase() : "";
      // ตรวจสอบว่า title หรือ description มี keyword ที่กรอกใน input หรือไม่
      return title.includes(value.toLowerCase()) || description.includes(value.toLowerCase());
    });

    // อัพเดทผลลัพธ์ที่ฟิลเตอร์แล้วไปที่ state
    setFilteredRestaurants(result);
  };

  // return JSX สำหรับการแสดงผล
  return (
    // label ที่ครอบ input และ svg
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
