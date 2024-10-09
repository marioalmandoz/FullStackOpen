
const Course = (props) => {
  console.log("Course in")
  const total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return (
    <div>
      <h1> {props.course.name} </h1>
      <p> {props.course.parts[0].name} {props.course.parts[0].exercises} </p>
      <p> {props.course.parts[1].name} {props.course.parts[1].exercises} </p>
      <p> {props.course.parts[2].name} {props.course.parts[2].exercises} </p>
      <p> total of {total} exercises </p> 
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App