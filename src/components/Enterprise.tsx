const CardData = [{}];

const Enterprise = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:p-20 p-5 items-center">
      <div className="md:space-y-6 md:text-left text-center space-y-4">
        <h1 className="md:text-3xl text-2xl font-semibold">
          Slack is trusted by teams of size or seamless collaboration
        </h1>
        <p className="text-gray-400">
          Slack a trusted collaboration platform, seamlessly catrs to teams of
          all sizes, enhancing communication
        </p>
        <p className="text-gray-400">
          Slack a trusted collaboration platform, seamlessly catrs to teams of
          all sizes, enhancing communication and productivity with its versatile
        </p>
        <div className="md:space-x-2 space-y-2">
          <button className="bg-[#6A65FF] text-white py-3 px-5 rounded w-full sm:w-auto">
            Meet slack for enterprise
          </button>
          <button className="bg-white text-black border-2 py-3 px-5 rounded w-full sm:w-auto">
            Talk to sales
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-full w-full md:gap-8 gap-4 ">
        <div className="p-5  border-2 rounded-xl text-center">
          <h1 className="font-semibold text-4xl my-2">40%</h1>
          <p className="text-gray-400">
            of users say Slack has<br></br> improved communication
          </p>
        </div>
        <div className="p-5 border-2 rounded-xl text-center">
          <h1 className="font-semibold text-4xl my-2">75%</h1>
          <p className="text-gray-400">
            of users say Slack has<br></br> improved communication
          </p>
        </div>
        <div className="p-5 border-2 rounded-xl text-center">
          <h1 className="font-semibold text-4xl my-2">60%</h1>
          <p className="text-gray-400">
            of users say Slack <br></br> improved communication
          </p>
        </div>
        <div className="p-5 border-2 rounded-xl text-center">
          <h1 className="font-semibold text-4xl my-2">90%</h1>
          <p className="text-gray-400">
            of users say Slack has<br></br> improved communication
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
