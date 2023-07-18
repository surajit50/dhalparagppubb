import LineCharts from "../LineChart/LineCharts";

const Dashboard = () => {
  return (
    <div className="min-w-full  flex justify-between rounded overflow-hidden shadow-lg p-3">
      <LineCharts />
      <LineCharts />
    </div>
  );
};

export default Dashboard;
