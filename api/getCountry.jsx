import axios from "axios";




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



export default getCountry;