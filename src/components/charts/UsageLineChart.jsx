import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const UsageLineChart = ({ usageData }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-[350px]">
      <h2 className="text-lg font-semibold mb-4">Monthly Usage</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={usageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="units" stroke="#0ea5e9" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageLineChart;
