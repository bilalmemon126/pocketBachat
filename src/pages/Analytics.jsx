import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBillSummary } from "../redux/features/billSummary/billSummaryAction"
import UsageLineChart from "../components/charts/UsageLineChart"
import TaxPieChart from "../components/charts/TaxPieChart"
import { Zap, DollarSign, TrendingUp, PieChart, Lightbulb, BarChart2, Star } from "lucide-react"
import BillTypeSelector from "../components/ui/BillTypeSelector"
import LoadingScreen from "../screens/LoadingScreen"
import ErrorScreen from "../screens/ErrorScreen"

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const StatCard = ({ icon, iconBg, iconColor, label, value, unit, badge }) => (
  <div className="bg-white rounded-[20px] p-6 border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] hover:shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
    <div className="flex items-start justify-between mb-4">
      <div className={["size-10 rounded-[10px] flex items-center justify-center shrink-0", iconBg].join(" ")}>
        <span className={iconColor}>{icon}</span>
      </div>
      {badge && (
        <span className={["text-[10px] lg:text-[8px] xl:text-[10px] font-semibold px-2 py-0.5 rounded-full", badge.bg, badge.text].join(" ")}>
          {badge.label}
        </span>
      )}
    </div>
    <p className="text-[11px] lg:text-[9px] xl:text-[11px] font-semibold uppercase tracking-[0.08em] text-[oklch(60%_0.02_264)] mb-1">{label}</p>
    <div className="flex items-baseline gap-1.5">
      <span className="text-[30px] lg:text-[20px] xl:text-[30px] font-bold text-[oklch(20%_0.03_264)] leading-none">{value}</span>
      {unit && <span className="text-[13px] lg:text-[11px] xl:text-[13px] text-[oklch(60%_0.02_264)]">{unit}</span>}
    </div>
  </div>
)

const InsightCard = ({ icon, iconBg, iconColor, pill, pillBg, pillText, title, body, statValue, statLabel }) => (
  <div className="bg-white rounded-[20px] p-6 border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] hover:shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
    <div className="flex items-start justify-between mb-4">
      <div className={["size-10 rounded-[10px] flex items-center justify-center shrink-0", iconBg].join(" ")}>
        <span className={iconColor}>{icon}</span>
      </div>
      <span className={["text-[10px] font-semibold px-2.5 py-1 rounded-full", pillBg, pillText].join(" ")}>
        {pill}
      </span>
    </div>
    <h3 className="text-[15px] font-bold text-[oklch(20%_0.03_264)] mb-1.5">{title}</h3>
    <p className="text-[12px] text-[oklch(60%_0.02_264)] mb-4 leading-relaxed">{body}</p>
    <div className="flex items-center gap-1.5 text-[12px]">
      <span className={["font-bold", iconColor].join(" ")}>{statValue}</span>
      <span className="text-[oklch(65%_0.02_264)]">{statLabel}</span>
    </div>
  </div>
)

const Analytics = () => {
  const dispatch = useDispatch()
  const { summaryData, loadingList, errorList } = useSelector((s) => s.billSummary)

  let [selectedType, setSelectedType] = useState("electric")

  useEffect(() => { dispatch(getBillSummary(selectedType)) }, [dispatch, selectedType])

  if (loadingList) return <LoadingScreen />
  if (errorList) return <ErrorScreen error={errorList} onRetry={() => dispatch(getBillSummary(selectedType))} />

  const bills = summaryData?.data || []
  const usageData = bills.map((b) => ({ month: MONTH_NAMES[b.billMonth - 1], units: Number(b.units), total: Number(b.totalAmount) }))
  const taxData = bills.map((b) => ({ name: MONTH_NAMES[b.billMonth - 1], value: Number(b.taxes) }))

  const totalUnits = bills.reduce((s, b) => s + Number(b.units || 0), 0)
  const totalCost = bills.reduce((s, b) => s + Number(b.totalAmount || 0), 0)
  const totalTaxes = bills.reduce((s, b) => s + Number(b.taxes || 0), 0)
  const avgMonthlyUnits = bills.length > 0 ? (totalUnits / bills.length).toFixed(0) : 0
  const avgMonthlyCost = bills.length > 0 ? (totalCost / bills.length).toFixed(0) : 0

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-6 overflow-y-auto">

      <div className="relative z-10 max-w-[1100px] mx-auto space-y-6">

        <BillTypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Zap size={18} />}
            iconBg="bg-[oklch(55.7%_0.246_272_/_10%)]"
            iconColor="text-[oklch(55.7%_0.246_272)]"
            label="Total Consumption"
            value={totalUnits.toLocaleString()}
            unit="kWh"
            badge={{ label: "All Time", bg: "bg-[oklch(55.7%_0.246_272_/_8%)]", text: "text-[oklch(55.7%_0.246_272)]" }}
          />
          <StatCard
            icon={<DollarSign size={18} />}
            iconBg="bg-[oklch(72%_0.2_145_/_10%)]"
            iconColor="text-[oklch(45%_0.15_145)]"
            label="Total Cost"
            value={`Rs ${totalCost.toLocaleString()}`}
            badge={{ label: "All Bills", bg: "bg-[oklch(72%_0.2_145_/_10%)]", text: "text-[oklch(45%_0.15_145)]" }}
          />
          <StatCard
            icon={<TrendingUp size={18} />}
            iconBg="bg-[oklch(60%_0.2_230_/_10%)]"
            iconColor="text-[oklch(45%_0.18_230)]"
            label="Avg Monthly"
            value={avgMonthlyUnits.toLocaleString()}
            unit="kWh"
            badge={{ label: "Per Month", bg: "bg-[oklch(60%_0.2_230_/_10%)]", text: "text-[oklch(45%_0.18_230)]" }}
          />
          <StatCard
            icon={<PieChart size={18} />}
            iconBg="bg-[oklch(65%_0.22_15_/_10%)]"
            iconColor="text-[oklch(50%_0.18_15)]"
            label="Total Taxes"
            value={`₨ ${totalTaxes.toLocaleString()}`}
            badge={{ label: "All Charges", bg: "bg-[oklch(65%_0.22_15_/_10%)]", text: "text-[oklch(50%_0.18_15)]" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div className="bg-white rounded-[20px] border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] p-6 hover:shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-[16px] font-bold text-[oklch(20%_0.03_264)] mb-0.5">Usage Trends</h2>
                <p className="text-[12px] text-[oklch(60%_0.02_264)]">Monthly consumption patterns</p>
              </div>
              <div className="size-9 rounded-[10px] bg-[oklch(55.7%_0.246_272_/_8%)] flex items-center justify-center">
                <BarChart2 size={16} className="text-[oklch(55.7%_0.246_272)]" />
              </div>
            </div>
            <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-5" />
            <UsageLineChart usageData={usageData} />
          </div>

          <div className="bg-white rounded-[20px] border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] p-6 hover:shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-[16px] font-bold text-[oklch(20%_0.03_264)] mb-0.5">Tax Distribution</h2>
                <p className="text-[12px] text-[oklch(60%_0.02_264)]">Monthly tax breakdown</p>
              </div>
              <div className="size-9 rounded-[10px] bg-[oklch(65%_0.22_15_/_8%)] flex items-center justify-center">
                <PieChart size={16} className="text-[oklch(55%_0.18_15)]" />
              </div>
            </div>
            <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-5" />
            <TaxPieChart taxData={taxData} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <InsightCard
            icon={<Zap size={18} />}
            iconBg="bg-[oklch(55.7%_0.246_272_/_10%)]"
            iconColor="text-[oklch(55.7%_0.246_272)]"
            pill="Insight"
            pillBg="bg-[oklch(55.7%_0.246_272_/_8%)]"
            pillText="text-[oklch(55.7%_0.246_272)]"
            title="Total Bills"
            body={`You have analyzed ${bills.length} bill${bills.length !== 1 ? "s" : ""} so far.`}
            statValue={`${bills.length} bills`}
            statLabel="tracked"
          />
          <InsightCard
            icon={<Lightbulb size={18} />}
            iconBg="bg-[oklch(72%_0.2_145_/_10%)]"
            iconColor="text-[oklch(45%_0.15_145)]"
            pill="Savings Tip"
            pillBg="bg-[oklch(72%_0.2_145_/_10%)]"
            pillText="text-[oklch(45%_0.15_145)]"
            title="Average Bill"
            body="Your average monthly bill amount across all analyzed bills."
            statValue={`₨ ${Number(avgMonthlyCost).toLocaleString()}`}
            statLabel="per month"
          />
          <InsightCard
            icon={<Star size={18} />}
            iconBg="bg-[oklch(65%_0.22_15_/_10%)]"
            iconColor="text-[oklch(50%_0.18_15)]"
            pill="Achievement"
            pillBg="bg-[oklch(65%_0.22_15_/_10%)]"
            pillText="text-[oklch(50%_0.18_15)]"
            title="Keep Tracking!"
            body="Continue monitoring your consumption to unlock better savings insights."
            statValue="Stay on track"
            statLabel="to save more"
          />
        </div>

      </div>
    </div>
  )
}

export default Analytics