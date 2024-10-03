const Header = (props) => {
  console.log(props)
  return(
      <div>
        <h1>{props.course}</h1>
      </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.number}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.parte1} number = {props.number1}/>
      <Part part = {props.parte2} number = {props.number2}/>
      <Part part = {props.parte3} number = {props.number3}/> 
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name : 'Fundamentals of React',
    exercises : 10
  } 
  const part2 = {
    name : 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
    name : 'State of a component',
    exercises : 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content parte1 = {part1.name} number1 = {part1.exercises} 
      parte2 = {part2.name} number2 = {part2.exercises} 
      parte3 = {part3.name} number3 = {part3.exercises}/>
      <Total total= {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App