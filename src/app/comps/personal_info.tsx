"use client";
import {
  ChangeEvent,
  HtmlHTMLAttributes,
  useContext,
  useRef,
  useState,
} from "react";
import { personalInfo } from "../compsData/compsData";
import { SomeContext } from "../page";
import { setConfig } from "next/config";
const data = personalInfo;

export default function PersonalInfo({ nameRef }: any) {
  const { isPattern, setIsPattern } = useContext(SomeContext);
  // const [name, setName] = useState<string | undefined>(undefined);
  const checkEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  };
  const checkPhoneNum = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  };
  const checkName = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[a-z ,.'-]+$/i;
    nameRef.current = e.target.value;
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
          // ref={nameRef}
          onChange={(e) => checkName(e)}
          name="Name"
          id=""
          placeholder={data.nameInput}
        />
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
          id=""
          placeholder={data.emailAddress}
        />
      </div>
      <div>
        <label htmlFor="PhoneNumber" className="block">
          Phone Number
        </label>
        <input
          type="text"
          onChange={(e) => checkPhoneNum(e)}
          name="Name"
          placeholder={data.phoneInput}
        />
      </div>
    </>
  );
}
