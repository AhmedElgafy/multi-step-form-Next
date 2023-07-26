export default function PersonalInfo() {
  const data = {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number",
    nameInput: "e.g. Stephen King",
    emailAddress: "e.g. stephenking@lorem.com",
    phoneInput: "e.g. +1 234 567 890",
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
        <input type="text" name="Name" id="" placeholder={data.emailAddress} />
      </div>
      <div>
        <label htmlFor="PhoneNumber" className="block">
          Email Address
        </label>
        <input type="text" name="Name" id="" placeholder={data.phoneInput} />
      </div>
    </>
  );
}
