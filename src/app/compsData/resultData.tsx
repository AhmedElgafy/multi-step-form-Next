import { useContext } from "react";
import { personalInfo, plans, addOns } from "./compsData";
import { SomeContext } from "../page";
export default function useResultData() {
  const { selected, planPeriod, selectedPlan } = useContext(SomeContext);
  plans.option[0][0];
  const selectedOns = [];
  for (let i = 0; i < 3; i++) {
    if (selected[i + 1]) {
      selectedOns.push([addOns.ons[i][0], addOns.ons[i][2], addOns.ons[i][3]]);
    }
  }
  const yourPlan = [
    plans.option[selectedPlan - 1][0],
    plans.option[selectedPlan - 1][1],
    plans.option[selectedPlan - 1][2],
  ];
  var totalMon = 0;
  var totalYear = 0;
  console.log(selectedOns);
  for (let x in selectedOns) {
    // totalMon = totalMon + Number(x[2].match(/\d+/g));
    // totalYear = totalYear + Number(x[2].match(/\d+/g));
    console.log(x);
  }
  selectedOns.forEach((ele) => {
    totalMon = totalMon + Number(ele[1].match(/\d+/g));
    totalYear = totalYear + Number(ele[2].match(/\d+/g));
    console.log(ele[2]);
  });

  console.log(selectedPlan);
  return { selectedOns, planPeriod, yourPlan, totalMon, totalYear };
}
