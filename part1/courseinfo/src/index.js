import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part} {props.exercises}</p>
)

const Content = (props) => (
  <Part part={props.part.name} exercises={props.part.exercises} />
)

const Total = (props) => {
  let sum = 0
  props.exercises.forEach(p => sum+= p.exercises)
  
  return (
  <p>Number of exercises {sum} </p>
)}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={part1}/>
      <Content part={part2}/>
      <Content part={part3}/>
      <Total exercises={[part1, part2, part3]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
