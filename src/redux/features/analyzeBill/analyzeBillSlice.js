import { createSlice } from "@reduxjs/toolkit"
import { analyzeBill } from "./analyzeBillAction"

export const analyzeBillSlice = createSlice({
    name: "analyzeBillSlice",
    initialState: {
        billSummary: "",
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(analyzeBill.pending, (state) => {
            state.loading = true
            state.error = null
            state.billSummary = ""
        })
        .addCase(analyzeBill.fulfilled, (state, action) => {
            state.billSummary = action.payload
            state.error = null
            state.loading = false

        })
        .addCase(analyzeBill.rejected, (state, action) => {
            state.error = action.payload
            state.billSummary = ""
            state.loading = false
        })
    }
})

export default analyzeBillSlice.reducer