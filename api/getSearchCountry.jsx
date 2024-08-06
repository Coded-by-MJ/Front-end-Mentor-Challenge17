import axios from "axios"




const getSearchCountry = async (searchCountry) => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${searchCountry.trim()}`)
    return res.data
    

}



export default getSearchCountry;