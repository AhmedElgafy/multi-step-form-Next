"use clint";
import { useContext, useEffect, useState } from "react";
import useGlobalHook from "../hooks/globalHook";
import { addOns } from "../compsData/compsData";
import { SomeContext } from "../page";

const data = addOns;
const AddOns = () => {
  const { selected, setSelected, planPeriod } = useContext(SomeContext);

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
            <p className="text-Purplish-blue">
              {planPeriod == "m" ? ele[2] : ele[3]}
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default AddOns;
