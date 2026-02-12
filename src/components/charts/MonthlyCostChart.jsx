import { LineChart, Line, XAxis, Tooltip } from "recharts"
import { monthlyCost } from "../../data/dummyData"

const MonthlyCostChart = () => (
    <LineChart width={400} height={250} data={monthlyCost}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Line dataKey="cost" stroke="#22c55e" />
    </LineChart>
)

export default MonthlyCostChart