import ClipLoader from "react-spinners/ClipLoader";




const override = {
    display: "block",
    margin: "100px auto"
}

const LoadingSpin = ({loading}) => {

    return (
        <ClipLoader 
         loading={loading}
         cssOverride={override}
         size={150}
         color={'hsl(200, 15%, 8%)'}
        />
      )
  
}

export default LoadingSpin