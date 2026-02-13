import { createAsyncThunk } from "@reduxjs/toolkit";
import {createQueryParams} from "../../../utils/createQueryParams"

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3003'

// Add Bill Summary
export const addBillSummary = createAsyncThunk(
  "addBillSummary",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${backendUrl}/billsummary/${localStorage.getItem("userId")}`, {
        method: "POST",
        body: data,
        credentials: "include",
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Get All Bill Summaries
export const getBillSummary = createAsyncThunk(
    "getBillSummary",
    async (filters = {}, { rejectWithValue }) => {
      try {
        const queryString = createQueryParams(filters);
  
        // const url = queryString
        //   ? `${backendUrl}/billsummary?${queryString}`
        //   : `${backendUrl}/billsummary`;
  
        const response = await fetch(`/billsummary/${localStorage.getItem("userId")}`, {
          method: "GET",
          credentials: "include",
        });
  
        if (!response.ok) {
          const error = await response.json();
          return rejectWithValue(error);
        }
  
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

// Get Selected Bill Summary
export const getSelectedBillSummary = createAsyncThunk(
  "billSummary/getSelectedBillSummary",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${backendUrl}/selectedbillsummary/${id}`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
