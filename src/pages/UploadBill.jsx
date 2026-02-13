import BillUpload from "../components/bill/BillUpload"
import BillSummary from "../components/bill/BillSummary"
import { useParams } from "react-router-dom"
import { FaUpload, FaFileInvoice, FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const UploadBill = () => {
  const { type } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl transition-all border border-slate-200"
            >
              <FaArrowLeft />
              <span className="font-medium">Back</span>
            </button>
            <div className="h-8 w-px bg-slate-300"></div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                {type ? `${type.charAt(0).toUpperCase() + type.slice(1)}` : ""}
              </h1>
              <p className="text-sm text-slate-600 flex items-center gap-2 mt-1">
                <FaFileInvoice className="text-purple-600" />
                <span>Upload and analyze your utility bill</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl flex items-center justify-center">
                <FaUpload className="text-xl text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Upload Bill</h2>
                <p className="text-sm text-slate-600">Upload your bill document</p>
              </div>
            </div>
            <BillUpload type={type} />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                <FaFileInvoice className="text-xl text-cyan-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Bill Summary</h2>
                <p className="text-sm text-slate-600">Analysis and breakdown</p>
              </div>
            </div>
            <BillSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadBill