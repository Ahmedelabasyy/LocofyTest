import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHolidays = createAsyncThunk(
    'holidays/fetchHolidays',
    async () => {
        const response = await axios.get(`https://2bb76d45-8288-43d7-bb6d-7b8740651850.mock.pstmn.io/holiday`);
        return response.data;
    }
);


export const holidaysSlice = createSlice({
    name: 'holidays',
    initialState: {
        holidays: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          // Handle the pending state
          .addCase(fetchHolidays.pending, (state) => {
            state.status = 'loading';
          })
          // Handle the fulfilled state
          .addCase(fetchHolidays.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.holidays = action.payload;
          })
          // Handle the rejected state
          .addCase(fetchHolidays.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      }
});

export const {getHoldidays} = holidaysSlice.actions;
export default holidaysSlice.reducer;