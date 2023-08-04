"use clint";

import { useContext } from "react";
import { SomeContext } from "../page";
import useResultData from "../compsData/resultData";

const FinishingUp = () => {
  const { selectedOns, planPeriod, yourPlan, totalMon, totalYear } =
    useResultData();
  // const { selectedPlan } = useContext(SomeContext);
  console.log(Number(yourPlan[2].match(/\d+/g)));
  return (
    <>
      <h1 className="title">Finishing up</h1>
      <p className="disc">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-Magnolia p-4 flex flex-col gap-4 rounded-lg">
        <div className="flex items-center justify-between bg-Magnolia">
          <div>
            <h1 className="font-bold text-Marine-blue">
              {yourPlan[0]} (Monthly)
            </h1>
            <p className="underline text-Cool-gray">Change</p>
          </div>
          <p className="font-bold text-Marine-blue">
            {planPeriod == "m" ? yourPlan[1] : yourPlan[2]}
          </p>
        </div>
        {selectedOns &&
          selectedOns.map((ele) => (
            <div className="flex items-center justify-between">
              <p className="text-Cool-gray">{ele[0]}</p>
              <p className="text-Marine-blue">
                {planPeriod == "m" ? ele[1] : ele[2]}
              </p>
            </div>
          ))}
        {/* <div className="flex items-center justify-between">
          <p className="text-Cool-gray">online service</p>
          <p className="text-Marine-blue">+$1/mo</p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-Cool-gray">Larger storage</h1>
          <p className="text-Marine-blue">+$2/mo</p>
        </div> */}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-Cool-gray">total (per month)</h1>
        <p className=" text-Purplish-blue font-bold">
          +$
          {planPeriod == "m"
            ? totalMon + Number(yourPlan[1].match(/\d+/g))
            : totalYear + Number(yourPlan[2].match(/\d+/g))}
          /mo
        </p>
      </div>
    </>
  );
};

export default FinishingUp;
