import { createBrowserRouter } from "react-router-dom";  // นำเข้าฟังก์ชัน createBrowserRouter จากไลบรารี react-router-dom เพื่อสร้างตัวเราเตอร์
import Home from "../pages/Home.jsx";  // นำเข้า Component Home จากไฟล์ '../pages/Home.jsx' เพื่อนำมากำหนดในเส้นทาง
import Add from "../pages/Add.jsx";  // นำเข้า Component Add จากไฟล์ '../pages/Add.jsx' เพื่อนำมากำหนดในเส้นทาง
import Edit from "../pages/Edit.jsx";  // นำเข้า Component Edit จากไฟล์ '../pages/Edit.jsx' เพื่อนำมากำหนดในเส้นทาง

const router = createBrowserRouter([  // สร้างตัวเราเตอร์โดยใช้ฟังก์ชัน createBrowserRouter และกำหนดเส้นทางต่าง ๆ ดังนี้
  {
    path: "/",  // เส้นทางหลักของแอปพลิเคชัน
    element: <Home />,  // เมื่อเข้าถึงเส้นทาง '/' ให้แสดง Component Home
  },
  {
    path: "/add",  // เส้นทางสำหรับเพิ่มร้านอาหาร
    element: <Add />,  // เมื่อเข้าถึงเส้นทาง '/add' ให้แสดง Component Add
  },
  {
    path: "/Edit/:id",  // เส้นทางสำหรับแก้ไขร้านอาหารโดยระบุ ID
    element: <Edit />,  // เมื่อเข้าถึงเส้นทาง '/Edit/:id' ให้แสดง Component Edit
  },
]);

export default router;  // ส่งออกตัวเราเตอร์ที่กำหนดเส้นทางแล้ว
