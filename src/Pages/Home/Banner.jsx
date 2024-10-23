// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img3 from "../../assets/coffee-bg.jpg";
// import img2 from "../../assets/home-bg-2-1.jpg";
import img1 from "../../assets/home-bg-7.jpg";

const Banner = () => {
  return (
    // <Carousel
    //   dynamicHeight
    //   autoPlay
    //   infiniteLoop
    //   stopOnHover
    //   showStatus={false}
    //   showThumbs={false}
    //   showIndicators={false}
    // >

    //     <div
    //     className="!h-[800px] bg-cover bg-center"
    //     style={{ backgroundImage: `url(${img2})` }}
    //   >

    //   </div>
    //   <div
    //     className="!h-[800px] bg-cover bg-center"
    //     style={{ backgroundImage: `url(${img3})` }}
    //   >

    //   </div>
    //  </Carousel>
    <>
      {/* <div
        className="!h-[800px] bg-cover bg-center flex"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-black bg-opacity-50  w-screen !h-[800px] flex align-start items-center ">
          <div className="max-w-screen-xl mx-auto w-screen">
            <h1 className="text-7xl text-white text-left font-medium font-Cormorant ">
              <span className="italic">Welcome</span> to <br />{" "}
              <span>PatioTime Restaurant</span>
            </h1>
            <p className="text-white text-2xl">
              We serve food, harmony, and laughter. Making delicious food and providing{" "}
              <br /> a wonderful eating experience since 1998.
            </p>
          </div>
        </div>
      </div> */}

      <div
        className="w-full  bg-black bg-opacity-30 !h-[800px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-black bg-opacity-30 px-10 w-full !h-[800px] flex align-start items-center ">
          <div className="max-w-screen-xl mx-auto w-full">
            <h1 className="text-7xl text-white text-left font-medium font-Cormorant ">
              <span className="italic font-Cormorant font-medium">Welcome</span> to <br />{" "}
              <span className="font-Cormorant font-bold">PatioTime </span>Restaurant
            </h1>
            <p className="text-white text-2xl w-4/6">
              We serve food, harmony, and laughter. Making delicious food and providing a
              wonderful eating experience since 1998.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
