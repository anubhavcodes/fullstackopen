import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part} {props.exercises}</p>
)

const Content = (props) => {
  let result = []
  props.parts.forEach(p => result.push(<Part part={p.name} exercises={p.exercises} />))
  return result
}

const Total = (props) => {
  let sum = 0
  props.exercises.forEach(p => sum+= p.exercises)
  
  return (
  <p>Number of exercises {sum} </p>
)}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [ 
  {
    name: "Fundamentals of React",
    exercises: 10
  },
  {
    name: "Using props to pass data",
    exercises: 7
  },
  {
    name: "State of a component",
    exercises: 14
  }]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total exercises={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
