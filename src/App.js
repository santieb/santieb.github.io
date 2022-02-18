import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import icons from './assets/icons/icons'
import { useState } from 'react'

const App = () => {
  const [ getState, SetState ] = useState(0)

  return (
    <div className="App">
      <div class="header__me">
      <Header/>
      </div>
      <div class="presentation">
        <Main id={getState}/>
      </div>
      <div class="menu-nav">
      <ul>
        <li><a href="#" onClick={() => SetState(0)}><img src={icons.home}></img></a></li>
        <li><a href="#" onClick={() => SetState(1)}><img src={icons.user}></img></a></li>
        <li><a href="#" onClick={() => SetState(2)}><img src={icons.project}></img></a></li>
      </ul>
      </div>
    </div>
  )
}

export default App
