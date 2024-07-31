import InputSearch from "../components/InputSearch"
import Card from "../components/Card"
import LoadingSpin from "../components/LoadingSpin"
import FilterDropDown from "../components/FilterDropDown" 
import { useSelector } from "react-redux"
import { store } from "../store"
import { getSearchCountry, updateSearchWord } from "../features/search/searchSlice"





const SearchCountryPage = () => {
    
     const { searchCountry, isLoading, notFound, notFoundText } = useSelector(state => state.searchCountry)

   
    

  return (
   
    <div className="min-h-screen w-full py-6 px-5 
    ">

      <div className="max-md:items-start flex mb-10 items-center gap-10 justify-between w-full flex-wrap">
         <InputSearch />
         <FilterDropDown />
      </div>
       
      {
          isLoading ? (
               // Show loading spinner if data is being fetched
               <LoadingSpin loading={isLoading} />
           ) : notFound ? (
             // Show "Not Found" message if no results are found
                <h1 className="mx-auto text-very-dark-blue-text dark:text-white text-lg">
                  {notFoundText}
                </h1>
            ) : (
             <div className="grid grid-auto-fill justify-center gap-16 md:gap-24">
                   { searchCountry.length < 1 ? (
                // Show single Card if searchCountry has less than 1 item
                                     <Card key={searchCountry.area} {...searchCountry} />
                                ) : (
                      //          Map over searchCountry to show multiple Cards
                                      searchCountry.map((item, idx) => (
                                         <Card key={idx} {...item} /> // Use a unique identifier if available
                                        ))
                    )}
              </div>
           )
       }

    </div>

  )
  
}




export const searchLoader =  ({ params }) => {
  const country = params.id
   store.dispatch(updateSearchWord(country))
   store.dispatch(getSearchCountry(country))
   return country
 
}





export default SearchCountryPage