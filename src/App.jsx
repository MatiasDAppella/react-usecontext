import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ThemeContext } from './contexts/ThemeContext'
import { StoreContext } from './store/StoreProvider'

function App() {
  const { toogleTheme } = useContext(ThemeContext)
  const {
    state,
    loginUser,
    logoutUser
  } = useContext(StoreContext)
  
  const [input, setInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (state.user !== "") return logoutUser()
    
    loginUser({ user: input })
    setInput("")
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <form className='form' onSubmit={handleSubmit}>
        {(state.user !== "") ? <span>Welcome <strong>{state.user}</strong>!</span> : <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />}
        <button type='submit'>
          {(state.user === "") ? "Login": "Logout"}
        </button>
      </form>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => toogleTheme()}>Toogle theme</button>
    </>
  )
}

export default App
