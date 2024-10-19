import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  return (
    <div>
        filter shown with <input value = {props.value} onChange = {props.onChange} />
    </div>
  )
}

const Response = (props) => {
  return (
    <div>
      {props.response}
    </div>
  )
}

function App() {
  const [newFilter, setNewFilter] = useState('')
  const response = ''

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const url = 'https://studies.cs.helsinki.fi/restcountries/api/name'

  const hook = () => {
      console.log('effect')

      axios.get(`${url}/${newFilter}`)
      .then(response => response.data)
    }
     
  useEffect(hook, [])

  return (
    <div>
      <Filter value = {newFilter} onChange={handleFilterChange}/>

      <Response response = {response}/>
    </div>

  )
}

export default App
