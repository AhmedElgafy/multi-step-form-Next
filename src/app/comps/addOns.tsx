const AddOns = () => {
  const data = {
    title: "Pick add-ons",
    disc: "Add-ons help enhance your gaming experience.",
    checkImg: "./icon-checkmark.svg",
    ons: [
      ["Online service", "Access to multiplayer games", "+$1/mo", "+$10/yr"],
      ["Larger storage", "Extra 1TB of cloud save", "+$2/mo", "+$20/yr"],
      [
        "Customizable profile",
        "Custom theme on your profile",
        "+$2/mo",
        "+$20/yr",
      ],
    ],
  };
  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className="disc">{data.disc}</p>
      {data.ons.map((ele) => (
        <>
          <div className="border-2 rounded-lg flex items-center justify-between gap-3 p-2">
            <div className="flex items-center">
              <div className="bg-Marine-blue m-2 w-6 h-6 flex items-center justify-center rounded-lg">
                <img className="block" src={data.checkImg} alt="" />
              </div>
              <div>
                <h1>{ele[0]}</h1>
                <p className="text-sm">{ele[1]}</p>
              </div>
            </div>
            <p className="">{ele[2]}</p>
          </div>
        </>
      ))}
    </>
  );
};

export default AddOns;
