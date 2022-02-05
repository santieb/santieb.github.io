import Projects from "../Projects/Projects"
import Me from "../Me/Me"
import Home from "./Home"

const Main = ({ id=0 }) => {

  if (id === 0) return <Home/>

  if (id === 1) return <Me/>

  if (id === 2) return <Projects/>
}

export default Main