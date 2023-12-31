"use client";
import { ChangeEvent, useContext, useState } from "react";
import { personalInfo } from "../compsData/compsData";
import { SomeContext } from "../hooks/context";
import { UseGlobalHook } from "../hooks/globalHook";
const data = personalInfo;

export default function PersonalInfo({ patternState }: any) {
  const { isPattern, name } = useContext<UseGlobalHook>(SomeContext);
  const [nameStatus, setName] = useState<string | undefined>(name);
  // console.log(name);
  const checkName = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[a-z ,.'-]+$/i;
    // upDateName(e.target.value);
    setName(e.target.value);
    // console.log(nameStatus);
    isPattern == undefined
      ? null
      : (isPattern.name = pattern.test(e.target.value));
  };
  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    isPattern == undefined
      ? null
      : (isPattern.email = pattern.test(e.target.value));
  };
  const checkPhoneNum = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    isPattern == undefined
      ? null
      : (isPattern.phoneNum = pattern.test(e.target.value));
  };

  return (
    <>
      <h1 className="title">{data.title}</h1>
      <p className="disc">{data.description}</p>
      <div>
        <label htmlFor="Name" className="block ">
          Name
        </label>
        <input
          type="text"
          value={nameStatus}
          onChange={(e) => checkName(e)}
          name="Name"
          id="Name"
          placeholder={data.nameInput}
        />
        {!patternState.name && (
          <p className="text-Strawberry-red ">name is required</p>
        )}
      </div>
      <div>
        <label htmlFor="EmailAddress" className="block">
          Email Address
        </label>
        <input
          pattern=""
          type="text"
          name="email"
          onChange={(e) => checkEmail(e)}
          // value={email}
          id="EmailAddress"
          placeholder={data.emailAddress}
        />
        {!patternState.email && (
          <p className="text-Strawberry-red ">email is required</p>
        )}
      </div>
      <div>
        <label htmlFor="PhoneNumber" className="block">
          Phone Number
        </label>
        <input
          type="text"
          onChange={(e) => checkPhoneNum(e)}
          name="PhoneNumber"
          placeholder={data.phoneInput}
          // value={phoneNum}
          id="PhoneNumber"
        />
        {!patternState.phoneNum && (
          <p className="text-Strawberry-red ">Phone number is required</p>
        )}
      </div>
    </>
  );
}
