import { useEffect, useState } from "react";
import ImageReader from "../imageReader/ImageReader";
import Card from "../ui/Card";
import { useDispatch, useSelector } from "react-redux";
import { analyzeBill } from "../../redux/features/analyzeBill/analyzeBillAction";
import { addBillSummary } from "../../redux/features/billSummary/billSummaryAction";

const BillUpload = ({ type }) => {
  const dispatch = useDispatch();
  const { billSummary, loading } = useSelector(
    (state) => state.analyzeBill
  );

  const [input, setInput] = useState({
    imageFile: "",
    imagePreview: "",
    units: "",
    trafic: "",
    extraCharges: "",
    billMonth: "",
  });

  const handleSend = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (type !== "typemanually") {
      if (!input.imageFile || !input.billMonth) {
        return alert("Image and bill month are required");
      }

      formData.append("billImage", input.imageFile);
      formData.append("type", type);
      formData.append("billMonth", input.billMonth);

      dispatch(analyzeBill(formData));
    }

    else {
      if (
        !input.units ||
        !input.trafic ||
        !input.extraCharges ||
        !input.billMonth
      ) {
        return alert("All manual fields are required");
      }

      formData.append("units", input.units);
      formData.append("trafic", input.trafic);
      formData.append("extraCharges", input.extraCharges);
      formData.append("billMonth", input.billMonth);
      formData.append("type", type);

      dispatch(analyzeBill(formData));
    }
  };

  useEffect(() => {
    if (billSummary?.data) {
      const formData = new FormData();

      formData.append("summary", billSummary.data);
      formData.append("billMonth", input.billMonth);

      if (input.imageFile) {
        formData.append("billImage", input.imageFile);
      }

      dispatch(addBillSummary(formData));
    }
  }, [billSummary]);

  return (
    <Card>
      <h3 className="font-semibold mb-4">
        {type === "typemanually"
          ? "Manual Bill Entry"
          : "Upload Bill"}
      </h3>

      <div>
        {type !== "typemanually" && (
          <>
            <div className="rounded-xl shadow p-10 text-center">
              <ImageReader setInput={setInput} />
            </div>

            {input.imagePreview && (
              <div className="w-52 h-52 mt-10">
                <img
                  src={input.imagePreview}
                  className="w-full rounded"
                  alt="preview"
                />
              </div>
            )}
          </>
        )}

        {type === "typemanually" && (
          <>
            <div className="bg-white w-full h-16 shadow rounded-2xl mt-5 p-5 flex items-center">
              <input
                type="number"
                placeholder="Enter Units Consumed"
                className="w-full outline-none"
                onChange={(e) =>
                  setInput({ ...input, units: e.target.value })
                }
              />
            </div>

            <div className="bg-white w-full h-16 shadow rounded-2xl mt-5 p-5 flex items-center">
              <input
                type="number"
                placeholder="Enter Tariff Rate"
                className="w-full outline-none"
                onChange={(e) =>
                  setInput({ ...input, trafic: e.target.value })
                }
              />
            </div>

            <div className="bg-white w-full h-16 shadow rounded-2xl mt-5 p-5 flex items-center">
              <input
                type="number"
                placeholder="Enter Extra Charges"
                className="w-full outline-none"
                onChange={(e) =>
                  setInput({ ...input, extraCharges: e.target.value })
                }
              />
            </div>
          </>
        )}

        <div className="bg-white w-full h-16 shadow rounded-2xl mt-5 p-5 flex items-center">
          <select
            className="w-full outline-none"
            onChange={(e) =>
              setInput({ ...input, billMonth: e.target.value })
            }
          >
            <option value="">Select bill month</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>

        <button
          className="w-full h-14 bg-black rounded-2xl mt-8 text-white text-lg"
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Send"}
        </button>
      </div>
    </Card>
  );
};

export default BillUpload;
