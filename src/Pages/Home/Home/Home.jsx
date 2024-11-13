import titlebg from "../../../assets/title-bg-1-3.jpg";
import FullWidthTitleSection from "../../../Components/Shared/FullWidthTitleSection";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import Banner from "../Banner";
import CategorySlider from "../Category/CategorySlider";
import PopularMenu from "../PopularMenu/PopularMenu";

import img4 from "../../../assets/choi-sungwoo-mvTvOFa-hQ4-unsplash.jpg";
import img1 from "../../../assets/img-37.jpg";
import img2 from "../../../assets/img-38.jpg";
import img3 from "../../../assets/img-39.jpg";
import TestimonialsCarousel from "../../../Components/Shared/Testimonial Carousel/TestimonialsCarousel";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="lg:-mt-60 -mt-32 lg:mx-auto lg:p-8 p-2 py-2 md:py-8 max-w-screen-xl  bg-white">
        <div className=" flex flex-col md:flex-row">
          <div className="w-full md:w-4/6">
            <CategorySlider />
          </div>
          <div className="hidden w-full md:w-2/6 md:flex flex-col justify-center items-center">
            <SectionTitle
              title={"Browse Category"}
              subTitle={"See what we are serving"}
            ></SectionTitle>
            <button className="text-white rounded-none px-20 btn btn-warning bg-[#dd5903]">
              Order Now
            </button>
          </div>
        </div>

        <SectionTitle
          title={"Popular Items"}
          subTitle={"See what people are buying"}
        ></SectionTitle>
        <PopularMenu isBox={true} itemsInRow={"4"} filter={"popular"} />
      </div>

      <FullWidthTitleSection
        title={"À la Carte"}
        subTitle={"Discover the full menu"}
        img={
          "https://patiotime.loftocean.com/wp-content/uploads/2022/03/bas-peperzak-XNNurImW1xM-unsplash.jpg"
        }
      />
      <div className="lg:-mt-60 -mt-44 lg:mx-auto  lg:p-8  py-8 max-w-screen-xl  bg-white">
        <PopularMenu isBox={false} itemsInRow={"2"} filter={"pizza"} />
      </div>

      <FullWidthTitleSection
        title={"Testimonials"}
        subTitle={"What People Are Saying"}
        img={titlebg}
      />

      <div className="lg:-mt-60 -mt-32 lg:mx-auto mx-6 lg:p-8  p-4 max-w-screen-xl  bg-white">
        <div className="flex flex-col md:flex-row align-center ">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img src={img1} alt="" className="" />
            <img src={img2} alt="" className="" />
            <img src={img3} alt="" className="" />
            <img src={img4} alt="" className="" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <SectionTitle
              subTitle={"What People Are Saying"}
              title={"Testimonials"}
            ></SectionTitle>
            <TestimonialsCarousel />
          </div>
        </div>
      </div>

      <SectionTitle
        title={"Browse Category"}
        subTitle={"See what we are serving"}
      ></SectionTitle>
    </>
  );
};

export default Home;
