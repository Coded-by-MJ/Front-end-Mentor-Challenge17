import { configureStore } from "@reduxjs/toolkit";
import  allCountriesReducer from "./features/all/allCountriesSlice";
import countryReducer from "./features/country/countrySlice";
import regionReducer from "./features/region/regionSlice";
import searchReducer from "./features/search/searchSlice";

export const store = configureStore({
    reducer: {
        allCountries: allCountriesReducer,
        country: countryReducer,
        region: regionReducer,
        searchCountry: searchReducer,
    } 
});