import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import icons from './assets/icons/icons'
import { useState } from 'react'

const App = () => {
  const [ getState, SetState ] = useState(0)

  return (
    <div className="App">
      <Header/>
      <div class="presentation">
        <Main id={getState}/>
      </div>
      <nav class="nav">
        <ul className="items">
          <li>
            <a onClick={() => SetState(0)}>
              <img className="items-icon" src={icons.home} alt="Home"/>
            </a>
          </li>
          <li>
            <a onClick={() => SetState(1)}>
              <img className="items-icon" src={icons.user} alt="About me"/>
            </a>
          </li>
          <li>
            <a onClick={() => SetState(2)}>
              <img className="items-icon" src={icons.project} alt="Projects"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
