"use client";
import PersonalInfo from "./comps/personal_info";
import { useState, createContext, useContext, useRef } from "react";
import Plans from "./comps/plans";
import AddOns from "./comps/addOns";
import FinishingUp from "./comps/finishingUp";
import ThankYou from "./comps/thankYou";
import useGlobalHook from "./hooks/globalHook";
// import "./global.css";

interface CirclesType {
  num: number;
  selectedBtn: number;
  setSelectedBtn(num: number): void;
}

export const SomeContext = createContext<any>({});
const stepsDate = [
  ["STEP 1", "YOUR INFO"],
  ["STEP 2", "SELECT PLAN"],
  ["STEP 3", "ADD-ONS"],
  ["STEP 4", "SUMMARY"],
];
const Circles = ({ num, selectedBtn, setSelectedBtn }: CirclesType) => {
  // console.log(keys);
  return (
    <>
      <p
        onClick={() => setSelectedBtn(num)}
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

  const Routes = ({ nameRef }: any) => {
    switch (selectedBtn) {
      case 2:
        return <Plans key={crypto.randomUUID()} />;

      case 3:
        return <AddOns key={crypto.randomUUID()} />;
      case 4:
        return (
          <FinishingUp
            key={crypto.randomUUID()}
            selectedBtn={selectedBtn}
            setSelectedBtn={setSelectedBtn}
          />
        );
      case 5:
        return <ThankYou key={crypto.randomUUID()} />;
      default:
        return <PersonalInfo nameRef={nameRef} key={crypto.randomUUID()} />;
    }
  };
  const nameRef = useRef(0);

  return (
    <>
      <main className="relative md:h-[80%] font-ubuntu md:justify-between md:shadow-lg md:p-3 md:flex-row  md:bg-White md:mx-auto md:w-[70%] md:rounded-lg md:items-stretch  flex flex-col   mt-6 gap-4  justify-center  items-center">
        <SomeContext.Provider value={useGlobalHook()}>
          <div className=" flex md:items-start md:pl-6 md:pt-10 md:gap-10 md:justify-start gap-5 my-5 md:flex-col md:w-[30%] md:rounded-lg md:bg-[url('/bg-sidebar-desktop.svg')] md:bg-cover md:bg-no-repeat text-White md:my-0 items-center justify-center">
            {[1, 2, 3, 4].map((ele) => (
              <div className="flex gap-3">
                <Circles
                  key={crypto.randomUUID()}
                  selectedBtn={selectedBtn}
                  setSelectedBtn={setSelectedBtn}
                  num={ele}
                />
                <div className="hidden md:block">
                  <h1 className="text-Cool-gray text-sm">
                    {stepsDate[ele - 1][0]}
                  </h1>
                  <h1 className="text-sm">{stepsDate[ele - 1][1]}</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:shadow-none md:w-[70%] shadow-lg bg-White w-96 py-12 p-6  gap-3 rounded-lg">
            {<Routes nameRef={nameRef} />}
            {/* next ------- goback comp */}
            {selectedBtn != 5 && (
              <div
                className={`fixed left-0 bottom-0 md:static md:px-0 md:bg-White md:w-auto  bg-Light-gray w-full flex ${
                  selectedBtn != 1 ? "justify-between" : "justify-end"
                } py-4 content-center px-10`}
              >
                {selectedBtn != 1 ? (
                  <h1
                    onClick={() =>
                      setSelectedBtn((e: number) => (e = (e - 1) % 5))
                    }
                    className="text-Cool-gray my-auto cursor-pointer font-bold"
                  >
                    Go Back
                  </h1>
                ) : null}
                <h1
                  onClick={() => {
                    console.log(nameRef.current);
                    setSelectedBtn((e: number) => {
                      e = (e + 1) % 6;
                      if (e == 0) e = 1;
                      return e;
                    });
                  }}
                  className="p-3 bg-Marine-blue text-White cursor-pointer font-bold rounded-lg"
                >
                  {selectedBtn == 4 ? "Confirm" : "Next Step"}
                </h1>
              </div>
            )}
          </div>
        </SomeContext.Provider>
      </main>
    </>
  );
}
