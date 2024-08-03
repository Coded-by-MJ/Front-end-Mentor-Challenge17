import { useSelector, useDispatch } from "react-redux"

import InputSearch from "../components/InputSearch"
import Card from "../components/Card"
import FilterDropDown from "../components/FilterDropDown"
import LoadingSpin from "../components/LoadingSpin.jsx"
import { useEffect } from "react"
import { getAllCountries } from "../features/all/allCountriesSlice.jsx"
import { updateSearchWord } from "../features/search/searchSlice.jsx"






const HomePage = () => {

  const { countries, isLoading } = useSelector(store => store.allCountries) 

  const dispatch = useDispatch();

  useEffect(()  => {
    const handleHomePage = () => {
      dispatch(updateSearchWord(''))
      
      if(countries.length === 0){
        dispatch(getAllCountries())
      }
    }
     handleHomePage()
       
  },[countries])







  return (
    <div className="min-h-screen w-full py-6 px-5 
    ">

      <div className="max-md:items-start flex mb-10 items-center gap-10 justify-between w-full flex-wrap">
         <InputSearch />
         <FilterDropDown />
      </div>

      { isLoading

       ? (<LoadingSpin loading={isLoading} /> )

      : ( <div className="grid grid-auto-fill justify-center gap-16 md:gap-24">

        {

          countries.map((item, idx) => (
            <Card key={idx} {...item} /> 
          ))
        }

        </div>
      )

      }
    </div>

  )
}

export default HomePage