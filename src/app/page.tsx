"use client";
import PersonalInfo from "./comps/personal_info";
import { useState, useEffect } from "react";
import Plans from "./comps/plans";
import AddOns from "./comps/addOns";
import FinishingUp from "./comps/finishingUp";
import ThankYou from "./comps/thankYou";
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
      case 5:
        return <ThankYou />;
      default:
        return <PersonalInfo />;
    }
  };
  // console.log(selectedBtn);
  return (
    <>
      <main className="relative font-ubuntu  flex flex-col  mt-6 gap-4 justify-center items-center">
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
        <div className="flex flex-col shadow-lg bg-White w-96 py-12 p-6  gap-3 rounded-lg">
          {<Routes />}
        </div>

        <div
          className={`fixed bottom-0 bg-Light-gray w-full flex ${
            selectedBtn != 1 ? "justify-between" : "justify-end"
          } py-4 content-center px-10`}
        >
          {selectedBtn != 1 ? (
            <h1
              onClick={() => setSelectedBtn((e) => (e = (e - 1) % 5))}
              className="text-Cool-gray my-auto cursor-pointer font-bold"
            >
              Go Back
            </h1>
          ) : null}
          <h1
            onClick={() =>
              setSelectedBtn((e) => {
                e = (e + 1) % 6;
                if (e == 0) e = 1;
                return e;
              })
            }
            className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
          >
            Next Step
          </h1>
        </div>
      </main>
    </>
  );
}
