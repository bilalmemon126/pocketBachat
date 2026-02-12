import { useDispatch, useSelector } from "react-redux";
import Card from "../ui/Card";
import { useEffect } from "react";
import { getSelectedBillSummary } from "../../redux/features/billSummary/billSummaryAction";
import { clearSelectedSummaryData } from "../../redux/features/billSummary/billSummarySlice";
import { useNavigate, useParams } from "react-router-dom";

const BillSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type, id } = useParams(); // Get both type and ID from URL

  const { summaryResponse, selectedSummaryData, loadingSelected } = useSelector(
    (state) => state.billSummary
  );

  useEffect(() => {
    dispatch(clearSelectedSummaryData());
  }, [id, dispatch]);

  // If URL has an ID, fetch that bill summary
  useEffect(() => {
    if (id) {
      dispatch(getSelectedBillSummary(id));
    }
  }, [id, dispatch]);

  // Redirect to URL after adding a new bill
  useEffect(() => {
    if (summaryResponse?.insertedId) {
      navigate(`/${type}/${summaryResponse.insertedId}`);
    }
  }, [summaryResponse, navigate]);

  // Show loading state
  if (loadingSelected) {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  const data = selectedSummaryData?.data;

  // No data placeholder
  if (!data) {
    return (
      <Card>
        <p>No bill summary available.</p>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="font-semibold mb-4">Bill Summary</h3>

      {/* Bill Type */}
      <p className="font-semibold mb-2.5">{data.billType}</p>

      {/* AI Summary */}
      <p className="mb-4 whitespace-pre-line">{data.summary}</p>
    </Card>
  );
};

export default BillSummary;
