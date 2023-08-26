"use clint";

import useResultData from "../compsData/resultData";
type PropsType = {
  selectedBtn: number;
  setSelectedBtn(e: number): void;
};
const FinishingUp = ({ selectedBtn, setSelectedBtn }: PropsType) => {
  const { selectedOns, planPeriod, yourPlan, totalMon, totalYear } =
    useResultData();

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
              {yourPlan && yourPlan[0]} (Monthly)
            </h1>
            <p
              onClick={(e) => {
                setSelectedBtn(2);
                console.log("from finishing: " + selectedBtn);
              }}
              className="underline cursor-pointer text-Cool-gray"
            >
              Change
            </p>
          </div>
          <p className="font-bold text-Marine-blue">
            {yourPlan && planPeriod == "m"
              ? yourPlan[1]
              : yourPlan && yourPlan[2]}
          </p>
        </div>
        {selectedOns &&
          selectedOns.map((ele) => (
            <div
              key={crypto.randomUUID()}
              className="flex items-center justify-between"
            >
              <p className="text-Cool-gray">{ele[0]}</p>
              <p className="text-Marine-blue">
                {planPeriod == "m" ? ele[1] : ele[2]}
              </p>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-Cool-gray">total (per month)</h1>
        <p className=" text-Purplish-blue font-bold">
          +$
          {yourPlan && planPeriod == "m"
            ? totalMon + Number(yourPlan[1].match(/\d+/g))
            : totalYear + Number(yourPlan && yourPlan[2].match(/\d+/g))}
          /mo
        </p>
      </div>
    </>
  );
};

export default FinishingUp;
