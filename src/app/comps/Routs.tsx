import Plans from "./plans";
import AddOns from "./addOns";
import FinishingUp from "./finishingUp";
import ThankYou from "./thankYou";
import PersonalInfo from "./personal_info";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../about/reduxStore/store";

interface RouteType {
  patternState: { name: boolean; email: boolean; phoneNum: boolean };
  setPatternState(value: {}): void;
}

const Routes = ({ patternState, setPatternState }: RouteType) => {
  const selectedBtn = useSelector((state: RootState) => state.selector.value);

  switch (selectedBtn) {
    case 2:
      return <Plans key={crypto.randomUUID()} />;

    case 3:
      return <AddOns key={crypto.randomUUID()} />;
    case 4:
      return <FinishingUp key={crypto.randomUUID()} />;
    case 5:
      return <ThankYou key={crypto.randomUUID()} />;
    default:
      return (
        <PersonalInfo
          patternState={patternState}
          setPatternState={setPatternState}
        />
      );
  }
};
export default Routes;
