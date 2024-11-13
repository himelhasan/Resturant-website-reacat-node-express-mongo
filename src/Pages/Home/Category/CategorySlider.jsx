import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

// import required modules

const CategorySlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={
          window.innerWidth <= 400
            ? 2
            : window.innerWidth <= 1080
            ? 2
            : window.innerWidth > 1080
            ? 3
            : 0
        }
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${slide1})` }}>
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 px-10 h-[200px] md:h-[400px] flex items-end justify-center pb-5">
              <h3 className="text-2xl md:text-4xl text-white text-center font-normal">
                Salad
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${slide2})` }}>
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 px-10 h-[200px] md:h-[400px] flex items-end justify-center pb-5">
              <h3 className="text-2xl md:text-4xl text-white text-center font-normal">
                Pizza
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${slide3})` }}>
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 px-10 h-[200px] md:h-[400px] flex items-end justify-center pb-5">
              <h3 className="text-2xl md:text-4xl text-white text-center font-normal">
                Soup
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${slide4})` }}>
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 px-10 h-[200px] md:h-[400px] flex items-end justify-center pb-5">
              <h3 className="text-2xl md:text-4xl text-white text-center font-normal">
                Dessert
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${slide5})` }}>
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 px-10 h-[200px] md:h-[400px] flex items-end justify-center pb-5">
              <h3 className="text-2xl md:text-4xl text-white text-center font-normal">
                Salad
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CategorySlider;
