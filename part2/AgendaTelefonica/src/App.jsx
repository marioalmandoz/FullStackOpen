import { useState } from 'react'

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
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('')
      console.log(newName)
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