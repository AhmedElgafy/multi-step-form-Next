"use client";
import { useState, useEffect } from "react";
export default function Plans() {
  const data = {
    title: "Select your plan",
    disc: "You have the option of monthly or yearly billing",
    option: [
      ["Arcade", "$9/mo", "$90/yr", "./icon-arcade.svg"],
      ["Advanced", "$12/mo", "$120/yr", "./icon-advanced.svg"],
      ["pro", "$15/mo", "$120/yr", "./icon-pro.svg"],
    ],
  };
  const [planPeriod, setPlanPeriod] = useState("m");
  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className=" disc">{data.disc}</p>
      {data.option.map((ele) => (
        <>
          <div className="border-2 flex rounded-lg gap-4 p-3 align-top border-Cool-gray">
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
