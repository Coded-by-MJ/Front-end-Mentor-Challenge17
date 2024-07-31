import { useEffect } from "react";
import InputSearch from "../components/InputSearch"
import Card from "../components/Card"
import FilterDropDown from "../components/FilterDropDown"  
import { useSelector, useDispatch } from "react-redux" 
import { getRegion } from "../features/region/regionSlice"
import { store } from "../store"
import LoadingSpin from "../components/LoadingSpin"
import { updateSearchWord } from "../features/search/searchSlice";




const RegionPage = () => {

  const { region, isLoading } = useSelector(store => store.region) 

 const  dispatch = useDispatch();

  useEffect(()  => {
    dispatch(updateSearchWord(''))
},[])




  return (
    <div className="min-h-screen w-full py-6 px-5 
    ">

      <div className="max-md:items-start flex mb-10 items-center gap-10 justify-between w-full flex-wrap">
         <InputSearch />
         <FilterDropDown />
      </div>


      {   isLoading

             ? (<LoadingSpin loading={isLoading} /> )

            : ( 
                 <div className="grid grid-auto-fill justify-center gap-16 md:gap-24">

                     {

                      region.map((item, idx) => (
                        <Card key={idx} {...item} /> 
                      ))
                    }
               </div>
            )

        }
    </div>

  )
}












export const regionLoader =  async ({ params }) => {
  const region = params.id
  await store.dispatch(getRegion(region))
  return region;
 
}

export default RegionPage