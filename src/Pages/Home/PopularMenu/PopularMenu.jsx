import MenuItem from "../../../Components/Shared/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu?.filter((item) => item?.category === "popular");
  let content = popularItems.map((item) => (
    <MenuItem key={item._id} item={item}></MenuItem>
  ));

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-x-20 gap-y-8 px-10">{content}</div>
    </>
  );
};

export default PopularMenu;
