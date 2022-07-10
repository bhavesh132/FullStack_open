import { useEffect, useState } from 'react'
import Search from './components/Search';
import './App.css';
import axios from 'axios'
import Countries from './components/Countries';



function App() {
  
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then((response) => {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [])

  const filteredCountries = (text) => {
    
    const result =  countries.filter((country) => (country.name.common.toLowerCase().includes(text.toLowerCase())))

    if(text === '' || result.length >10) {
      return "Too Many Results! Specify another filter"
    }

    if(result === []){
      return "No country with the given name"
    }

    if(result.length < 10){
      return result
    }
  }

  return (
    
    <div className="App">
      <header className="App-header">
        Countries
      </header>
      {console.log(filteredCountries(searchText))}
      <Search setSearchText={setSearchText} />
      <Countries result={filteredCountries(searchText)} /> 
    </div>
  );
}

export default App;
