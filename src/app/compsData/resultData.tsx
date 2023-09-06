import { plans, addOns } from "./compsData";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../about/reduxStore/store";
export default function useResultData() {
  const selected = useSelector((state: RootState) => state.selected);
  const selectedPlan = useSelector(
    (state: RootState) => state.selectedPlan.value
  );
  const planPeriod = useSelector((state: RootState) => state.planPeriod);

  plans.option[0][0];
  const selectedOns = [];
  for (let i = 0; i < 3; i++) {
    if (selected[i + 1]) {
      selectedOns.push([addOns.ons[i][0], addOns.ons[i][2], addOns.ons[i][3]]);
    }
  }

  console.log(selectedPlan);
  const yourPlan = selectedPlan
    ? [
        plans.option[Number(selectedPlan) - 1][0],
        plans.option[Number(selectedPlan) - 1][1],
        plans.option[Number(selectedPlan) - 1][2],
      ]
    : null;

  var totalMon = 0;
  var totalYear = 0;

  selectedOns.forEach((ele) => {
    totalMon = totalMon + Number(ele[1].match(/\d+/g));
    totalYear = totalYear + Number(ele[2].match(/\d+/g));
  });
  return { selectedOns, planPeriod, yourPlan, totalMon, totalYear };
}
