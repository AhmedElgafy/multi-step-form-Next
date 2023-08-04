"use client";
import { useState, createContext } from "react";

// const SomeContext=createContext(useGlobalHook)

export default function useGlobalHook() {
  const [planPeriod, setPlanPeriod] = useState("m");
  const [selectedPlan, setSelectedPlan] = useState("1");
  const [selected, setSelected]: any = useState({
    1: false,
    2: false,
    3: false,
  });
  const [selectedBtn, setSelectedBtn] = useState<any>(1);

  return {
    selectedBtn,
    setSelectedBtn,
    selected,
    setSelected,
    planPeriod,
    setPlanPeriod,
    selectedPlan,
    setSelectedPlan,
  };
}
