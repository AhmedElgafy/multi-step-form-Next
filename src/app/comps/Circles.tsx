interface CirclesType {
  num: number;
  selectedBtn: number;
  setSelectedBtn(num: number): void;
}
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
export default Circles;
