"use client";
import { useState, useEffect } from "react";
export default function Plans() {
  const [selected, setSelected]: any = useState({
    1: false,
    2: false,
    3: false,
  });
  const data = {
    title: "Select your plan",
    disc: "You have the option of monthly or yearly billing",
    option: [
      ["Arcade", "$9/mo", "$90/yr", "./icon-arcade.svg", "1"],
      ["Advanced", "$12/mo", "$120/yr", "./icon-advanced.svg", "2"],
      ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "3"],
    ],
  };
  const [planPeriod, setPlanPeriod] = useState("m");
  const [selectedPlan, setSelectedPlan] = useState("1");
  const handelClickOns = (index: number | any) => {
    let pos: string = index.toString();

    setSelectedPlan(pos);
  };
  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className=" disc">{data.disc}</p>
      {data.option.map((ele) => (
        <>
          <div
            className={`border-2 cursor-pointer ${
              selectedPlan == ele[4]
                ? "border-Purplish-blue bg-Light-blue bg-opacity-30"
                : "border-Cool-gray"
            } flex rounded-lg gap-4 p-3 align-top border-Cool-gray`}
            key={ele[4] + 50}
            onClick={(e) => handelClickOns(ele[4])}
          >
            <img
              className={`block ${planPeriod == "y" ? "self-start" : null}`}
              src={ele[3]}
              alt=""
            />
            <div>
              <h1 className=" font-bold text-Marine-blue text-lg">{ele[0]}</h1>
              <p className="text-Cool-gray">
                {planPeriod == "m" ? ele[1] : ele[2]}
              </p>
              {planPeriod == "y" ? (
                <p className="text-Marine-blue text-sm">2 month for free</p>
              ) : null}
            </div>
          </div>
        </>
      ))}
      <div className="flex gap-6 my-5 justify-center">
        <h1
          onClick={() => setPlanPeriod("m")}
          className={`${
            planPeriod == "m" ? "text-Marine-blue" : "text-Cool-gray"
          } cursor-pointer font-bold text-lg`}
        >
          Monthly
        </h1>
        <div
          onClick={() =>
            planPeriod == "m" ? setPlanPeriod("y") : setPlanPeriod("m")
          }
          className={`bg-Marine-blue h-6 w-12 rounded-[10px] cursor-pointer px-1  flex items-center ${
            planPeriod == "m" ? null : "justify-end"
          }`}
        >
          <div className="bg-White w-4 h-4 rounded-[100%]  "></div>
        </div>
        <h1
          onClick={() => setPlanPeriod("y")}
          className={`${
            planPeriod == "m" ? "text-Cool-gray" : "text-Marine-blue"
          } cursor-pointer font-bold text-lg`}
        >
          Yearly
        </h1>
      </div>
    </>
  );
}
