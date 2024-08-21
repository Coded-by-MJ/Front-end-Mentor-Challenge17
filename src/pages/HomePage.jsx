import { useSearch } from "@tanstack/react-router"
import AllCountriesPage from "./AllCountriesPage"
import RegionPage from "./RegionPage"
import SearchCountryPage from "./SearchCountryPage"

const HomePage = () => {

    const queryParams = useSearch({strict: false})


    if(queryParams?.region){
        return <RegionPage region={queryParams.region} />
    }

    if(queryParams?.search){
        return <SearchCountryPage country={queryParams.search} />
    }



  return (
   <AllCountriesPage />
  )
}

export default HomePage