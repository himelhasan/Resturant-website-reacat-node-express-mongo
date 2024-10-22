const MenuItem = (param) => {
  const { price, image, recipe, name } = param.item;

  return (
    <div className="flex ">
      <div
        className="w-1/6 h-24 rounded-tr-full rounded-br-full rounded-bl-full bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="w-5/6 px-2">
        <div
          className="flex justify-center align-center items-center gap-4
        "
        >
          <h2 className="uppercase text-xl text-black ">{name}</h2>
          <div className="h-0 border-dashed border-2 border-[#BB8506] flex-grow "></div>
          <p className="text-xl font-normal text-[#BB8506]">${price}</p>
        </div>
        <p className="text-sm leading-4	">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
