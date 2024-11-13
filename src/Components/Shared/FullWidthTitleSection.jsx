const FullWidthTitleSection = ({ title, subTitle, img }) => {
  return (
    <div
      className="w-full bg-cover bg-center mt-20"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-30 px-10 w-full !h-[400px]  md:!h-[500px]  flex align-start  ">
        <div className="max-w-screen-xl mx-auto w-full pt-28">
          <p className="text-white text-md md:text-xl text-center">{subTitle}</p>
          <h1 className="text-4xl md:text-6xl text-white text-center font-medium font-Cormorant uppercase">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FullWidthTitleSection;
