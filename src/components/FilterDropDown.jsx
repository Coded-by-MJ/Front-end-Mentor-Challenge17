import { useState } from "react"
import { Link } from "react-router-dom"
import DropDownIcon from "./DropDownIcon"



const FilterDropDown = () => {

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const [showDropDown, setShowDropDown] = useState(false);



  const handleDropDown = () => {
    setShowDropDown(!showDropDown)
  }



  return (
    <div className="relative flex
       rounded-md bg-white dark:bg-dark-blue cursor-pointer
       shadow-md shadow-slate-500/10  dark:shadow-slate-800/10
     justify-between items-center p-6 h-[55px] w-1/2 lg:w-[250px]"
     onClick={handleDropDown}
     >
     <span className="text-[14px] font-semibold text-very-dark-blue-text dark:text-white inline-block">Filter by Region</span>
      <DropDownIcon />
      <ul className={`absolute list-none  ${showDropDown ? "visible" : "invisible"}
         rounded-md bg-white dark:bg-dark-blue cursor-pointer
         w-full *:w-full space-y-3 p-6 top-[3.75rem] left-0 z-10 transition-all
         shadow-md shadow-slate-500/10  dark:shadow-slate-800/10
      `}>
        {
          regions.map(region => (
            <li key={region}>
              <Link to={`/region/${region}`}
               className="text-[14px] inline-block w-full font-semibold text-very-dark-blue-text dark:text-white no-underline"
              >
              {region}
              </Link>
            </li>
          ))
        }
        
      </ul>
    </div>
  )
}

export default FilterDropDown