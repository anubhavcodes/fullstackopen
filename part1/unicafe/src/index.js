import React, { useState } from 'react'
import ReactDom from 'react-dom'

const DisplayStats = ({good, neutral, bad}) => {
  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
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