import './card.css'
const Card = (props) => {
const { img, title, description } = props
return (
  <div className="card">
    <div className="card__body">
      <img className="card__image" src={img} alt="project"></img>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  <a className="icons"  href="https://github.com/santieb/delilah-resto"></a>
  <a className="icons" href="https://github.com/santieb/delilah-resto"></a>
  </div>
)
}



export default Card