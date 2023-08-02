const FinishingUp = () => {
  return (
    <>
      <h1 className="title">Finishing up</h1>
      <p className="disc">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-Magnolia p-4 flex flex-col gap-4 rounded-lg">
        <div className="flex items-center justify-between bg-Magnolia">
          <div>
            <h1 className="font-bold text-Marine-blue">Arcade (Monthly)</h1>
            <p className="underline text-Cool-gray">Change</p>
          </div>
          <p className="font-bold text-Marine-blue">$9/mo</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-Cool-gray">online service</p>
          <p className="text-Marine-blue">+$1/mo</p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-Cool-gray">Larger storage</h1>
          <p className="text-Marine-blue">+$2/mo</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-Cool-gray">total (per month)</h1>
        <p className=" text-Purplish-blue font-bold">+$12/mo</p>
      </div>
    </>
  );
};

export default FinishingUp;
