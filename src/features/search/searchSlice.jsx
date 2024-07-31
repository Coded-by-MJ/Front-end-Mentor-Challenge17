import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    searchCountry: [],
    searchWord: "",
    notFoundText: "",
    notFound: false,
    isLoading: true,
}

const url = "https://restcountries.com/v3.1/name/"


export const getSearchCountry = createAsyncThunk(
    'search/getSearchCountry',
    async (countryName, thunkAPI) => {
      try {
        const resp = await axios(`${url}${countryName.trim()}`);
        return resp.data;

      } catch (error) {
        return thunkAPI.rejectWithValue(`No Results for '${countryName}'`, error);
      }
    }
  );












const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      updateSearchWord(state, { payload }) {
         state.searchWord = payload
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getSearchCountry.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getSearchCountry.fulfilled, (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.notFound = false;
            state.searchCountry = action.payload;

          })
          .addCase(getSearchCountry.rejected, (state, action) => {
            state.isLoading = false;
            state.notFound = true;
            state.notFoundText = action.payload;
          });
      },
})



// console.log(allCountriesSlice)
export const { updateSearchWord } = searchSlice.actions

export default searchSlice.reducer