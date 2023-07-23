"use client";
import PersonalInfo from "./comps/personal_info";
interface CirclesType {
  num: number;
}
const Circles = ({ num }: CirclesType) => {
  return (
    <>
      <p className="border rounded-[100%] w-10 h-10 flex items-center justify-center ">
        {num}
      </p>
    </>
  );
};
export default function Home() {
  // document.body.style.background = "url(bg-sidebar-mobile.svg)";

  return (
    <>
      <main className="font-ubuntu  flex flex-col justify-center items-center">
        <div className=" flex gap-5 text-White items-center justify-center">
          {[1, 2, 3, 4].map((ele) => (
            <Circles num={ele} />
          ))}
        </div>
        <PersonalInfo />
      </main>
    </>
  );
}
