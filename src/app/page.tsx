"use client";
import PersonalInfo from "./comps/personal_info";
import { useState, createContext, useContext } from "react";
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

  const Routes = ({ validation }: any) => {
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
        return (
          <PersonalInfo validation={validation} key={crypto.randomUUID()} />
        );
    }
  };
  // console.log(crypto.randomUUID());
  const checkInputs = () => {};
  const validation = {
    name: false,
    setName(value: boolean) {
      this.name = value;
    },
    email: false,
    setEmail(value: boolean) {
      this.name = value;
    },
    phoneNum: false,
    setPhoneNum(value: boolean) {
      this.name = value;
    },
    allValidate() {
      return this.name && this.phoneNum && this.email;
    },
  };
  return (
    <>
      <main className="relative font-ubuntu md:mx-5 h-full flex flex-col md:flex-row  mt-6 gap-4 md:gap-0 justify-center md:items-start items-center">
        <SomeContext.Provider value={useGlobalHook()}>
          <div className=" flex gap-5 my-5 md:my-0 md:flex-col md:bg-[url('/bg-sidebar-desktop.svg')] md:h-[10%] md:w-52 text-White items-center justify-center">
            {[1, 2, 3, 4].map((ele) => (
              <Circles
                key={crypto.randomUUID()}
                selectedBtn={selectedBtn}
                setSelectedBtn={setSelectedBtn}
                num={ele}
              />
            ))}
          </div>
          <div className="flex flex-col shadow-lg bg-White w-96 py-12 p-6  gap-3 rounded-lg">
            {<Routes validation={validation} />}
          </div>
          {/* next ------- goback comp */}
          {selectedBtn != 5 && (
            <div
              className={`fixed bottom-0 bg-Light-gray w-full flex ${
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
        </SomeContext.Provider>
      </main>
    </>
  );
}
