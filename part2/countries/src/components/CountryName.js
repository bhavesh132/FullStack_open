import CountryDetail from './CountryDetail'
import { useState } from 'react'

const CountryName = ({ country }) => {
    
    const [visible, setVisible] = useState(false)

    const getDetails = () =>{
        // console.log("Function Started" , country)
        setVisible(true)
    }

    if(visible === false){
        return (
            <div>
                <p>{country.name.common}
                    <span>
                        <button onClick={() =>{getDetails()}}>Show Details</button>
                    </span>
                </p>         
            </div>
        )
    }

    if (visible === true){
        return <CountryDetail data={country} />
    }
    
}

export default CountryName