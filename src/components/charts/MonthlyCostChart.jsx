import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from "recharts"

const MonthlyCostChart = ({ bills }) => {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const chartData = bills.map((bill) => ({
      month: monthNames[bill.billMonth - 1],
      total: Number(bill.totalAmount),
    }));
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="total" stroke="#0ea5e9" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

export default MonthlyCostChart