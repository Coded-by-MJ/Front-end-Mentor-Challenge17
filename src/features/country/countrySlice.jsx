import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    country: [],
    borderCountries: [],
    isLoading: false,
    borderError: null
}


const url = "https://restcountries.com/v3.1/name/"
const alphaUrl = 'https://restcountries.com/v3.1/alpha/'



export const getCountry = createAsyncThunk(
    'country/getCountry',
    async (countryName, thunkAPI) => {
      try {
        // Fetch the main country data
        const resp = await axios(`${url}${countryName.trim()}`);
        const countryData = resp.data[0];
  
        // Dispatch border countries thunk
        let borderCountries = [];
      
        // Fetch border countries if they exist
        if (countryData.borders && countryData.borders.length > 0) {
          const borderCountriesRequests = countryData.borders.map(code =>
            axios(`${alphaUrl}${code}`)
          );
          const borderCountriesResponses = await Promise.all(borderCountriesRequests);
          borderCountries = borderCountriesResponses.map(response => response.data[0].name.common);
        }
  
        return { ...countryData, borderCountries };
        

      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to get country data", error);
      }
    }
  );



  








const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getCountry.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getCountry.fulfilled, (state, action) => {
            state.isLoading = false;
            state.country = action.payload
            
          })
          .addCase(getCountry.rejected, (state) => {
              state.isLoading = false
          })
          
      },
})



// console.log(allCountriesSlice)

export default countrySlice.reducer