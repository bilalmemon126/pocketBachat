import { createAsyncThunk } from "@reduxjs/toolkit";

// Add Bill Summary
export const addBillSummary = createAsyncThunk(
  "billSummary/addBillSummary",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3003/billsummary`, {
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
    "billSummary/getBillSummary",
    async (filters = {}, { rejectWithValue }) => {
      try {
        // Generate query string from filters
        const queryString = createQueryParams(filters);
  
        const url = queryString
          ? `http://localhost:3003/billsummary?${queryString}`
          : `http://localhost:3003/billsummary`;
  
        const response = await fetch(url, {
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
      const response = await fetch(`http://localhost:3003/selectedbillsummary/${id}`, {
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
