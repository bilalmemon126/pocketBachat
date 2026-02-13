import StatCard from "../components/ui/StatCard"
import MonthlyCostChart from "../components/charts/MonthlyCostChart"
import { useDispatch, useSelector } from "react-redux";
import { getBillSummary } from "../redux/features/billSummary/billSummaryAction";
import { useEffect } from "react";
import { FaFileInvoice, FaChartLine, FaArrowUp, FaSpinner } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { summaryData, loadingList, errorList } = useSelector(
    (state) => state.billSummary
  );

  useEffect(() => {
    dispatch(getBillSummary());
  }, [dispatch]);

  const bills = summaryData?.data || [];

  const totalBills = bills.length;

  const totalAmounts = bills.map((bill) =>
    Number(bill.totalAmount || 0)
  );

  const avgCost =
    totalAmounts.length > 0
      ? (
          totalAmounts.reduce((a, b) => a + b, 0) /
          totalAmounts.length
        ).toFixed(0)
      : 0;

  const highestBill =
    totalAmounts.length > 0
      ? Math.max(...totalAmounts)
      : 0;

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
          <h3 className="text-xl font-bold text-slate-900 mb-2">Loading Dashboard...</h3>
          <p className="text-slate-600">Please wait while we fetch your data</p>
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
            <h3 className="text-xl font-bold text-slate-900 mb-2">Error Loading Data</h3>
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
              Dashboard Overview
            </h1>
            <p className="text-slate-600 flex items-center gap-2">
              <FaChartLine className="text-purple-600" />
              <span>Track your utility bills and expenses</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Total Bills" 
            value={totalBills}
            icon={<FaFileInvoice />}
            gradient="from-purple-500 to-pink-500"
            bgGradient="from-purple-500/10 to-pink-500/10"
          />
          <StatCard 
            title="Avg Monthly Cost" 
            value={`Rs ${avgCost}`}
            icon={<FaChartLine />}
            gradient="from-cyan-500 to-blue-500"
            bgGradient="from-cyan-500/10 to-blue-500/10"
          />
          <StatCard 
            title="Highest Bill" 
            value={`Rs ${highestBill}`}
            icon={<FaArrowUp />}
            gradient="from-orange-500 to-red-500"
            bgGradient="from-orange-500/10 to-red-500/10"
          />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Monthly Cost Trends
              </h2>
              <p className="text-sm text-slate-600">
                View your spending patterns over time
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-700">Live Data</span>
            </div>
          </div>
          <MonthlyCostChart bills={bills} />
        </div>

        {bills.length === 0 && (
          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl border border-purple-200 p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                <FaFileInvoice className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No Bills Yet</h3>
              <p className="text-slate-600 mb-6">
                Start by uploading your first utility bill to see insights and analytics
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Upload Your First Bill
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard
