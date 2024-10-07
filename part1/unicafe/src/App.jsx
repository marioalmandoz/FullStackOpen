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

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if(all === 0){
    return (
      <p> No feedback given </p>
    )
  }

  return (
    <div>
      <StatisticsRow text='good' number={good} />
      <StatisticsRow text='neutral' number={neutral} />
      <StatisticsRow text='bad' number={bad} />
      <StatisticsRow text='all' number={all} />
      <StatisticsRow text='average' number={average} />
      <StatisticsRow text='positive' number={positive + ' %'} />
    </div>
  )
}
const StatisticsRow = ({ text, number }) => (
  <div>
    {text} {number}
  </div>
)

  

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
      
      <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      all = {all}
      average = {average}
      positive = {positive} 
      />
    </div>
  )
}

export default App