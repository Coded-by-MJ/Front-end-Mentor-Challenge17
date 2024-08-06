import { useEffect, useContext } from "react";
import { SearchContext } from "../provider/SearchCountryProvider";
import InputSearch from "../components/InputSearch"
import Card from "../components/Card"
import FilterDropDown from "../components/FilterDropDown"  
import LoadingSpin from "../components/LoadingSpin"
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getRegion from "../../api/getRegion";




const RegionPage = () => {
 
  let regionContent;

  const  { updateCountryName } = useContext(SearchContext);
  const { id } = useParams()

  const { error, status, data } = useQuery({
      queryKey: ["region", id],
      queryFn: () => getRegion(id)
  })


  useEffect(()  => {
    updateCountryName("")
},[])



if(status === "pending") {
  regionContent = (<LoadingSpin loading={true} /> )
}
else if(status === "error"){
 
  regionContent = (<h1 className="text-2xl text-center mt-5 dark:text-white text-very-dark-blue-text">{JSON.stringify(error.message)}</h1>)

}else{
 regionContent = ( <div className="grid grid-auto-fill justify-center gap-16 md:gap-24">

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


      { regionContent } 
        
    </div>

  )
}



 




export default RegionPage