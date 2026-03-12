import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getBillSummary } from "../redux/features/billSummary/billSummaryAction"
import MonthlyCostChart from "../components/charts/MonthlyCostChart"
import { FileText, TrendingUp, ArrowUp, Upload } from "lucide-react"
import BillTypeSelector from "../components/ui/BillTypeSelector"
import LoadingScreen from "../screens/LoadingScreen"
import ErrorScreen from "../screens/ErrorScreen"

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { summaryData, loadingList, errorList } = useSelector((state) => state.billSummary)

  let [selectedType, setSelectedType] = useState("electric")

  useEffect(() => { dispatch(getBillSummary(selectedType)) }, [dispatch, selectedType])

  const bills = summaryData?.data || []
  const totalBills = bills.length
  const totalAmounts = bills.map((b) => Number(b.totalAmount || 0))
  const avgCost = totalAmounts.length > 0
    ? (totalAmounts.reduce((a, b) => a + b, 0) / totalAmounts.length).toFixed(0)
    : 0
  const highestBill = totalAmounts.length > 0 ? Math.max(...totalAmounts) : 0

  if (loadingList) return <LoadingScreen />
  if (errorList) return <ErrorScreen error={errorList} onRetry={() => dispatch(getBillSummary(selectedType))} />

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-6 overflow-y-auto">

      <div className="relative z-10 max-w-[1100px] mx-auto space-y-6">

        <BillTypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-white rounded-[20px] p-6 border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] hover:shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="size-10 rounded-[10px] bg-[oklch(55.7%_0.246_272_/_10%)] flex items-center justify-center">
                <FileText size={18} className="text-[oklch(55.7%_0.246_272)]" />
              </div>
              <span className="text-[11px] font-semibold text-[oklch(55.7%_0.246_272)] bg-[oklch(55.7%_0.246_272_/_8%)] px-2 py-0.5 rounded-full">
                All Time
              </span>
            </div>
            <p className="text-[12px] md:text-[8px] lg:text-[12px] font-semibold uppercase tracking-[0.08em] text-[oklch(60%_0.02_264)] mb-1">
              Total Bills
            </p>
            <p className="text-[32px] md:text-[20px] lg:text-[32px] font-bold text-[oklch(20%_0.03_264)] leading-none">
              {totalBills}
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-6 border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] hover:shadow-[0_16px_48px_oklch(72%_0.2_145_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="size-10 rounded-[10px] bg-[oklch(72%_0.2_145_/_10%)] flex items-center justify-center">
                <TrendingUp size={18} className="text-[oklch(45%_0.15_145)]" />
              </div>
              <span className="text-[11px] font-semibold text-[oklch(45%_0.15_145)] bg-[oklch(72%_0.2_145_/_10%)] px-2 py-0.5 rounded-full">
                Monthly
              </span>
            </div>
            <p className="text-[12px] md:text-[8px] lg:text-[12px] font-semibold uppercase tracking-[0.08em] text-[oklch(60%_0.02_264)] mb-1">
              Avg Monthly Cost
            </p>
            <p className="text-[32px] md:text-[20px] lg:text-[32px] font-bold text-[oklch(20%_0.03_264)] leading-none">
              Rs {Number(avgCost).toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-6 border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] hover:shadow-[0_16px_48px_oklch(65%_0.22_15_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="size-10 rounded-[10px] bg-[oklch(65%_0.22_15_/_10%)] flex items-center justify-center">
                <ArrowUp size={18} className="text-[oklch(50%_0.18_15)]" />
              </div>
              <span className="text-[11px] font-semibold text-[oklch(50%_0.18_15)] bg-[oklch(65%_0.22_15_/_10%)] px-2 py-0.5 rounded-full">
                Peak
              </span>
            </div>
            <p className="text-[12px] md:text-[8px] lg:text-[12px] font-semibold uppercase tracking-[0.08em] text-[oklch(60%_0.02_264)] mb-1">
              Highest Bill
            </p>
            <p className="text-[32px] md:text-[20px] lg:text-[32px] font-bold text-[oklch(20%_0.03_264)] leading-none">
              Rs {Number(highestBill).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[20px] border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] p-6 lg:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-[17px] font-bold text-[oklch(20%_0.03_264)] mb-1">
                Monthly Cost Trends
              </h2>
              <p className="text-[13px] text-[oklch(60%_0.02_264)]">
                View your spending patterns over time
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              {[
                { color: "bg-[oklch(55.7%_0.246_272)]", label: "Electric" },
                { color: "bg-[oklch(72%_0.2_145)]", label: "Gas" },
                { color: "bg-[oklch(65%_0.22_15)]", label: "Water" },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[11px] text-[oklch(60%_0.02_264)]">
                  <span className={["size-2 rounded-full", color].join(" ")} />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <MonthlyCostChart bills={bills} />
        </div>

        {bills.length === 0 && (
          <div className="bg-white rounded-[20px] border border-[oklch(55.7%_0.246_272_/_8%)] shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%)] p-12 text-center">
            <div className="max-w-sm mx-auto">
              <div className="relative mx-auto mb-6 w-fit">
                <div className="absolute inset-0 bg-[oklch(55.7%_0.246_272_/_15%)] rounded-[20px] blur-xl" />
                <div className="relative size-16 rounded-[20px] bg-[oklch(55.7%_0.246_272)] shadow-[0_8px_28px_oklch(55.7%_0.246_272_/_35%)] flex items-center justify-center">
                  <FileText size={26} className="text-white" />
                </div>
              </div>

              <h3 className="text-[20px] font-bold text-[oklch(20%_0.03_264)] mb-2">No Bills Yet</h3>
              <p className="text-[14px] leading-relaxed text-[oklch(60%_0.02_264)] mb-7">
                Start by uploading your first utility bill to see insights and analytics.
              </p>

              <button
                onClick={() => navigate("/dashboard/uploadbill")}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-[12px] bg-[oklch(55.7%_0.246_272)] text-white text-[14px] font-semibold shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_30%)] hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_12px_32px_oklch(55.7%_0.246_272_/_40%)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Upload size={16} />
                Upload Your First Bill
              </button>

              <div className="flex items-center justify-center gap-3 mt-6">
                {["Free forever", "Instant analysis", "Secure"].map((t, i) => (
                  <div key={t} className="flex items-center gap-3">
                    {i > 0 && <span className="size-1 rounded-full bg-gray-300" />}
                    <span className="text-[11px] text-[oklch(65%_0.02_264)]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Dashboard