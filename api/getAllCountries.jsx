import axios from "axios"

const getAllCountries = async () => {

    const res = await axios.get("https://restcountries.com/v3.1/all")
    return res.data
    

}










export default getAllCountries;