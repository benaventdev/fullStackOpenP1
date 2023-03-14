import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Messages = ({message}) => <h1>{message}</h1>

const MostVoted = ({upvotes}) => {
  const tmp = upvotes.reduce((iMax, x, i, arr) => {
    return x > arr[iMax] ? i : iMax
  }, 0)
  return <p>{anecdotes[tmp]}</p>
}

const App = (props) => {
  const [selected, setSelected] = useState({
    value: 0,
    upvotes: new Array(6).fill(0)
  })

  const handlerSelected = () => {
    setSelected({
      ...selected,
      value: Math.round(Math.random()*5)
    })
  }

  const handlerUpvote = () => {
    const copia = [...selected.upvotes]
    copia[selected.value]++
    setSelected({
      ...selected,
      upvotes: copia
    })
  }
  
  return (
    <div>
      <Messages message="Anecdote of the day"/>
      {props.anecdotes[selected.value]}<br/>
      {selected.upvotes[selected.value]}<br/>
      <button onClick={handlerSelected}>Random fact</button>
      <button onClick={handlerUpvote}>Upvote</button>
      <br/><br/>
      <Messages message="Anecdote with most votes"/>
      <MostVoted upvotes={selected.upvotes}/>
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

root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
