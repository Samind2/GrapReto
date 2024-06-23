import React from 'react';
import Card from './Card';

const restaurantData = [
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2WTC4CBRLAAT6/hero/0fde20fb0c5d49828e96a471427ca912_1627032648354524333.webp",
      title: "Jeng noodle(เจ็ง นู้ดเดิ้ล) - สามเสน",
      description: "อาหารตามสั่ง"
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C33CAKDCBBEVBA/hero/442f28f2-bdbe-4fe3-8c68-fd77faf31466__store_cover__2023__01__30__07__54__16.webp",
      title: "มีเฮง หมี่ไก่ฉีก - ซอยนาคบำรุง",
      description: "อาหารเส้น"
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZDJLKJEDAVAE2/hero/bca9070c0c964cb889dbe543eeef61d2_1587008101690373547.webp",
      title: "พระศุลีเกสทเฮ้าส์ - ถนนดินสอ",
      description: "อาหารตามสั่ง, สเต็ก, น้ำผลไม้/สมูทตี้"
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/THGFIST000008rq/hero/cover_131f378f53ba49679f9bd2c6937f7516_1714019753768191699.webp",
      title: "ChaTraMue (ชาตรามือ) - เยาวราช",
      description: "ชา กาแฟ, ชานมไข่มุก"
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2TAJK62EENWET/hero/a3c8ad2935ff4c7397c23df7704b35e0_1620285472619152091.webp",
      title: "เจ๊ดาวข้าวแกง ท่าน้ำราชวงศ์ - ถ.ท่าน้ำราชวงศ์",
      description: "อาหารตามสั่ง, ยำ"
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2AEC2B2EUUDFA/hero/ea8763d854804404b5652371ff003ffd_1650356914758712778.webp",
      title: "โจ๊กบางกอก - สาขาบางขุนนนท์",
      description: "โจ๊ก, ติ่มซำ"
    }
  ];

function Restaurant() {
  return (
    <div className="flex flex-wrap justify-center">
      {restaurantData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default Restaurant;
