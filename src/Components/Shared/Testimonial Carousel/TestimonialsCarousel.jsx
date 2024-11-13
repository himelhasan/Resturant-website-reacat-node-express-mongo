import { useEffect, useState } from "react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TestimonialsCarouselStyle.css";
const TestimonialsCarousel = () => {
  const [TestimonialsCarousel, setTestimonials] = useState();

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  let content = TestimonialsCarousel?.map((review) => (
    <SwiperSlide key={review.id}>
      <div className="text-center pb-10 px-2 md:px-20">
        <p className="text-lg font-Jost text-black">{review.review}</p>
        <p className="pt-8 text-sm font-Jost text-brand">{review.name}</p>
        <p className="text-sm font-Jost text-slate-800">{review.title}</p>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="testimonialSlider"
      >
        {content}
      </Swiper>
    </>
  );
};

export default TestimonialsCarousel;
