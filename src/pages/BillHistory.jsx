import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getBillSummary } from "../redux/features/billSummary/billSummaryAction"
import { Zap, Flame, Droplets, FileText, Eye, ImageOff, Upload } from "lucide-react"
import LoadingScreen from "../screens/LoadingScreen"
import ErrorScreen from "../screens/ErrorScreen"

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const typeAccent = {
    electric: { icon: <Zap size={15} />, color: "text-[oklch(55.7%_0.246_272)]", bg: "bg-[oklch(55.7%_0.246_272_/_10%)]", dot: "bg-[oklch(55.7%_0.246_272)]", btnShadow: "shadow-[0_6px_16px_oklch(55.7%_0.246_272_/_30%)]", label: "Electric" },
    gas: { icon: <Flame size={15} />, color: "text-[oklch(65%_0.22_15)]", bg: "bg-[oklch(65%_0.22_15_/_10%)]", dot: "bg-[oklch(65%_0.22_15)]", btnShadow: "shadow-[0_6px_16px_oklch(65%_0.22_15_/_30%)]", label: "Gas" },
    water: { icon: <Droplets size={15} />, color: "text-[oklch(60%_0.2_230)]", bg: "bg-[oklch(60%_0.2_230_/_10%)]", dot: "bg-[oklch(60%_0.2_230)]", btnShadow: "shadow-[0_6px_16px_oklch(60%_0.2_230_/_30%)]", label: "Water" },
}

const TABLE_COLS = ["Bill Image", "Units", "Base Cost", "Taxes", "Total Amount", "Month", "Summary", "Action"]

const BillCard = ({ bill, ac, billtype, navigate }) => {
    const month = MONTH_NAMES[(bill.billMonth || 1) - 1]

    return (
        <div className="bg-white rounded-[16px] border border-transparent shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_6%),0_1px_4px_oklch(0%_0_0_/_4%)] overflow-hidden">
            <div className="flex items-start gap-4 p-4">
                <div className="shrink-0">
                    {bill.billImage?.secure_url ? (
                        <img
                            src={bill.billImage.secure_url}
                            alt="bill"
                            className="size-16 rounded-[10px] object-cover border border-[oklch(55.7%_0.246_272_/_12%)] shadow-sm"
                        />
                    ) : (
                        <div className="size-16 rounded-[10px] bg-gray-100 border border-[oklch(55.7%_0.246_272_/_8%)] flex items-center justify-center">
                            <ImageOff size={18} className="text-[oklch(70%_0.02_264)]" />
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                            <p className="text-[11px] text-[oklch(65%_0.02_264)] mb-0.5">Total Amount</p>
                            <p className={["text-[20px] font-bold leading-tight", ac.color].join(" ")}>
                                ₨ {Number(bill.totalAmount || 0).toLocaleString()}
                            </p>
                        </div>
                        <span className={["shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full", ac.bg, ac.color].join(" ")}>
                            {month}
                        </span>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                        <div>
                            <p className="text-[10px] text-[oklch(70%_0.02_264)]">Units</p>
                            <p className="text-[12px] font-semibold text-[oklch(30%_0.02_264)]">
                                {Number(bill.units || 0).toLocaleString()} <span className="font-normal text-[oklch(65%_0.02_264)]">kWh</span>
                            </p>
                        </div>
                        <div className="h-6 w-px bg-[oklch(55.7%_0.246_272_/_10%)]" />
                        <div>
                            <p className="text-[10px] text-[oklch(70%_0.02_264)]">Base Cost</p>
                            <p className="text-[12px] font-semibold text-[oklch(30%_0.02_264)]">
                                ₨ {Number(bill.baseCost || 0).toLocaleString()}
                            </p>
                        </div>
                        <div className="h-6 w-px bg-[oklch(55.7%_0.246_272_/_10%)]" />
                        <div>
                            <p className="text-[10px] text-[oklch(70%_0.02_264)]">Taxes</p>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[oklch(65%_0.22_15_/_10%)] text-[oklch(50%_0.18_15)]">
                                ₨ {Number(bill.taxes || 0).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {(bill.summary || true) && (
                <div className="border-t border-[oklch(55.7%_0.246_272_/_6%)] px-4 py-3 flex items-center justify-between gap-3">
                    <p className="text-[12px] text-[oklch(55%_0.02_264)] leading-relaxed line-clamp-1 flex-1">
                        {bill.summary || "No summary available"}
                    </p>
                    <button
                        onClick={() => navigate(`/dashboard/${billtype}/${bill._id}`)}
                        className={["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-semibold shrink-0 transition-all duration-200 hover:-translate-y-0.5", ac.bg, ac.color].join(" ")}
                    >
                        <Eye size={13} />
                        View
                    </button>
                </div>
            )}
        </div>
    )
}

const BillHistory = () => {
    const { billtype } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { summaryData, loadingList, errorList } = useSelector((s) => s.billSummary)

    useEffect(() => { dispatch(getBillSummary(billtype)) }, [dispatch, billtype])

    if (loadingList) return <LoadingScreen />
    if (errorList) return <ErrorScreen error={errorList} onRetry={() => dispatch(getBillSummary(billtype))} />

    const ac = typeAccent[billtype?.toLowerCase()] || typeAccent.electric
    const bills = summaryData?.data || []

    return (
        <div className="flex-1 min-h-screen bg-gray-100 p-4 sm:p-6 overflow-y-auto">

            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_50%_35%_at_80%_10%,oklch(55.7%_0.246_272_/_5%)_0%,transparent_100%)]" />
            <div className="pointer-events-none fixed inset-0 [background-image:radial-gradient(circle,oklch(55.7%_0.246_272_/_6%)_1px,transparent_1px)] [background-size:28px_28px]" />

            <div className="relative z-10 max-w-[1100px] mx-auto space-y-5">

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={["size-9 rounded-[10px] flex items-center justify-center shrink-0", ac.bg].join(" ")}>
                            <span className={ac.color}>{ac.icon}</span>
                        </div>
                        <div>
                            <h1 className="text-[18px] sm:text-[19px] font-bold text-[oklch(20%_0.03_264)] leading-tight">
                                {ac.label} Bill History
                            </h1>
                            <p className="text-[12px] text-[oklch(60%_0.02_264)]">
                                {bills.length} bill{bills.length !== 1 ? "s" : ""} found
                            </p>
                        </div>
                    </div>

                    <span className={["text-[12px] font-semibold px-3 py-1.5 rounded-full", ac.bg, ac.color].join(" ")}>
                        {bills.length} Records
                    </span>
                </div>

                {bills.length === 0 && (
                    <div className="bg-white rounded-[20px] shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] flex flex-col items-center justify-center py-20 gap-4 text-center px-6">
                        <div className={["size-14 rounded-[14px] flex items-center justify-center", ac.bg].join(" ")}>
                            <FileText size={22} className={ac.color} />
                        </div>
                        <div>
                            <p className="text-[15px] font-bold text-[oklch(20%_0.03_264)] mb-1">No {ac.label} Bills Yet</p>
                            <p className="text-[12px] text-[oklch(60%_0.02_264)] max-w-[240px]">
                                Upload a {ac.label.toLowerCase()} bill to see your history here.
                            </p>
                        </div>
                        <button
                            onClick={() => navigate(`/dashboard/uploadbill/${billtype}`)}
                            className={[
                                "inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5",
                                ac.dot, ac.btnShadow,
                            ].join(" ")}
                        >
                            <Upload size={14} />
                            Upload First Bill
                        </button>
                    </div>
                )}

                {bills.length > 0 && (
                    <>
                        <div className="lg:hidden flex flex-col gap-3">
                            {bills.map((bill, i) => (
                                <BillCard key={bill._id || i} bill={bill} ac={ac} billtype={billtype} navigate={navigate} />
                            ))}
                        </div>

                        <div className="hidden lg:block bg-white rounded-[20px] border border-transparent shadow-[0_8px_32px_oklch(55.7%_0.246_272_/_7%),0_2px_8px_oklch(0%_0_0_/_4%)] overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-[oklch(55.7%_0.246_272_/_8%)] bg-gray-50">
                                            {TABLE_COLS.map((col) => (
                                                <th key={col} className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-[oklch(55%_0.02_264)] whitespace-nowrap">
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bills.map((bill, i) => (
                                            <tr key={bill._id || i} className="border-b border-[oklch(55.7%_0.246_272_/_5%)] last:border-0 hover:bg-[oklch(55.7%_0.246_272_/_3%)] transition-colors duration-150">

                                                <td className="px-5 py-4">
                                                    {bill.billImage?.secure_url ? (
                                                        <img src={bill.billImage.secure_url} alt="bill" className="size-12 rounded-[8px] object-cover border border-[oklch(55.7%_0.246_272_/_12%)] shadow-sm" />
                                                    ) : (
                                                        <div className="size-12 rounded-[8px] bg-gray-100 flex items-center justify-center border border-[oklch(55.7%_0.246_272_/_8%)]">
                                                            <ImageOff size={16} className="text-[oklch(70%_0.02_264)]" />
                                                        </div>
                                                    )}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="text-[13px] font-semibold text-[oklch(20%_0.03_264)]">{Number(bill.units || 0).toLocaleString()}</span>
                                                    <span className="ml-1 text-[11px] text-[oklch(65%_0.02_264)]">kWh</span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="text-[13px] font-medium text-[oklch(30%_0.02_264)]">₨ {Number(bill.baseCost || 0).toLocaleString()}</span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[oklch(65%_0.22_15_/_10%)] text-[oklch(50%_0.18_15)]">
                                                        ₨ {Number(bill.taxes || 0).toLocaleString()}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className={["text-[14px] font-bold", ac.color].join(" ")}>₨ {Number(bill.totalAmount || 0).toLocaleString()}</span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className={["inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold", ac.bg, ac.color].join(" ")}>
                                                        {MONTH_NAMES[(bill.billMonth || 1) - 1]}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4 max-w-[200px]">
                                                    <p className="text-[12px] text-[oklch(50%_0.02_264)] leading-relaxed line-clamp-2">{bill.summary || "—"}</p>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <button
                                                        onClick={() => navigate(`/dashboard/${billtype}/${bill._id}`)}
                                                        className={["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5", ac.bg, ac.color].join(" ")}
                                                    >
                                                        <Eye size={13} />
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default BillHistory