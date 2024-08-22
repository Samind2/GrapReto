import React from 'react'; // นำเข้า React จาก library

// สร้าง component Card และรับ props ได้แก่ id, img, title, description
const Card = ({ id, img, title, description }) => {
  // ฟังก์ชัน handleDelete สำหรับการลบ restaurant
  const handleDelete = async () => {
    try {
      // ส่ง request ไปที่ server เพื่อทำการลบ restaurant โดยใช้ method DELETE
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "DELETE",
      });

      // ถ้า response โอเค (status code 200-299)
      if(response.ok){
        alert("Restaurant has been deleted"); // แจ้งผู้ใช้ว่า restaurant ถูกลบแล้ว
        window.location.reload(); // reload หน้าเว็บเพื่ออัพเดทรายการ restaurant
      }
    } catch(error){
      console.log(error); // ถ้ามี error ในการลบ จะทำการ log error นั้น
    }
  };

  // return JSX สำหรับการแสดงผล component Card
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={img} alt={title} /> {/* แสดงภาพ restaurant */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2> {/* แสดงชื่อ restaurant */}
        <p>{description}</p> {/* แสดงรายละเอียด restaurant */}
        <div className="card-actions justify-end">
          {/* ปุ่มสำหรับแก้ไข restaurant เมื่อคลิกจะไปที่หน้า edit/{id} */}
          <a className="btn btn-primary" href={`edit/${id}`}>Edit</a>
          {/* ปุ่มสำหรับลบ restaurant เมื่อคลิกจะเรียกใช้ฟังก์ชัน handleDelete */}
          <button className="btn btn-error" onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card; // ส่งออก component Card เพื่อใช้งานในไฟล์อื่น