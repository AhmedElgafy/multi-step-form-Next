import { useContext } from "react";
import { SomeContext } from "../hooks/context";
import { useDispatch, useSelector } from "react-redux";
import useResultData from "../compsData/resultData";
import { RootState } from "../about/reduxStore/store";
import { setSelectedBtn } from "../about/reduxStore/slices/selectedBtn";
type NavType = {
  patternState: { name: boolean; email: boolean; phoneNum: boolean };
  setPatternState(value: {}): void;
};
const Navigation = ({ setPatternState }: NavType) => {
  const { isPattern } = useContext(SomeContext);
  const selectedBtn = useSelector((state: RootState) => state.selector.value);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`fixed left-0 bottom-0 md:static md:px-0 md:bg-White md:w-auto  bg-Light-gray w-full flex ${
          selectedBtn != 1 ? "justify-between" : "justify-end"
        } py-4 content-center px-10`}
      >
        {selectedBtn != 1 ? (
          <h1
            // onClick={() => setSelectedBtn((e: number) => (e = (e - 1) % 5))}
            onClick={() => dispatch(setSelectedBtn((selectedBtn - 1) % 5))}
            className="text-Cool-gray my-auto cursor-pointer font-bold"
          >
            Go Back
          </h1>
        ) : null}
        <h1
          onClick={() => {
            if (isPattern && !isPattern.isAllTrue() && selectedBtn == 1) {
              setPatternState(isPattern);
              return;
            }
            // setSelectedBtn((e: number) => {
            //   e = (e + 1) % 6;
            //   if (e == 0) e = 1;
            // return e;

            // });
            dispatch(setSelectedBtn((selectedBtn + 1) % 6));
            selectedBtn == 0 && dispatch(setSelectedBtn(1));
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
