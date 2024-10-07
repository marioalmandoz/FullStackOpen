import { useState } from 'react'

const Header = (props) => {

  return (
    <div>
      <h1>{props.header} </h1> 
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
  
)

const Statistics = (props) => {
  return (
    <div>
      {props.text} {props.number} 
    </div>
  )
}
  

  

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  const header = 'give feedback'

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const all = good + neutral + bad
  const average = (good -bad ) / all
  const positive = (good / all) * 100
  return (
    <div>
      <Header header = {header}/>

      <div> 
        <Button handleClick = {handleGoodClick} text = 'good'/>
        <Button handleClick = {handleNeutralClick} text = 'neutral' />
        <Button handleClick = {handleBadClick} text = 'bad' />
      </div>
      <Header header = 'statistics'/>
      <Statistics text = 'good' number = {good} />
      <Statistics text = 'neutral' number = {neutral} />
      <Statistics text = 'bad' number = {bad} />
      <Statistics text = 'all' number = {all} />
      <Statistics text = 'average' number = {average} />
      <Statistics text = 'positive' number = {positive + ' %'} />
    </div>
  )
}

export default App