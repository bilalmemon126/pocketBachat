import StatCard from "../components/ui/StatCard"
import MonthlyCostChart from "../components/charts/MonthlyCostChart"

const Dashboard = () => {
  
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Bills" value="12" />
        <StatCard title="Avg Monthly Cost" value="Rs 5,200" />
        <StatCard title="Highest Bill" value="Rs 6,800" />
      </div>
      <MonthlyCostChart />
    </div>
  )
}

export default Dashboard
