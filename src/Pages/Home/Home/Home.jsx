import SectionTitle from "../../../Components/Shared/SectionTitle";
import Banner from "../Banner";
import CategorySlider from "../Category/CategorySlider";
import PopularMenu from "../PopularMenu/PopularMenu";
const Home = () => {
  return (
    <>
      <Banner />
      <div className="-mt-60 p-8 max-w-screen-xl mx-auto bg-white">
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
        <PopularMenu />
      </div>
    </>
  );
};

export default Home;
