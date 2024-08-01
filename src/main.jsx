import React from "react"; // นำเข้าไลบรารี React เพื่อใช้ในการสร้าง Component
import ReactDOM from "react-dom/client"; // นำเข้า ReactDOM จาก react-dom/client เพื่อใช้ในการ render โดยใช้ Concurrent Mode
import "./index.css"; // นำเข้าไฟล์ CSS สำหรับสไตล์ของแอปพลิเคชัน
import { RouterProvider } from "react-router-dom"; // นำเข้า RouterProvider จาก react-router-dom เพื่อใช้ในการจัดการระบบเส้นทาง (routing)
import router from "./router/Router"; // นำเข้าอ็อบเจกต์ router ที่เกี่ยวข้องจากไฟล์ ./router/Router
import Navbar from "./component/Navbar"; // นำเข้า Component Navbar จากไฟล์ ./component/Navbar

// ใช้ ReactDOM.createRoot(document.getElementById("root")).render() เพื่อ render แอปพลิเคชันใน Concurrent Mode
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* เริ่มต้นการ render ใน StrictMode เพื่อให้แสดง Warning เมื่อมีการใช้ API ที่ไม่ปลอดภัย */}
    <Navbar /> {/* เรียกใช้ Component Navbar เพื่อแสดงบาร์เนวิเกต */}
    <RouterProvider router={router} />{" "}
    {/* ใช้ RouterProvider เพื่อให้ router ที่นำเข้ามาจัดการเส้นทางในแอปพลิเคชัน */}
  </React.StrictMode> // สิ้นสุดการ render ใน StrictMode
);
