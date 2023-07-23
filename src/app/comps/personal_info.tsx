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
      <div className="flex flex-col bg-White w-96  p-5  my-auto border-solid border-2 gap-3">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="text-Cool-gray">{data.description}</p>
        <div>
          <label htmlFor="Name" className="block text-sm">
            Name
          </label>
          <input type="text" name="Name" id="" placeholder={data.nameInput} />
        </div>
        <div>
          <label htmlFor="EmailAddress" className="block">
            Email Address
          </label>
          <input
            type="text"
            name="Name"
            id=""
            placeholder={data.emailAddress}
          />
        </div>
        <div>
          <label htmlFor="PhoneNumber" className="block">
            Email Address
          </label>
          <input type="text" name="Name" id="" placeholder={data.phoneInput} />
        </div>
      </div>
    </>
  );
}
