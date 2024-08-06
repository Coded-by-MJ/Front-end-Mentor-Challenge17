import { createContext, useCallback, useState } from "react";


export const SearchContext = createContext()



const SearchCountryProvider = ({ children }) => {

    const [countryName, setCountryName] = useState('')

    const updateCountryName = useCallback((newCountryName) => {
        setCountryName(newCountryName)
    },[])
      


  return (
     <SearchContext.Provider value={{
         countryName,
         updateCountryName  
     }}>
        {children} 
     </SearchContext.Provider>

  )
}








export default SearchCountryProvider