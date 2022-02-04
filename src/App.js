import './App.css';
import Vista from './component';
import { useState } from 'react'
function App() {
  const [ getState, SetState ] = useState(0);
  console.log(getState)
  return (
    <div className="App">
        <div className="header__me">
            <div>
                <h2>Santiago Barreto</h2>
                <h3>Desarrollador web</h3>
                <div>
                    <a title="icon github" href="https://github.com/santieb"><img
                            src="/assets/github (1).png" alt="github" /></a>
                    <a title="icon github" href="https://github.com/santieb"><img
                            src="/assets/github (1).png" alt="github" /></a>
                    <a title="icon github" href="https://github.com/santieb"><img
                            src="/assets/github (1).png" alt="github" /></a>
                </div>
            </div>
        </div>
        <div>
          <Vista id={getState}></Vista>
        </div>
        <div>
          <button onClick={() => SetState(0)}>home</button>
          <button onClick={() => SetState(1)}>me</button>
          <button onClick={() => SetState(2)}>projects</button>
        </div>
    </div>
  );
}

export default App;
