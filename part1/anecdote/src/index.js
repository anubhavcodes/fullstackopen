import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = () => {
  const min = Math.ceil(0)
  const max = Math.floor(anecdotes.length)
  return Math.floor(Math.random() * (max - min)) + min
}

const ShowAnecdote = ({anecdoteId, votes}) => {
  return (
  <div>
    <p>{anecdotes[anecdoteId]}</p> 
    <p>has {votes} votes</p>
  </div>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  const nextAnecdoteHandler = () => setSelected(getRandomInt())
  const voteHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  const most_votes = votes.indexOf(votes.max())

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <ShowAnecdote anecdoteId={selected} votes={votes[selected]} />
      <p>
        <button onClick={voteHandler}>vote</button>
        <button onClick={nextAnecdoteHandler}>next anecdote</button>
      </p>
      <h2>Anecdote with most votes</h2>
      <ShowAnecdote anecdoteId={most_votes} votes={votes.max()} />
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' 
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))