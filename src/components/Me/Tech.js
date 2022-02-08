import './Me.css'

const Tech = ({ name, icon }) => {
  return (
  <div className="tech">
    <img className="tech__icon" src={icon} alt={name}/>
    <h6 className="tech__name">{name}</h6>
  </div>)
}

export default Tech