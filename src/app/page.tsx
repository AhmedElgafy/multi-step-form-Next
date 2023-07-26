"use client";
import PersonalInfo from "./comps/personal_info";
import { useState, useEffect } from "react";
import Plans from "./comps/plans";
import AddOns from "./comps/addOns";
import FinishingUp from "./comps/finishingUp";
interface CirclesType {
  num: number;
  selectedBtn: number;
  setSelectedBtn(num: number): void;
}
const Circles = ({ num, selectedBtn, setSelectedBtn }: CirclesType) => {
  return (
    <>
      <p
        key={num}
        onClick={(e) => setSelectedBtn(num)}
        className={`circles ${
          selectedBtn == num
            ? "bg-Light-blue text-Marine-blue border-Light-gray"
            : null
        }`}
      >
        {num}
      </p>
    </>
  );
};
export default function Home() {
  const [selectedBtn, setSelectedBtn] = useState(1);
  const Routes = () => {
    switch (selectedBtn) {
      case 2:
        return <Plans />;

      case 3:
        return <AddOns />;
      case 4:
        return <FinishingUp />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <>
      <main className="font-ubuntu  flex flex-col  mt-6 gap-4 justify-center items-center">
        <div className=" flex gap-5 my-5 text-White items-center justify-center">
          {[1, 2, 3, 4].map((ele) => (
            <Circles
              key={ele}
              selectedBtn={selectedBtn}
              setSelectedBtn={setSelectedBtn}
              num={ele}
            />
          ))}
        </div>
        <div className="flex flex-col shadow-lg bg-White w-96 pt-8 p-6 gap-3 rounded-lg">
          {<Routes />}
        </div>
      </main>
    </>
  );
}
