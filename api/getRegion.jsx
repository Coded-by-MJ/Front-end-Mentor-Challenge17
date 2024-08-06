import axios from "axios"



const getRegion = async (region) => {
    const res = await axios.get(`https://restcountries.com/v3.1/region/${region.trim()}`)
    return res.data
    

}

export default getRegion;