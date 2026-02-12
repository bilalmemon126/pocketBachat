import BillUpload from "../components/bill/BillUpload"
import BillSummary from "../components/bill/BillSummary"
import { useParams } from "react-router-dom"

const UploadBill = () => {
  const { type } = useParams()
  return (
    <div className="grid grid-cols-2 gap-6">
      <BillUpload type={type} />
      <BillSummary />
    </div>
  )
}

export default UploadBill
