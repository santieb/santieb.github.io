import './Card.css'
import icons from '../../assets/icons/icons'

const Card = ({ img, title, description, demo=false, urlCode, urlDemo='' }) => {
  return (
    <div className="card">
        <img className="img-Project" src={img} alt="project"></img>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="list">
          <ul>
            <li className="list-card">
              <a title="code" href={urlCode}><img src={icons.code} alt="Code"/></a>
            </li>
            <li className="list-card">
            <a title="demo" href={urlDemo}><img src={icons.net} alt="Demo"/></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Card