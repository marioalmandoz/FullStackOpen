const Header = (props) => {
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content parte1 = {part1} number1 = {exercises1} parte2 = {part2} number2 = {exercises2} parte3 = {part3} number3 = {exercises3}/>
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App