import UsageLineChart from "../components/charts/UsageLineChart"
import TaxPieChart from "../components/charts/TaxPieChart"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBillSummary } from "../redux/features/billSummary/billSummaryAction"
import { FaBolt, FaChartLine, FaMoneyBillWave, FaCalendarAlt, FaSpinner, FaChartPie } from "react-icons/fa"
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io"

const Analytics = () => {
  const dispatch = useDispatch()
  const { summaryData, loadingList, errorList } = useSelector(
    (state) => state.billSummary
  );

  console.log(summaryData)
  useEffect(() => {
    dispatch(getBillSummary())
  }, [dispatch])

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // 🔥 Line Chart Data (Usage per Month)
  const usageData = summaryData?.data?.map((bill) => ({
    month: monthNames[bill.billMonth - 1],
    units: Number(bill.units),
    total: Number(bill.totalAmount)
  }));

  // 🔥 Pie Chart Data (Tax Breakdown)
  const taxData = summaryData?.data?.map((bill) => ({
    name: monthNames[bill.billMonth - 1],
    value: Number(bill.taxes)
  }));

  // 🔥 Calculate Stats
  const bills = summaryData?.data || [];
  const totalUnits = bills.reduce((sum, bill) => sum + Number(bill.units || 0), 0);
  const totalCost = bills.reduce((sum, bill) => sum + Number(bill.totalAmount || 0), 0);
  const totalTaxes = bills.reduce((sum, bill) => sum + Number(bill.taxes || 0), 0);
  const avgMonthlyUnits = bills.length > 0 ? (totalUnits / bills.length).toFixed(0) : 0;

  console.log(usageData)

  if (loadingList) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
              <FaSpinner className="text-4xl text-white animate-spin" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Loading Analytics...</h3>
          <p className="text-slate-600">Fetching your consumption data</p>
        </div>
      </div>
    );
  }

  if (errorList) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl border border-red-200 shadow-xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Error Loading Analytics</h3>
            <p className="text-slate-600 mb-6">{errorList}</p>
            <button 
              onClick={() => dispatch(getBillSummary())}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-slate-600 flex items-center gap-2">
              <FaCalendarAlt className="text-purple-600" />
              <span>Overview of your utility consumption and costs</span>
            </p>
          </div>
          
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Export Report</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 mb-4">
              <FaBolt className="text-2xl text-purple-600" />
            </div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">Total Consumption</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-slate-900">{totalUnits}</span>
              <span className="text-sm text-slate-500">kWh</span>
            </div>
            <div className="flex items-center gap-1">
              <IoIosTrendingUp className="text-green-500 text-sm" />
              <span className="text-sm font-semibold text-green-600">All Time</span>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 mb-4">
              <FaMoneyBillWave className="text-2xl text-cyan-600" />
            </div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">Total Cost</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-slate-900">₨{totalCost.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-slate-500">All bills combined</span>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 mb-4">
              <FaChartLine className="text-2xl text-emerald-600" />
            </div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">Avg Monthly</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-slate-900">{avgMonthlyUnits}</span>
              <span className="text-sm text-slate-500">kWh</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-slate-500">per month</span>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 mb-4">
              <FaChartPie className="text-2xl text-orange-600" />
            </div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">Total Taxes</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-slate-900">₨{totalTaxes.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-slate-500">All charges</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">
                  Usage Trends
                </h2>
                <p className="text-sm text-slate-600">
                  Monthly consumption patterns
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-700">Live</span>
              </div>
            </div>
            <UsageLineChart usageData={usageData || []} />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">
                  Tax Distribution
                </h2>
                <p className="text-sm text-slate-600">
                  Monthly tax breakdown
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-50 rounded-lg">
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                <span className="text-sm font-medium text-cyan-700">Current</span>
              </div>
            </div>
            <TaxPieChart taxData={taxData || []} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <FaBolt className="text-white text-xl" />
              </div>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-purple-700">
                Insight
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Total Bills
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              You have analyzed {bills.length} bills so far
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-purple-600 font-semibold">{bills.length} bills</span>
              <span className="text-slate-500">tracked</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                <FaMoneyBillWave className="text-white text-xl" />
              </div>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-cyan-700">
                Savings Tip
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Average Bill
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Your average monthly bill amount
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-cyan-600 font-semibold">₨{bills.length > 0 ? (totalCost / bills.length).toFixed(0) : 0}</span>
              <span className="text-slate-500">per month</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                <IoIosTrendingUp className="text-white text-xl" />
              </div>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-emerald-700">
                Achievement
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Keep Tracking!
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Continue monitoring your consumption
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-emerald-600 font-semibold">Stay on track</span>
              <span className="text-slate-500">to save more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics