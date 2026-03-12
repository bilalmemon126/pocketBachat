import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { analyzeBill } from "../../redux/features/analyzeBill/analyzeBillAction"
import { addBillSummary } from "../../redux/features/billSummary/billSummaryAction"
import ImageReader from "../imageReader/ImageReader"
import { Upload, Zap, Calendar, Receipt, SquareStack } from "lucide-react"

const months = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
]

const isManual = (type) => type === "typemanually"

const inputClass = [
  "w-full px-4 py-3 rounded-[12px] text-[14px] text-[oklch(20%_0.03_264)]",
  "border-2 border-[oklch(90%_0.01_264)] outline-none transition-all duration-200 bg-gray-50",
  "placeholder:text-[oklch(70%_0.02_264)]",
  "focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]",
].join(" ")

const BillUpload = ({ type }) => {
  const dispatch = useDispatch()
  const { billSummary, loading } = useSelector((state) => state.analyzeBill)

  const [input, setInput] = useState({
    imageFile: "",
    imagePreview: "",
    billType: "",
    units: "",
    trafic: "",
    extraCharges: "",
    billMonth: "",
  })

  const set = (key) => (e) => setInput((p) => ({ ...p, [key]: e.target.value }))

  const handleSend = (e) => {
    e.preventDefault()
    const formData = new FormData()

    if (!isManual(type)) {
      if (!input.imageFile || !input.billMonth) return alert("Image and bill month are required")
      formData.append("billImage", input.imageFile)
      formData.append("type", type)
      formData.append("billMonth", input.billMonth)
    }
    else {
      if (!input.billType || !input.units || !input.trafic || !input.extraCharges || !input.billMonth) {
        return alert("All manual fields are required")
      }

      formData.append("billType", input.billType)
      formData.append("units", input.units)
      formData.append("trafic", input.trafic)
      formData.append("extraCharges", input.extraCharges)
      formData.append("billMonth", input.billMonth)
      formData.append("type", type)

    }
    dispatch(analyzeBill(formData))

  }

  useEffect(() => {
    if (billSummary?.data) {
      const formData = new FormData()
      formData.append("summary", billSummary.data)
      formData.append("billType", input.billType)
      formData.append("billMonth", input.billMonth)
      if (input.imageFile) formData.append("billImage", input.imageFile)
      dispatch(addBillSummary(formData))
    }
  }, [billSummary])

  return (
    <div className="flex flex-col gap-4">

      {!isManual(type) && (
        <div>
          <div className="relative rounded-[16px] border-2 border-dashed border-[oklch(55.7%_0.246_272_/_25%)] bg-[oklch(55.7%_0.246_272_/_2%)] p-8 text-center transition-all duration-200 hover:border-[oklch(55.7%_0.246_272_/_50%)] hover:bg-[oklch(55.7%_0.246_272_/_4%)]">
            <div className="mx-auto mb-3 size-12 rounded-[12px] bg-[oklch(55.7%_0.246_272_/_8%)] flex items-center justify-center">
              <Upload size={20} className="text-[oklch(55.7%_0.246_272)]" />
            </div>
            <p className="text-[13px] font-semibold text-[oklch(30%_0.03_264)] mb-1">
              Drop your bill here
            </p>
            <p className="text-[11px] text-[oklch(60%_0.02_264)] mb-4">
              PDF, JPG or PNG supported
            </p>
            <ImageReader setInput={setInput} />
          </div>

          {input.imagePreview && (
            <div className="mt-4 relative w-fit">
              <img
                src={input.imagePreview}
                alt="preview"
                className="h-40 w-auto rounded-[12px] border-2 border-[oklch(55.7%_0.246_272_/_15%)] shadow-[0_4px_16px_oklch(55.7%_0.246_272_/_10%)] object-cover"
              />
              <button
                type="button"
                onClick={() => setInput((p) => ({ ...p, imageFile: "", imagePreview: "" }))}
                className="absolute -top-2 -right-2 size-5 rounded-full bg-[oklch(60%_0.22_25)] text-white flex items-center justify-center shadow text-[10px] font-bold hover:bg-[oklch(55%_0.22_25)] transition-colors"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}

      <div className="relative">
        <SquareStack size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] pointer-events-none z-10" />
        <select
          onChange={set("billType")}
          defaultValue=""
          className={`${inputClass} pl-10 appearance-none cursor-pointer`}
        >
          <option value="" disabled>Select bill type</option>
          <option value={"electric"}>Electricity Bill</option>
          <option value={"gas"}>Gas Bill</option>
          <option value={"water"}>Water Bill</option>
        </select>
        <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-[oklch(65%_0.02_264)] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isManual(type) && (
        <div className="flex flex-col gap-3">
          {[
            { placeholder: "Units Consumed", key: "units", type: "number" },
            { placeholder: "Tariff Rate", key: "trafic", type: "number" },
            { placeholder: "Extra Charges", key: "extraCharges", type: "number" },
          ].map(({ placeholder, key, type: t }) => (
            <div key={key} className="relative">
              <Zap size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] pointer-events-none" />
              <input
                type={t}
                placeholder={placeholder}
                onChange={set(key)}
                className={`${inputClass} pl-10`}
              />
            </div>
          ))}
        </div>
      )}

      <div className="relative">
        <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] pointer-events-none z-10" />
        <select
          onChange={set("billMonth")}
          defaultValue=""
          className={`${inputClass} pl-10 appearance-none cursor-pointer`}
        >
          <option value="" disabled>Select bill month</option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
        <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-[oklch(65%_0.02_264)] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <button
        onClick={handleSend}
        disabled={loading}
        className="group w-full py-3.5 rounded-[12px] text-[14px] font-semibold text-white bg-[oklch(55.7%_0.246_272)] shadow-[0_8px_24px_oklch(55.7%_0.246_272_/_30%)] transition-all duration-200 hover:bg-[oklch(50%_0.246_272)] hover:shadow-[0_12px_32px_oklch(55.7%_0.246_272_/_40%)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-1"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Analyzing…
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Upload size={15} />
            {isManual(type) ? "Analyze Bill" : "Upload & Analyze"}
          </span>
        )}
      </button>

    </div>
  )
}

export default BillUpload