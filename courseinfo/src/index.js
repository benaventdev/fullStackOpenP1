import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course.name}</h1>
const Part = ({parte, ejercicios}) => <p>{parte} {ejercicios}</p>
const Content = ({parts}) => {
  return (
    <div>
      <Part parte={parts[0].name} ejercicios={parts[0].exercises}/>
      <Part parte={parts[1].name} ejercicios={parts[1].exercises}/>
      <Part parte={parts[2].name} ejercicios={parts[2].exercises}/>
    </div>
  )
}
const Total = ({parts}) => <p>El número total de ejercicios es de: {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))