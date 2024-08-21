import { useQuery } from "@tanstack/react-query"
import { useEffect, useContext } from "react"
import { SearchContext } from "../provider/SearchCountryProvider.jsx"
import getAllCountries from "../../api/getAllCountries.jsx"
import InputSearch from "../components/InputSearch.jsx"
import Card from "../components/Card.jsx"
import FilterDropDown from "../components/FilterDropDown.jsx"
import LoadingSpin from "../components/LoadingSpin.jsx"







const AllCountriesPage = () => {

  let homeContent;
  const  { updateCountryName } = useContext(SearchContext);
  

   const { data, error, status } = useQuery({
         queryKey: ["allCountries"],
         queryFn: getAllCountries,
         staleTime: 1000 * 60 * 5,
        
   })

   useEffect(()  => {
       updateCountryName("")
    },[])

   


   
    if(status === "pending") {
       homeContent = (<LoadingSpin loading={true} /> )
    }
    else if(status === "error"){
      
       homeContent = (<h1 className="text-2xl text-center mt-5 dark:text-white text-very-dark-blue-text">{JSON.stringify(error.message)}</h1>)
    }else{
      homeContent = ( <div className="grid grid-auto-fill justify-center gap-16 md:gap-24">

                     {
    
                      data.map((item, idx) => (
                         <Card key={idx} {...item} /> 
                          ))

                     }
                    </div>
                  )
    }






  return (
    <div className="min-h-screen w-full py-6 px-5 
    ">

      <div className="max-md:items-start flex mb-10 items-center gap-10 justify-between w-full flex-wrap">
         <InputSearch />
         <FilterDropDown />
      </div>
      
        {homeContent}
    </div>

  )
}

export default AllCountriesPage