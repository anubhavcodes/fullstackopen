import React, { useState } from 'react'
import ReactDom from 'react-dom'


const AverageStats = ({good, neutral, bad}) => {
  let avg
  const total = good + neutral + bad
  return (<div><p>average {(good - bad) / total}</p></div>)
}

const PercentagePositive = ({good, total}) => (<div><p>positive {good / total * 100 }</p></div>)

const Statistics = ({value, text}) => (<div><p>{text} {value}</p></div>)

const DisplayStats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) return (<div><p>No feedback given</p></div>)
  return (
    <div>
      <h2>statistics</h2>
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={total} />
      <AverageStats good={good} neutral={neutral} bad={bad} />
      <PercentagePositive good={good} total={total} />
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedbackHandler = () => setGood(good+1)
  const neturalFeedbackHandler = () => setNeutral(neutral+1)
  const badFeedbackHandler = () => setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodFeedbackHandler} text="good" />
      <Button onClick={neturalFeedbackHandler} text="neutral" />
      <Button onClick={badFeedbackHandler} text="bad" />
      <DisplayStats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))