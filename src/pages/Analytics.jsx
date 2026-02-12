import UsageLineChart from "../components/charts/UsageLineChart"
import TaxPieChart from "../components/charts/TaxPieChart"

const Analytics = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <UsageLineChart />
      <TaxPieChart />
    </div>
  )
}

export default Analytics
