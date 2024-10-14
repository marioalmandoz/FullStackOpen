import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  return (
    <div>
        filter shown with <input value = {props.value} onChange = {props.onChange} />
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input value = {props.name} onChange = {props.onChangeName}/>
        </div>
        <div>
          number: <input value = {props.number} onChange= {props.onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = (props) => {
  return (
    <div> 
        {props.persons.map((person, index)=>(
        <p key= {index}> {person.name} {person.number} </p>
        ))}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  

  const hook = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }
  useEffect(hook, [])

  console.log('render', persons.length, 'persons')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const nameExist = persons.some(person=> person.name === newName)

    if(nameExist){
      alert(newName + ' is already added to the phonebook')
    }else{
      const newPerson = {name : newName, number: newNumber};
      console.log(newName)
      axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => {
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('')
        console.log('Person added')
      })
    }
  }

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value = {newFilter} onChange={handleFilterChange}/>
      <h2> Add a new </h2>
      <PersonForm onSubmit={handleAddPerson} 
      name = {newName} onChangeName = {handleNameChange}
      number = {newNumber} onChangeNumber = {handleNumberChange}/> 

      <h2>Numbers</h2>
      <Persons persons = {personsToShow}/>
    </div>
  )
}

export default App