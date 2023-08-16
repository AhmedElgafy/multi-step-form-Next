"use client";

import useGlobalHook from "../hooks/globalHook";
import { plans } from "../compsData/compsData";
import { SomeContext } from "../page";
import { useContext } from "react";

const data = plans;
export default function Plans() {
  const { planPeriod, setPlanPeriod, selectedPlan, setSelectedPlan }: any =
    useContext(SomeContext);

  const handelClickOns = (index: number | any) => {
    let pos: string = index.toString();

    setSelectedPlan(pos);
  };
  return (
    <>
      <h1 key={crypto.randomUUID()} className="title">
        {data.title}
      </h1>
      <p className=" disc">{data.disc}</p>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        {data.option.map((ele) => (
          <>
            <div
              key={crypto.randomUUID()}
              className={`border-2 cursor-pointer ${
                selectedPlan == ele[4]
                  ? "border-Purplish-blue bg-Light-blue bg-opacity-30"
                  : "border-Cool-gray"
              } flex rounded-lg md:flex-col md:w-[30%]  gap-4 p-3 align-top border-Cool-gray`}
              onClick={(e) => handelClickOns(ele[4])}
            >
              <img
                className={`md:w-[40%] block ${
                  planPeriod == "y" ? "self-start" : null
                }`}
                key={ele[4]}
                src={ele[3]}
                alt=""
              />
              <div>
                <h1 className=" font-bold text-Marine-blue text-lg">
                  {ele[0]}
                </h1>
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
      </div>
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
