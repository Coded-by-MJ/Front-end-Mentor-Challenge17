import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    region: [ ],
    isLoading: false,
}

const url = "https://restcountries.com/v3.1/region/"


export const getRegion = createAsyncThunk(
    'region/getRegion',
    async (regionName, thunkAPI) => {
      try {
        const resp = await axios(`${url}${regionName.trim()}`);
       return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue("failed to get regional countries", error);
      }
    }
  );









const regionSlice = createSlice({
    name: "region",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getRegion.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getRegion.fulfilled, (state, action) => {
            
            state.isLoading = false;
            state.region = action.payload;

          })
          .addCase(getRegion.rejected, (state) => {
            state.isLoading = false;
          });
      },
})





export default regionSlice.reducer