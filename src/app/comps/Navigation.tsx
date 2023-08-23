import { useContext, useEffect, useState } from "react";
import useGlobalHook from "../hooks/globalHook";
import { SomeContext } from "../page";
type NavType = {
  selectedBtn: number;
  setSelectedBtn(num: any): void;
  patternState: { name: boolean; email: boolean; phoneNum: boolean };
  setPatternState(value: {}): void;
};
const Navigation = ({
  selectedBtn,
  setSelectedBtn,
  patternState,
  setPatternState,
}: NavType) => {
  const { isPattern } = useContext(SomeContext);
  console.log(patternState);

  return (
    <>
      <div
        className={`fixed left-0 bottom-0 md:static md:px-0 md:bg-White md:w-auto  bg-Light-gray w-full flex ${
          selectedBtn != 1 ? "justify-between" : "justify-end"
        } py-4 content-center px-10`}
      >
        {selectedBtn != 1 ? (
          <h1
            onClick={() => setSelectedBtn((e: number) => (e = (e - 1) % 5))}
            className="text-Cool-gray my-auto cursor-pointer font-bold"
          >
            Go Back
          </h1>
        ) : null}
        <h1
          onClick={() => {
            if (!isPattern.isAllTrue() && selectedBtn == 1) {
              setPatternState(isPattern);
              return;
            }
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
    </>
  );
};
export default Navigation;
