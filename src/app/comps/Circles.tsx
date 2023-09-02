import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../about/reduxStore/store";
import { setSelectedBtn } from "../about/reduxStore/slices/selectedBtn";

interface CirclesType {
  num: number;
}
const Circles = ({ num }: CirclesType) => {
  const dispatch = useDispatch();
  const selectedBtn = useSelector((state: RootState) => state.selector.value);

  return (
    <>
      <p
        onClick={() => dispatch(setSelectedBtn(num))}
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
export default Circles;
