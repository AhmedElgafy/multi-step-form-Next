"use client";
import { ChangeEvent, useContext, useState } from "react";
import { personalInfo } from "../compsData/compsData";
import { SomeContext } from "../hooks/context";
import { UseGlobalHook } from "../hooks/globalHook";
import { setPersonalInfoState } from "../about/reduxStore/slices/personalInfoState";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../about/reduxStore/store";
import { setPatternState } from "../about/reduxStore/slices/patternState";
const data = personalInfo;

export default function PersonalInfo() {
  // const { isPattern, name } = useContext<UseGlobalHook>(SomeContext);
  const patternState = useSelector((state: RootState) => state.patternState);
  const personalInfoState = useSelector(
    (state: RootState) => state.personalInfoState
  );
  console.log(patternState);
  const dispatch = useDispatch();

  const checkName = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[a-z ,.'-]+$/i;
    const dispatchPersonalInfo = { ...personalInfoState, name: e.target.value };
    dispatch(setPersonalInfoState(dispatchPersonalInfo));

    const dispatchPattern = {
      ...patternState,
      name: pattern.test(e.target.value),
    };
    dispatch(setPatternState(dispatchPattern));
    console.log(patternState);
  };

  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const dispatchPersonalInfo = {
      ...personalInfoState,
      email: e.target.value,
    };
    dispatch(setPersonalInfoState(dispatchPersonalInfo));
    const dispatchPattern = {
      ...patternState,
      email: pattern.test(e.target.value),
    };
    dispatch(setPatternState(dispatchPattern));
  };

  const checkPhoneNum = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const dispatchPersonalInfo = {
      ...personalInfoState,
      phoneNum: e.target.value,
    };
    dispatch(setPersonalInfoState(dispatchPersonalInfo));
    const dispatchPattern = {
      ...patternState,
      phoneNum: pattern.test(e.target.value),
    };
    dispatch(setPatternState(dispatchPattern));
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
          onChange={(e) => checkName(e)}
          name="Name"
          value={personalInfoState.name}
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
          value={personalInfoState.email}
          name="email"
          onChange={(e) => checkEmail(e)}
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
          value={personalInfoState.phoneNum}
          placeholder={data.phoneInput}
          id="PhoneNumber"
        />
        {!patternState.phoneNum && (
          <p className="text-Strawberry-red ">Phone number is required</p>
        )}
      </div>
    </>
  );
}
