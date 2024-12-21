import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(false)
  // const [todos, setTodos] = useState([
  //   {
  //     title: "Hey",
  //     desc: "I am a good todo"
  //   },
  //   {
  //     title: "Hey Another todo",
  //     desc: "I am a good todo too"
  //   },
  //   {
  //     title: "Hey I am grocery todo",
  //     desc: "I am a good todo but I am grocery todo"
  //   },

  // ])

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div>

  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }

  const [todos, settodos] = useState([
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 1",
    },
    {
      title: "Title 3",
      description: "Description 1",
    },
  ])

  const ToDo = ({ todo }) => {
    return (<>
      <div className="m-4 border-1 border border-purple-400">
        <div>{todo.title}</div>
        <div>{todo.description}</div>
      </div>

    </>)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* {showBtn?<button>I will be shown when another button is clicked</button> : ""} */}
      {showBtn && <button>I will be shown when another button is clicked</button>}

      {/* {todos.map(todo => {
        return <Todo key={todo.title} todo={todo}/>}
      )} */}

      {todos.map(todo => {
        // return <ToDo key={todo.title} todo={todo} />
        return <div key={todo.title} className="m-4 border-1 border border-purple-400">
          <div>{todo.title}</div>
          <div>{todo.description}</div>
        </div>
      })}

      <div className="card">
        <button onClick={() => {
          setCount(count + 1)
          setshowBtn(!showBtn)
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
