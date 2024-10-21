import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  return (
    <div>
        filter shown with <input value = {props.value} onChange = {props.onChange} />
    </div>
  )
}

const Response = ({country}) => {
  console.log()
  if (!country) {
    return null
  }

  // Obtener los idiomas en formato de string
  const languages = Object.values(country.languages)

  return (
    <div>
      <h2>{country.name.common}</h2>
      
      <p>capital {country.capital[0]}</p>
      <p>area {country.area} </p>
      <h3>Languages:</h3>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
    </div>
  )

  
}

function App() {

  const [newFilter, setNewFilter] = useState('')
  const [country, setCountry] = useState(null)


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  useEffect(() => {
    if (newFilter === ''){
      setCountry(null)
      return
    }

    const url = `https://studies.cs.helsinki.fi/restcountries/api/name/${newFilter}`

    console.log(url)
    axios.get(url)
    .then(response => {
      setCountry(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error fetching date:', error)
      setCountry(null)
    })
  },[newFilter])

  return (
    <div>
      <Filter value = {newFilter} onChange={handleFilterChange}/>
      
      <Response country = {country}/>
    </div>

  )
}

export default App
