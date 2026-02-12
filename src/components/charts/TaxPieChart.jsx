import { PieChart, Pie, Tooltip } from "recharts"
import { taxData } from "../../data/dummyData"

const TaxPieChart = () => (
  <PieChart width={300} height={250}>
    <Pie data={taxData} dataKey="value" cx="50%" cy="50%" outerRadius={80} />
    <Tooltip />
  </PieChart>
)

export default TaxPieChart
