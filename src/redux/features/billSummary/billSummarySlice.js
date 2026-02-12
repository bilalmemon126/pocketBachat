import { createSlice } from "@reduxjs/toolkit";
import { addBillSummary, getBillSummary, getSelectedBillSummary } from "./billSummaryAction";

export const billSummarySlice = createSlice({
    name: "billSummary",
    initialState: {
        summaryResponse: null,         // single inserted bill
        selectedSummaryData: null,     // single selected bill
        summaryData: [],               // all bills
        loadingAdd: false,
        loadingList: false,
        loadingSelected: false,
        errorAdd: null,
        errorList: null,
        errorSelected: null,
    },
    reducers: {
        clearSelectedSummaryData: (state) => {
            state.selectedSummaryData = "";
        }
    },
    extraReducers: (builder) => {
        builder
            // Add Bill
            .addCase(addBillSummary.pending, (state) => {
                state.loadingAdd = true;
                state.errorAdd = null;
                state.summaryResponse = null;
            })
            .addCase(addBillSummary.fulfilled, (state, action) => {
                state.loadingAdd = false;
                state.summaryResponse = action.payload;
                state.errorAdd = null;
            })
            .addCase(addBillSummary.rejected, (state, action) => {
                state.loadingAdd = false;
                state.errorAdd = action.payload;
                state.summaryResponse = null;
            })

            // Get All Bills
            .addCase(getBillSummary.pending, (state) => {
                state.loadingList = true;
                state.errorList = null;
                state.summaryData = [];
            })
            .addCase(getBillSummary.fulfilled, (state, action) => {
                state.loadingList = false;
                state.summaryData = action.payload;
                state.errorList = null;
            })
            .addCase(getBillSummary.rejected, (state, action) => {
                state.loadingList = false;
                state.errorList = action.payload;
                state.summaryData = [];
            })

            // Get Selected Bill
            .addCase(getSelectedBillSummary.pending, (state) => {
                state.loadingSelected = true;
                state.errorSelected = null;
                state.selectedSummaryData = null;
            })
            .addCase(getSelectedBillSummary.fulfilled, (state, action) => {
                state.loadingSelected = false;
                state.selectedSummaryData = action.payload;
                state.errorSelected = null;
            })
            .addCase(getSelectedBillSummary.rejected, (state, action) => {
                state.loadingSelected = false;
                state.errorSelected = action.payload;
                state.selectedSummaryData = null;
            });
    },
});

export const { clearSelectedSummaryData } = billSummarySlice.actions;
export default billSummarySlice.reducer;
