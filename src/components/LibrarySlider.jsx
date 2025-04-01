import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.webp";
import book3 from "../assets/book3.webp";
import book4 from "../assets/book4.webp";

const images = [book1, book2, book3, book4];

export default function LibrarySlider() {
  return (
    <div className="max-w-3xl mx-auto">
      <Swiper
        slidesPerView={1} // ✅ แสดง 1 รูปต่อ slide
        spaceBetween={20}
        loop={true} // ✅ วนลูป
        autoplay={{
          delay: 2500, // 2.5 วินาทีต่อ slide
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className=" h-[500px] object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
