import UsageLineChart from "../components/charts/UsageLineChart"
import TaxPieChart from "../components/charts/TaxPieChart"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBillSummary } from "../redux/features/billSummary/billSummaryAction"

const Analytics = () => {
  const dispatch = useDispatch()
  const { summaryData, loadingList, errorList } = useSelector(
    (state) => state.billSummary
  );
  console.log(summaryData)

  useEffect(() => {
    dispatch(getBillSummary())
  },[dispatch])
  return (
    <div className="grid grid-cols-2 gap-6">
      <UsageLineChart />
      <TaxPieChart />
    </div>
  )
}

export default Analytics
