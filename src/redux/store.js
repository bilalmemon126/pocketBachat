import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import analyzeBillReducer from './features/analyzeBill/analyzeBillSlice'
import billSummaryReducer from './features/billSummary/billSummarySlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        analyzeBill: analyzeBillReducer,
        billSummary: billSummaryReducer
    },
})