import icons from '../../assets/icons/icons.js'

const Me = () => {
  return (
  <>
  <div className="header">     
    <h2>Sobre mi</h2>
  </div>
  <div>
    <img className="icons-card" src={icons.html} alt="Demo"/>
    <img className="icons-card" src={icons.css} alt="Demo"/>
    <img className="icons-card" src={icons.js} alt="Demo"/>
    <img className="icons-card" src={icons.node} alt="Demo"/>
    <img className="icons-card" src={icons.mongo} alt="Demo"/>
    <img className="icons-card" src={icons.mariadb} alt="Demo"/>
    <img className="icons-card" src={icons.aws} alt="Demo"/>
    <img className="icons-card" src={icons.docker} alt="Demo"/>
  </div>
  </>
  )
}

export default Me