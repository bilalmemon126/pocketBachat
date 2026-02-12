import { createAsyncThunk } from '@reduxjs/toolkit'

export const analyzeBill = createAsyncThunk('analyzeBill', async (data, { rejectWithValue }) => {
    try {
        const response = await fetch(`http://localhost:3003/analyze`, {
            method: "POST",
            body: data,
            credentials: "include"
        })
        if (!response.ok) {
            const error = await response.json()
            return rejectWithValue(error)
        }
        const result = await response.json()
        return result
    }
    catch (error) {
        return rejectWithValue(error)
    }
})