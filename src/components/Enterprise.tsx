import { motion } from "framer-motion";

const Enterprise = () => {
  const stats = [
    { value: "40%", text: "of users say Slack has improved communication" },
    { value: "75%", text: "of users say Slack has improved communication" },
    { value: "60%", text: "of users say Slack improved communication" },
    { value: "90%", text: "of users say Slack has improved communication" },
  ];

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:p-20 p-5 items-center">
      <motion.div
        className="md:space-y-6 md:text-left text-center space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
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
      </motion.div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-full w-full md:gap-8 gap-4 ">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-5 border-2 rounded-xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="font-semibold text-4xl my-2">{stat.value}</h1>
            <p className="text-gray-400">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Enterprise;
