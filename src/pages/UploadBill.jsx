import { useParams, useNavigate } from "react-router-dom"
import BillUpload from "../components/bill/BillUpload"
import BillSummary from "../components/bill/BillSummary"
import { Upload, FileText, ArrowLeft } from "lucide-react"

const UploadBill = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const typeLabel = type ? type.charAt(0).toUpperCase() + type.slice(1) : "Upload"

  const accent = {
    electric: { icon: "text-[oklch(55.7%_0.246_272)]", bg: "bg-[oklch(55.7%_0.246_272_/_10%)]", border: "border-[oklch(55.7%_0.246_272_/_15%)]" },
    gas: { icon: "text-[oklch(65%_0.22_15)]", bg: "bg-[oklch(65%_0.22_15_/_10%)]", border: "border-[oklch(65%_0.22_15_/_15%)]" },
    water: { icon: "text-[oklch(60%_0.2_230)]", bg: "bg-[oklch(60%_0.2_230_/_10%)]", border: "border-[oklch(60%_0.2_230_/_15%)]" },
  }
  const ac = accent[type?.toLowerCase()] || accent.electric

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-6 overflow-y-auto">

      <div className="relative z-10 max-w-[1100px] mx-auto space-y-6">

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[12px] bg-white text-[13px] font-medium text-[oklch(40%_0.02_264)] border border-[oklch(55.7%_0.246_272_/_10%)] shadow-[0_2px_8px_oklch(55.7%_0.246_272_/_6%)] hover:shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <ArrowLeft size={14} />
            Back
          </button>

          <div className="h-7 w-px bg-[oklch(55.7%_0.246_272_/_12%)]" />

          <div>
            <h1 className="text-[20px] font-bold text-[oklch(20%_0.03_264)] leading-tight">
              {typeLabel} Bill
            </h1>
            <p className="text-[12px] text-[oklch(60%_0.02_264)] mt-0.5 flex items-center gap-1.5">
              <FileText size={12} className={ac.icon} />
              Upload and analyze your utility bill
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div className="bg-white rounded-[20px] border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] p-6 lg:p-8 hover:shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[oklch(55.7%_0.246_272_/_8%)]">
              <div className={["size-10 rounded-[10px] flex items-center justify-center shrink-0", ac.bg].join(" ")}>
                <Upload size={18} className={ac.icon} />
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-[oklch(20%_0.03_264)]">Upload Bill</h2>
                <p className="text-[12px] text-[oklch(60%_0.02_264)]">Upload your bill document</p>
              </div>
              <span className={["ml-auto text-[11px] font-semibold px-2.5 py-1 rounded-full", ac.bg, ac.icon].join(" ")}>
                {typeLabel}
              </span>
            </div>
            <BillUpload type={type} />
          </div>

          <div className="bg-white rounded-[20px] border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] p-6 lg:p-8 hover:shadow-[0_16px_48px_oklch(55.7%_0.246_272_/_10%)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[oklch(55.7%_0.246_272_/_8%)]">
              <div className="size-10 rounded-[10px] bg-[oklch(60%_0.2_230_/_10%)] flex items-center justify-center shrink-0">
                <FileText size={18} className="text-[oklch(60%_0.2_230)]" />
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-[oklch(20%_0.03_264)]">Bill Summary</h2>
                <p className="text-[12px] text-[oklch(60%_0.02_264)]">Analysis and breakdown</p>
              </div>
              <span className="ml-auto text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[oklch(72%_0.2_145_/_10%)] text-[oklch(45%_0.15_145)]">
                AI Analysis
              </span>
            </div>
            <BillSummary />
          </div>

        </div>
      </div>
    </div>
  )
}

export default UploadBill