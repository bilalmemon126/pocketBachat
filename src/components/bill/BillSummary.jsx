import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getSelectedBillSummary } from "../../redux/features/billSummary/billSummaryAction"
import { clearSelectedSummaryData } from "../../redux/features/billSummary/billSummarySlice"
import { FileText, Zap, Flame, Droplets, Sparkles } from "lucide-react"

const typeAccent = {
  electric: { icon: <Zap size={16} />,      color: "text-[oklch(55.7%_0.246_272)]", bg: "bg-[oklch(55.7%_0.246_272_/_10%)]", dot: "bg-[oklch(55.7%_0.246_272)]" },
  gas:      { icon: <Flame size={16} />,     color: "text-[oklch(65%_0.22_15)]",     bg: "bg-[oklch(65%_0.22_15_/_10%)]",     dot: "bg-[oklch(65%_0.22_15)]"     },
  water:    { icon: <Droplets size={16} />,  color: "text-[oklch(60%_0.2_230)]",     bg: "bg-[oklch(60%_0.2_230_/_10%)]",     dot: "bg-[oklch(60%_0.2_230)]"     },
}

const BillSummary = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { type, id } = useParams()

  const { billSummary, loading }                                       = useSelector((s) => s.analyzeBill)
  const { summaryResponse, selectedSummaryData, loadingSelected }      = useSelector((s) => s.billSummary)

  useEffect(() => { dispatch(clearSelectedSummaryData()) }, [id, dispatch])
  useEffect(() => { if (id) dispatch(getSelectedBillSummary(id)) }, [id, dispatch])
  useEffect(() => {
    if (summaryResponse?.insertedId) navigate(`/dashboard/${type}/${summaryResponse.insertedId}`)
  }, [summaryResponse, navigate])

  const data = selectedSummaryData?.data
  const rawType = data?.billType?.toLowerCase() || type?.toLowerCase()
  const ac = typeAccent[rawType] || typeAccent.electric

  if (loading || loadingSelected) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-[oklch(55.7%_0.246_272_/_15%)] rounded-[14px] blur-lg" />
          <div className="relative size-12 rounded-[14px] bg-[oklch(55.7%_0.246_272)] shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_35%)] flex items-center justify-center">
            <svg className="size-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </div>
        <div className="text-center">
          <p className="text-[14px] font-semibold text-[oklch(20%_0.03_264)]">Analyzing your bill…</p>
          <p className="text-[12px] text-[oklch(60%_0.02_264)] mt-0.5">AI is reading the document</p>
        </div>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="size-1.5 rounded-full bg-[oklch(55.7%_0.246_272)]"
              style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (!billSummary?.data && !data) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="size-14 rounded-[14px] bg-gray-100 flex items-center justify-center">
          <FileText size={22} className="text-[oklch(70%_0.02_264)]" />
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[oklch(30%_0.03_264)] mb-1">No Summary Yet</p>
          <p className="text-[12px] text-[oklch(65%_0.02_264)] max-w-[200px]">
            Upload a bill and the AI analysis will appear here.
          </p>
        </div>
      </div>
    )
  }

  const summaryText = billSummary?.data || data?.summary

  return (
    <div className="flex flex-col gap-5">
      {!billSummary?.data && data?.billType && (
        <div className="flex items-center gap-2.5">
          <div className={["size-8 rounded-[8px] flex items-center justify-center shrink-0", ac.bg].join(" ")}>
            <span className={ac.color}>{ac.icon}</span>
          </div>
          <div>
            <p className="text-[13px] font-bold text-[oklch(20%_0.03_264)] capitalize">
              {data.billType} Bill
            </p>
            {data.billMonth && (
              <p className="text-[11px] text-[oklch(60%_0.02_264)]">
                {new Date(0, data.billMonth - 1).toLocaleString("default", { month: "long" })}
              </p>
            )}
          </div>
          <div className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full bg-[oklch(55.7%_0.246_272_/_8%)]">
            <Sparkles size={11} className="text-[oklch(55.7%_0.246_272)]" />
            <span className="text-[10px] font-semibold text-[oklch(55.7%_0.246_272)]">AI Analysis</span>
          </div>
        </div>
      )}

      <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)]" />

      <div className="relative">
        <div className={["absolute left-0 top-0 bottom-0 w-0.5 rounded-full", ac.dot].join(" ")} />
        <div className="pl-4">
          <p className="text-[13px] leading-[1.85] text-[oklch(35%_0.02_264)] whitespace-pre-line">
            {summaryText}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-[oklch(55.7%_0.246_272_/_8%)]">
        <span className={["size-1.5 rounded-full shrink-0", ac.dot].join(" ")} />
        <p className="text-[11px] text-[oklch(65%_0.02_264)]">
          Generated by AI · MoneySaver Analysis Engine
        </p>
      </div>
    </div>
  )
}

export default BillSummary