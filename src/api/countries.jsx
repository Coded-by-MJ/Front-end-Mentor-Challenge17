import axios from "axios"

const getAllCountries = async () => {

    const res = await axios.get("https://restcountries.com/v3.1/all")
    return res.data
    

}

const getRegion = async (region) => {
    const res = await axios.get(`https://restcountries.com/v3.1/region/${region.trim()}`)
    return res.data
    

}

const getSearchCountry = async (searchCountry) => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${searchCountry.trim()}`)
    return res.data
    

}


const alphaUrl = "https://restcountries.com/v3.1/alpha/"

const getCountry = async (countryName) => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName.trim()}`)
    const countryData = res.data[0];
  
    let borderCountries = [];
      
    if (countryData.borders && countryData.borders.length > 0) {
          const borderCountriesRequests = countryData.borders.map(code =>
            axios(`${alphaUrl}${code}`)
          );
          const borderCountriesResponses = await Promise.all(borderCountriesRequests);
          borderCountries = borderCountriesResponses.map(response => response.data[0].name.common);
        }


        return { ...countryData, borderCountries };

}





export  { getAllCountries, getRegion, getSearchCountry, getCountry }