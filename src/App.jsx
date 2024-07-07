import React from 'react';  // นำเข้าไลบรารี React เพื่อใช้ในการสร้าง Component

import Restaurants from './Restaurants';  // นำเข้า Component Restaurants จากไฟล์ './Restaurants'

const App = () => {  // ประกาศ Component ชื่อ App โดยใช้ Arrow Function
  return (  // ส่งคืน JSX เพื่อแสดงผล Component
    <div>  {/* เริ่มต้นที่ div เพื่อใส่เนื้อหาทั้งหมดของ Component */}
      <h1>Restaurant Search</h1>  {/* แสดงหัวข้อ h1 ด้วยข้อความ "Restaurant Search" */}
      <Restaurants />  {/* เรียกใช้ Component Restaurants */}
    </div>  // ปิด div ที่ห่อหุ้มเนื้อหาของ Component
  );
};

export default App;  // ส่งออก Component App เป็น default export ของไฟล์นี้
