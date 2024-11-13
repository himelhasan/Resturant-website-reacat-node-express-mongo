// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center pt-14 md:pt-28 pb-10">
      <p className="text-sm md:text-lg font-Jost text-brand">{subTitle}</p>
      <h2 className="text-4xl md:text-5xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;
