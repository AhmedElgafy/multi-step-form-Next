"use client";
import { plans } from "../compsData/compsData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../about/reduxStore/store";
import { setPlanPeriod } from "../about/reduxStore/slices/planPeriod";
import { setSelectedPlan } from "../about/reduxStore/slices/selectedPlan";
const data = plans;
export default function Plans() {
  const planPeriod = useSelector((state: RootState) => state.planPeriod.value);
  const selectedPlan = useSelector(
    (state: RootState) => state.selectedPlan.value
  );
  const dispatch = useDispatch();
  const handelClickOns = (index: number | any) => {
    let pos: string = index.toString();
    dispatch(setSelectedPlan(pos));
  };
  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className=" disc">{data.disc}</p>
      <div className="flex flex-col gap-3 md:flex-row md:justify-center md:w-100  md:items-center">
        {data.option.map((ele) => (
          <div key={crypto.randomUUID()}>
            <div
              className={`border-2 cursor-pointer ${
                selectedPlan == ele[4]
                  ? "border-Purplish-blue bg-Light-blue bg-opacity-30"
                  : "border-Cool-gray"
              } flex rounded-lg md:flex-col md:w-32 md:h-[100%]  gap-4 p-3 align-top border-Cool-gray`}
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
          </div>
        ))}
      </div>
      <div className="flex gap-6 my-5 justify-center" key={crypto.randomUUID()}>
        <h1
          onClick={() => dispatch(setPlanPeriod("m"))}
          className={`${
            planPeriod == "m" ? "text-Marine-blue" : "text-Cool-gray"
          } cursor-pointer font-bold text-lg`}
        >
          Monthly
        </h1>
        <div
          onClick={() =>
            planPeriod == "m"
              ? dispatch(setPlanPeriod("y"))
              : dispatch(setPlanPeriod("m"))
          }
          className={`bg-Marine-blue h-6 w-12 rounded-[10px] cursor-pointer px-1  flex items-center ${
            planPeriod == "m" ? null : "justify-end"
          }`}
        >
          <div className="bg-White w-4 h-4 rounded-[100%]  "></div>
        </div>
        <h1
          onClick={() => dispatch(setPlanPeriod("y"))}
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
