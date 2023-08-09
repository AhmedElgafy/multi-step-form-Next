"use client";
import { ChangeEvent, HtmlHTMLAttributes, useContext } from "react";
import { personalInfo } from "../compsData/compsData";
import { SomeContext } from "../page";
const data = personalInfo;

export default function PersonalInfo() {
  const { isPattern, setIsPattern } = useContext(SomeContext);
  const handelInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    console.log(pattern.test(e.target.value));
  };
  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className="disc">{data.description}</p>
      <div>
        <label htmlFor="Name" className="block ">
          Name
        </label>
        <input type="text" name="Name" id="" placeholder={data.nameInput} />
      </div>
      <div>
        <label htmlFor="EmailAddress" className="block">
          Email Address
        </label>
        <input
          pattern=""
          type="text"
          name="email"
          onChange={(e) => handelInput(e)}
          id=""
          placeholder={data.emailAddress}
        />
      </div>
      <div>
        <label htmlFor="PhoneNumber" className="block">
          Phone Number
        </label>
        <input type="text" name="Name" id="" placeholder={data.phoneInput} />
      </div>
    </>
  );
}
