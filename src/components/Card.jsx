import { Link } from "@tanstack/react-router";
import { memo } from "react";



const Card = ({ name, flags, population, capital, region }) => {


const countryName = name.common;
 const { alt, svg } = flags;
const mainCity = capital;


  return (
    <Link
     to={`/country/${countryName}`}
    className={`w-full flex flex-col gap-8 rounded-md bg-white pb-5 h-[460px]
      dark:bg-dark-blue shadow-md shadow-slate-500/10  dark:shadow-slate-800/10
    `}
   
    >

     <img
         src={svg}
        className="object-cover object-center w-full h-[250px] rounded-t-md"
        alt={alt ? alt : countryName} 
     />
    
     <div className="w-full px-6 flex flex-col gap-5">
     <h2 className="text-very-dark-blue-text dark:text-white text-lg font-extrabold">{countryName}</h2>

     <div className="flex flex-col items-start gap-2">
        <p className="font-semibold text-[14px] dark:text-white text-very-dark-blue-text">Population: 
             <span className="inline-block ml-1 font-light">{population.toLocaleString()}</span>
        </p>
        <p className="font-semibold  dark:text-white text-[14px] text-very-dark-blue-text">Region: 
            <span className="inline-block ml-1  font-light">{region}</span>
        </p>
        <p className="font-semibold  dark:text-white text-[14px] text-very-dark-blue-text">Capital: 
            <span className="inline-block ml-1 font-light">{mainCity}</span>
        </p>

     </div>
     </div>

    </Link>
  )
}




export default memo(Card)

