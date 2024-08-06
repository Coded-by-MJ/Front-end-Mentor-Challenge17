import { useContext } from "react";
import { SearchContext } from "../provider/SearchCountryProvider";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";




const InputSearch = () => {

  const navigate = useNavigate();

  const { countryName, updateCountryName } = useContext(SearchContext);



  const handleGetSearch = (e) => {
    e.preventDefault();
    if(countryName.length < 1) return;

    navigate(`/search/${countryName}`)
  }


  return (
    <form 
     onSubmit={handleGetSearch}
    className="w-full p-3 px-8 flex justify-start
     shadow-md shadow-slate-500/10  dark:shadow-slate-800/10
     items-center gap-6 lg:w-[450px] cursor-pointer h-[55px] rounded-md bg-white dark:bg-dark-blue"
    >
       <SearchIcon />
       <input
        type="text"
        name="country"
        value={countryName}
        onChange={(e) => updateCountryName(e.target.value)}
        placeholder="Search for a country..."
        className="text-dark-gray font-light dark:text-white text-md bg-transparent outline-none placeholder:text-dark-gray focus:outline-none flex-grow dark:placeholder:text-white"

       
       />

    </form>
  )
}

export default InputSearch