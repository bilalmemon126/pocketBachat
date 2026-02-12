import { LineChart, Line, XAxis, Tooltip } from "recharts"
import { usageData } from "../../data/dummyData"

const UsageLineChart = () => (
  <LineChart width={400} height={250} data={usageData}>
    <XAxis dataKey="month" />
    <Tooltip />
    <Line dataKey="units" stroke="#0ea5e9" />
  </LineChart>
)

export default UsageLineChart
