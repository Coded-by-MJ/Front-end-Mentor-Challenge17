import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import InputSearch from "../components/InputSearch"
import Card from "../components/Card"
import LoadingSpin from "../components/LoadingSpin"
import FilterDropDown from "../components/FilterDropDown" 
import { getSearchCountry } from "../api/countries";





const SearchCountryPage = () => {
    
   const { id } = useParams();
 

   const {data, status} = useQuery({
       queryKey: ['country', id],
       queryFn: () => getSearchCountry(id),
       retry: 2,
   })
 
   let searchContent;
 
   if(status === "pending") {
      searchContent = (<LoadingSpin loading={true} /> )
   }
   else if(status === "error"){
     
      searchContent = (<h1 className="text-2xl text-center mt-5 dark:text-white text-very-dark-blue-text">{`No Results for '${id}'`}</h1>)
   }else{

     searchContent = ( <div className="grid grid-auto-fill justify-center gap-16 md:gap-24">

    
                         { data.length > 1 ? (
                                              
                                                 data.map((item, idx) => (
                                                   <Card key={idx} {...item} /> 
                                                 ))
                                             ) :
                                              ( <Card key={data[0]?.area ?? 1} {...data[0]} />)
                        
                                           
                         }
                      </div>
                  )
       } 
   
    

  return (
   
    <div className="min-h-screen w-full py-6 px-5 ">

      <div className="max-md:items-start flex mb-10 items-center gap-10 justify-between w-full flex-wrap">
         <InputSearch />
         <FilterDropDown />
      </div>
       
      {searchContent}

    </div>

  )
  
}









export default SearchCountryPage