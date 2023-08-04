const personalInfo = {
  title: "Personal info",
  description: "Please provide your name, email address, and phone number",
  nameInput: "e.g. Stephen King",
  emailAddress: "e.g. stephenking@lorem.com",
  phoneInput: "e.g. +1 234 567 890",
};
const plans = {
  title: "Select your plan",
  disc: "You have the option of monthly or yearly billing",
  option: [
    ["Arcade", "$9/mo", "$90/yr", "./icon-arcade.svg", "1"],
    ["Advanced", "$12/mo", "$120/yr", "./icon-advanced.svg", "2"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "3"],
  ],
};
const addOns = {
  title: "Pick add-ons",
  disc: "Add-ons help enhance your gaming experience.",
  checkImg: "./icon-checkmark.svg",
  ons: [
    ["Online service", "Access to multiplayer games", "+$1/mo", "+$10/yr", "1"],
    ["Larger storage", "Extra 1TB of cloud save", "+$2/mo", "+$20/yr", "2"],
    [
      "Customizable profile",
      "Custom theme on your profile",
      "+$2/mo",
      "+$20/yr",
      "3",
    ],
  ],
};
export { personalInfo, plans, addOns };
