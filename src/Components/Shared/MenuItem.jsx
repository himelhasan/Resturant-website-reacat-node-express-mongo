const MenuItem = ({ item, withImage }) => {
  const { price, image, recipe, name } = item;

  return (
    <>
      {withImage && (
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
              <h4 className="uppercase text-xl text-black">{name}</h4>
              <div className="h-0 border-dashed border-2 border-[#BB8506] flex-grow "></div>
              <p className="text-xl font-normal text-[#BB8506]">${price}</p>
            </div>
            <p className="text-sm leading-4	">{recipe}</p>
          </div>
        </div>
      )}

      <div className="flex ">
        <div className="w-full px-2 flex flex-col gap-2">
          <div className="flex justify-center align-center items-center gap-2">
            <h4 className="text-2xl text-black">{name}</h4>
            <div className="h-1.5 customBorder flex-grow "></div>
            <p className="text-lg  font-normal text-slate">${price}</p>
          </div>
          <p className="text-md leading-5.5	text-slate-700">{recipe}</p>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
