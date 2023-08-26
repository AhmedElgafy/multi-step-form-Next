"use client";
import { type } from "os";
import { Dispatch, SetStateAction, useState } from "react";

export default function useGlobalHook() {
  const [planPeriod, setPlanPeriod] = useState("m");
  const [selectedPlan, setSelectedPlan] = useState("1");
  const [selected, setSelected]: any = useState({
    1: false,
    2: false,
    3: false,
  });
  type Pattern = {
    name: boolean;
    email: boolean;
    phoneNum: boolean;
    isAllTrue(): boolean;
  };
  const isPattern: Pattern = {
    name: false,
    email: false,
    phoneNum: false,
    isAllTrue() {
      return this.email && this.name && this.phoneNum;
    },
  };
  const [selectedBtn, setSelectedBtn] = useState(1);
  console.log("hi");
  const [name, upDateName] = useState<string>("");
  return {
    name,
    upDateName,
    selectedBtn,
    isPattern,
    setSelectedBtn,
    selected,
    setSelected,
    planPeriod,
    setPlanPeriod,
    selectedPlan,
    setSelectedPlan,
  };
}
type Pattern = {
  name: boolean;
  email: boolean;
  phoneNum: boolean;
  isAllTrue(): boolean;
};
export type UseGlobalHook = {
  name?: string;
  upDateName?: Dispatch<SetStateAction<string>>;
  selectedBtn?: number;
  isPattern?: Pattern;
  setSelectedBtn?: Dispatch<SetStateAction<number>>;
  selected?: any;
  setSelected?: any;
  planPeriod?: string;
  setPlanPeriod?: Dispatch<SetStateAction<string>>;
  selectedPlan?: string;
  setSelectedPlan?: Dispatch<SetStateAction<string>>;
};
