import Plans from "./plans";
import AddOns from "./addOns";
import FinishingUp from "./finishingUp";
import ThankYou from "./thankYou";
import PersonalInfo from "./personal_info";

interface RouteType {
  patternState: { name: boolean; email: boolean; phoneNum: boolean };
  setPatternState(value: {}): void;
  selectedBtn: number;
  setSelectedBtn(num: number): void;
}
const Routes = ({
  selectedBtn,
  setSelectedBtn,
  patternState,
  setPatternState,
}: RouteType) => {
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
        <PersonalInfo
          key={crypto.randomUUID()}
          patternState={patternState}
          setPatternState={setPatternState}
        />
      );
  }
};
export default Routes;
