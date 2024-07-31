import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import SearchIcon from "./SearchIcon"
import { updateSearchWord, getSearchCountry } from "../features/search/searchSlice"


const InputSearch = () => {
  const { searchWord } = useSelector(store => store.searchCountry)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetSearch = (e) => {
    e.preventDefault();
    if(searchWord.length < 1) return;

    dispatch(getSearchCountry(searchWord))
    navigate(`/search/${searchWord}`)
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
        value={searchWord}
        onChange={(e) => dispatch(updateSearchWord(e.target.value))}
        placeholder="Search for a country..."
        className="text-dark-gray font-light dark:text-white text-md bg-transparent outline-none placeholder:text-dark-gray focus:outline-none flex-grow dark:placeholder:text-white"

       
       />

    </form>
  )
}

export default InputSearch