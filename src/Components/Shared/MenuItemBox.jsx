const MenuItemBox = ({ item }) => {
  const { price, image, recipe, name } = item;

  return (
    <div className="flex flex-col ">
      <div
        className="h-72 w-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <h4 className="text-xl text-center pt-4 pb-1 text-black"> {name}</h4>
      <p className="text-md text-center text-slate-400">${price}</p>
    </div>
  );
};

export default MenuItemBox;
