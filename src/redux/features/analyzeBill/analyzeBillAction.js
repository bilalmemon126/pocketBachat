import { createAsyncThunk } from '@reduxjs/toolkit'
const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3003'

export const analyzeBill = createAsyncThunk('analyzeBill', async (data, { rejectWithValue }) => {
    try {
        const response = await fetch(`${backendUrl}/analyze`, {
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