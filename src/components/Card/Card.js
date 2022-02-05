import './Card.css'
import icons from '../../assets/icons/icons'

const Card = ({ img, title, description, demo=false, urlCode, urlDemo='' }) => {
  return (
    <div className="card">
        <img className="img-Project" src={img} alt="project"></img>
        <h4>{title}</h4>
        <p>{description}</p>
        <a class="icons" title="linkedin" href={urlCode}>
          <img className="icons-card" src={icons.code} alt="Code"/>
        </a>
        <a class="icons" title="linkedin" href={urlDemo}>
          <img className="icons-card" src={icons.net} alt="Demo"/>
        </a>
    </div>
  )
}

export default Card