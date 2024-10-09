import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const nameExist = persons.some(person=> person.name === newName)

    if(nameExist){
      alert(newName + ' is already added to the phonebook')
    }else{
      const newPerson = {name : newName};
      console.log(newName)
      setPersons(persons.concat(newPerson));
      setNewName('');
      console.log(newName)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> 
        {persons.map((person, index)=>(
        <p key= {index}> {person.name} </p>
        ))}
      </div>
    </div>
  )
}

export default App