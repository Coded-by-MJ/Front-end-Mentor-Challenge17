import { createContext, useCallback, useState } from "react";
import { useSearch } from "@tanstack/react-router";

export const SearchContext = createContext();

const SearchCountryProvider = ({ children }) => {
  const queryParams = useSearch({ strict: false });

  const [countryName, setCountryName] = useState(queryParams?.search || "");

  const updateCountryName = useCallback((newCountryName) => {
    setCountryName(newCountryName);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        countryName,
        updateCountryName,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchCountryProvider;
