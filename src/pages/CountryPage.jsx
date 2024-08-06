import { Link, useParams } from "react-router-dom";
import BackArrowIcon from "../components/BackArrowIcon";
import LoadingSpin from "../components/LoadingSpin";
import {  useQuery, } from "@tanstack/react-query";
import getCountry from "../../api/getCountry";





const CountryPage = () => {

   
  const { id } = useParams();
 

  const {data, status} = useQuery({
      queryKey: ['country', id],
      queryFn: () => getCountry(id),
  })


 
    




  if(status === "pending") {
     return (<LoadingSpin loading={true} /> )
  }
  if(status === "error"){
   
    return (<h1 className="text-2xl text-center mt-5 dark:text-white text-very-dark-blue-text">{`This country("${id}") doesn't exist`}</h1>)
  
  }



  const { name, flags, region, currencies,
    languages, tld, subregion, borderCountries,
    capital, population } = data;
  
    const common = (name && name.common) ?? "N/A";
    const nativeName = name?.nativeName ?? "N/A";
    const {svg = "", alt = "Flag"} = flags
  
    const currency = Object.values(currencies).map(currency => currency.name);
    const allLanguages = Object.values(languages).map(language => language);
    const allNativeNames = Object.values(nativeName).map(native => native.common);

  



  return (
    
    <section className="min-h-screen w-full py-6 px-5 flex flex-col gap-16 "
    >
      <Link to="/"
       className="gap-3 justify-center items-center w-[100px] h-[30px] 
        shadow-lg shadown-slate-500/30  dark:shadow-slate-800/30
        rounded-sm flex bg-white dark:bg-dark-blue cursor-pointer
       "
      >
        <BackArrowIcon />
        <span className="text-sm font-light inline-block text-very-dark-blue-text dark:text-white">
          Back
        </span>
      </Link>




      <div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
        
          <img 
          src={svg}
          alt={alt ? alt : common} 
          className="w-full max-w-[550px]  max-h-[400px]  h-full object-cover object-center
           shadow-sm shadown-slate-500/30  dark:shadow-slate-800/30
          "
          />



        <div className="w-full flex flex-col gap-10 max-w-[700px]"> {/*second col*/}

          <div className="w-full flex flex-col gap-10 lg:flex-row lg:gap-32"> {/*details col*/}

             <div className="space-y-6">
                <h1 className="text-lg lg:text-2xl font-extrabold text-very-dark-blue-text dark:text-white">
                 {common}
                </h1>
            
             <div className="flex flex-col items-start gap-3">
               <p className="font-semibold text-md dark:text-white text-very-dark-blue-text">
                Native Name:
                <span className="inline-block ml-1  font-light">
                  {allNativeNames.join(", ")}
                </span>
               </p>
               
               <p className="font-semibold text-md dark:text-white text-very-dark-blue-text">
                 Population:
                <span className="inline-block ml-1  font-light">
                  {population.toLocaleString()} 
                </span>
               </p>
               
               <p className="font-semibold text-md dark:text-white text-very-dark-blue-text">
                 Region:
                <span className="inline-block ml-1  font-light">
                  {region}
                </span>
               </p>
               
               <p className="font-semibold text-md dark:text-white text-very-dark-blue-text">
                  Sub Region: 
                <span className="inline-block ml-1  font-light">
                 {subregion}
                </span>
               </p>
               
               <p className="font-semibold text-md dark:text-white text-very-dark-blue-text">
                 Capital:
                <span className="inline-block ml-1  font-light">
                   {capital}
                </span>
               </p>

              </div>
           </div>

             <div className="flex flex-col items-start gap-3 lg:mt-12 lg:flex-grow">
                 <p className="font-semibold text-md dark:text-white text-very-dark-blue-text">
                  Top Level Domain:
                 <span className="inline-block ml-1  font-light">
                  { tld.join(", ") }
                 </span>
                 </p>
               
                <p className="font-semibold text-md dark:text-white text-very-dark-blue-text">
                  Currencies:
                 <span className="inline-block ml-1  font-light">
                   {currency.join(", ")} 
                  </span>
                </p>
               
                 <p className="font-semibold text-md dark:text-white text-very-dark-blue-text">
                   Languages:
                   <span className="inline-block ml-1  font-light">
                    {allLanguages.join(', ')}
                   </span>
                  </p>
              </div>

            </div>

            
            
             <div className="flex flex-col gap-4 lg:flex-row lg:items-center"> 
                <h3 className="text-lg lg:w-[200px] font-semibold text-very-dark-blue-text dark:text-white">
                  Border Countries:
                </h3>
                <ul className="w-full flex gap-2 flex-wrap">
                     {
                       borderCountries.map((border, i) => (
                        <li key={i}
                         className="w-max p-3.5 min-w-[100px] text-ellipsis overflow-hidden h-[25px] shadow-lg shadown-slate-500/30  dark:shadow-slate-800/30
                           rounded-sm flex justify-center items-center bg-white dark:bg-dark-blue cursor-pointer
                         "
                        > 
                           <Link
                            to={`/country/${border}`}
                            className=" no-underline font-light text-sm text-ellipsis 
                              text-very-dark-blue-text dark:text-white
                              
                            "
                           >
                            {border}
                           </Link>
                        </li>
                       ))

                     }
                </ul>
             </div>

          </div>



       </div>
     
    </section>
  
  )




}








export default CountryPage