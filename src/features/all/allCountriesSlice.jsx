import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    countries: [ ],
    isLoading: true,
}


const url = "https://restcountries.com/v3.1/all"



export const getAllCountries = createAsyncThunk(
    'all/getAllCountries',
    async (_, thunkAPI) => {
      try {
        const resp = await axios(url);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue("failed to get all countries", error);
      }
    }
  );






const allCountriesSlice = createSlice({
    name: "allCountries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getAllCountries.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getAllCountries.fulfilled, (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.countries = action.payload;

          })
          .addCase(getAllCountries.rejected, (state) => {
            state.isLoading = false;
          });
      },
})







// console.log(allCountriesSlice)

export default allCountriesSlice.reducer