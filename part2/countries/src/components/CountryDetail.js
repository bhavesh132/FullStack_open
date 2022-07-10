import { useState,useEffect } from "react";
import axios from 'axios';



const CountryDetail = (props) => {
    const country = props.data
    
    const [weather, setWeather] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    const getLanguages = () => {
        return Object.keys(country.languages).map(function (key) {
            return country.languages[key];
          });
    }

    const coordinates = country.capitalInfo.latlng
    const lat = coordinates[0]
    const lng = coordinates[1]
    const API_key = process.env.REACT_APP_API_KEY
    const apiCall = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lng}&appid=${API_key}`

        
   useEffect(() => {
    axios.get(apiCall)
    .then((response) => {
        console.log(response.data)
        setWeather(response.data)    
        setIsLoaded(true)
        
    })
    }, [])

    if(!isLoaded){
        return (
            <h1>Loading....</h1>
        )
    }    

    else {
        return (
        <div>
            <h2>{country.name.common}</h2>
            <p><span><b>Capital: </b> </span>{country.capital}</p>
            <p><span><b>Area: </b></span>{country.area}</p>
            <p><span><b>Languages: </b></span></p>
                <ul>
                    {getLanguages().map(value => <>{value}<br /></>)}
                </ul>
            <img src={country.flags.png} alt="flag" />
            <p>Weather in {country.capital}:</p>
            <p>Temperature: <span>{weather.main.temp}F</span></p>
            <p>Wind Velocity: <span>{weather.wind.speed} m/s</span></p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="wather_icon" />
            <p>Description: <span>{weather.weather[0].description}</span></p>
            
        </div>
        )
    }
}

export default CountryDetail