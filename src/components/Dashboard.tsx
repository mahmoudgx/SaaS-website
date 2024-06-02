import dashboard from "../assets/dashboard.png";

const Dashboard = () => {
  return (
    <div className="bg-white relative ">
      <div className="flex justify-center">
        <img src={dashboard} className="w-full max-w-4xl" alt="Dashboard" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Dashboard;
