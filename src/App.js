import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import { useState } from 'react'

const App = () => {
  const [ getState, SetState ] = useState(0)

  return (
    <div className="App">
      <Header/>
      <div class="presentation">
        <Main id={getState}/>
      </div>
      <div class="navigation">
        <button onClick={() => SetState(0)}>home</button>
        <button onClick={() => SetState(1)}>me</button>
        <button onClick={() => SetState(2)}>projects</button>
      </div>
    </div>
  )
}

export default App
