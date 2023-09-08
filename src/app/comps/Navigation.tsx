import { useContext } from "react";
import { SomeContext } from "../hooks/context";
import { useDispatch, useSelector } from "react-redux";
import patternState, {
  setPatternState,
} from "../about/reduxStore/slices/patternState";
import { RootState } from "../about/reduxStore/store";
import { setSelectedBtn } from "../about/reduxStore/slices/selectedBtn";

const Navigation = () => {
  // const { isPattern } = useContext(SomeContext);

  const selectedBtn = useSelector((state: RootState) => state.selector.value);
  const patternState = useSelector((state: RootState) => state.patternState);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`fixed left-0 bottom-0 md:static md:px-0 md:bg-White md:w-auto
          bg-Light-gray w-full flex ${
            selectedBtn != 1 ? "justify-between" : "justify-end"
          } py-4 content-center px-10`}
      >
        {selectedBtn != 1 ? (
          <h1
            onClick={() => dispatch(setSelectedBtn((selectedBtn - 1) % 5))}
            className="text-Cool-gray my-auto cursor-pointer font-bold"
          >
            Go Back
          </h1>
        ) : null}
        <h1
          onClick={() => {
            console.log(patternState.isAllTrue());
            if (!patternState.isAllTrue()) {
              console.log(patternState);
              return;
            }
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
