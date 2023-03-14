import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const botons = "Give feedback"
const estadistiques = "Statistics"

const Titulos = ({titulo}) => <h1>{titulo}</h1>

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const total = good+neutral+bad
  const average = (good-bad)/total
  const positive = Math.round((good/total)*100)
  return(
    <div>
      <table>
        <tbody>
          <Statistic text="Good: " value={good}/>
          <Statistic text="Neutral: "value={neutral}/>
          <Statistic text="Bad: "value={bad}/>
          <Statistic text="Average: "value={average ? (average) : (0)}/>
          <Statistic text="Positive: "value={positive ? (positive) : (0)}/>
        </tbody>
      </table>
    </div>
  )
}

const Buttons = ({handler, value}) => <button onClick={handler}>{value}</button>

const INITIAL_VALUES = {
  good: 0,
  neutral: 0,
  bad: 0
}

const App = () => {
  // save clicks of each button to its own state
  const [state, setState] = useState(INITIAL_VALUES)
  const [haveValue, setValue] = useState(false)

  const handlerGoodButton = () => {
    setState({
      ...state,
      good: state.good+1
    })
    setValue(true)
  }

  const handlerNeutralButton = () => {
    setState({
      ...state,
      neutral: state.neutral+1
    })
    setValue(true)
  }

  const handlerBadButton = () => {
    setState({
      ...state,
      bad: state.bad+1
    })
    setValue(true)
  }
  
  return (
    <div>
      <Titulos titulo={botons}/>
      <Buttons value={"good"} handler={handlerGoodButton}/>
      <Buttons value={"neutral"} handler={handlerNeutralButton}/>
      <Buttons value={"bad"} handler={handlerBadButton}/>
      <Titulos titulo={estadistiques}/>
      {haveValue      
      ? <Statistics good={state.good} neutral={state.neutral} bad={state.bad}/>
      : <p>There's no value avaliable</p>
      }
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
