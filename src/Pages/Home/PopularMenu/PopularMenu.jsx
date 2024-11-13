import MenuItem from "../../../Components/Shared/MenuItem";
import MenuItemBox from "../../../Components/Shared/MenuItemBox";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = ({ isBox, itemsInRow, filter }) => {
  const [menu] = useMenu();
  const popularItems = menu?.filter((item) => item?.category === `${filter}`);
  let content = popularItems.map(
    (item) =>
      (isBox && <MenuItemBox key={item._id} item={item}></MenuItemBox>) ||
      (!isBox && <MenuItem key={item._id} item={item}></MenuItem>)
  );

  const gridColumnsClass = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  return (
    <>
      <div
        className={`  grid ${
          gridColumnsClass[itemsInRow] || "lg:grid-cols-1"
        } md:grid-cols-2 lg:gap-x-20 lg:gap-y-8 lg:px-10 mx-auto lg:gap-6 gap-2 gap-y-6 px-4 `}
      >
        {content}
      </div>
    </>
  );
};

export default PopularMenu;
