import FullWidthTitleSection from "../../../Components/Shared/FullWidthTitleSection";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import Banner from "../Banner";
import CategorySlider from "../Category/CategorySlider";
import PopularMenu from "../PopularMenu/PopularMenu";
const Home = () => {
  return (
    <>
      <Banner />
      <div className="lg:-mt-60 -mt-44 lg:mx-auto mx-6 lg:p-8  py-8 max-w-screen-xl  bg-white">
        <div className="flex">
          <div className="w-4/6">
            <CategorySlider />
          </div>
          <div className="w-2/6 flex flex-col justify-center items-center">
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
      <div className="lg:-mt-60 -mt-44 lg:mx-auto mx-6 lg:p-8  py-8 max-w-screen-xl  bg-white">
        <PopularMenu isBox={false} itemsInRow={"2"} filter={"pizza"} />
      </div>
    </>
  );
};

export default Home;
