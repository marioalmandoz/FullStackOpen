import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

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
        {props.persons.map((person)=>(
        <p key= {person.id}> {person.name} {person.number}  
        <button  onClick={() => props.onDeletePerson(person.id, person.name)}>delete</button>
        </p>
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

    personService.getAll()
    .then(allPersons => {
      setPersons(allPersons)
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

    const personExist = persons.find(person=> person.name === newName)

    if(personExist){
      if(window.confirm(newName + ' is already added to the phonebook, replace the old number with a new one?')) {
        
        const updatedPerson = { ...personExist, number: newNumber}

        personService.update(personExist.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => 
            person.id !== personExist.id ? person : returnedPerson
          ))
        })
        setNewName('')
        setNewNumber('')
      }
      
    }else{
      const newPerson = {name : newName, number: newNumber};
      console.log(newName)
      personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('');
        setNewNumber('')
        console.log('Person Added')
      })
      
    }
  }
  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id).then(() => {
        // Actualizamos el estado eliminando la persona por su id
        setPersons(persons.filter(person => person.id !== id));
        console.log('Person deleted');
      });
    }
  };

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
      <Persons onDeletePerson = {handleDeletePerson} persons = {personsToShow}/>
    </div>
  )
}

export default App