"use client";
import { useContext } from "react";
import { personalInfo } from "../compsData/compsData";
import { SomeContext } from "../page";
const data = personalInfo;

export default function PersonalInfo() {
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
        <input type="text" name="Name" id="" placeholder={data.emailAddress} />
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
