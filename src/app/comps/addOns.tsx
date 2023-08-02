"use clint";
import { useEffect, useState } from "react";
interface Map {
  [key: number]: boolean;
}
const AddOns = () => {
  const [selected, setSelected]: any = useState({
    1: false,
    2: false,
    3: false,
  });

  const data = {
    title: "Pick add-ons",
    disc: "Add-ons help enhance your gaming experience.",
    checkImg: "./icon-checkmark.svg",
    ons: [
      ["Online service", "Access to multiplayer games", "+$1/mo", "+$10/yr", 1],
      ["Larger storage", "Extra 1TB of cloud save", "+$2/mo", "+$20/yr", 2],
      [
        "Customizable profile",
        "Custom theme on your profile",
        "+$2/mo",
        "+$20/yr",
        3,
      ],
    ],
  };
  const handelClickOns = (index: number | any) => {
    selected[index.toString()]
      ? (selected[index.toString()] = false)
      : (selected[index.toString()] = true);
    const newOne = { ...selected };
    setSelected(newOne);
  };

  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className="disc">{data.disc}</p>
      {data.ons.map((ele) => (
        <>
          <div
            key={ele[4]}
            onClick={(e) => handelClickOns(ele[4])}
            className={`border-2 ${
              selected[ele[4]]
                ? "border-Purplish-blue bg-Light-blue bg-opacity-30"
                : "border-Cool-gray"
            }  rounded-lg flex cursor-pointer items-center justify-between gap-3 p-2`}
          >
            <div className="flex items-center">
              <div
                className={`border-2 ${
                  selected[ele[4]]
                    ? "bg-Marine-blue"
                    : "border-Cool-gray bg-White"
                } bg-Marine-blue m-2 w-6 h-6 flex items-center justify-center rounded-lg`}
              >
                <img
                  className="block"
                  src={selected[ele[4]] ? data.checkImg : ""}
                  alt=""
                />
              </div>
              <div>
                <h1>{ele[0]}</h1>
                <p className="text-sm">{ele[1]}</p>
              </div>
            </div>
            <p className="text-Purplish-blue">{ele[2]}</p>
          </div>
        </>
      ))}
    </>
  );
};

export default AddOns;
