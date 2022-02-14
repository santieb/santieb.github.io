import './Projects.css'
import Card from "../Card/Card"
import images from '../../assets/img/images'

const Projects = () => {
  return (
    <div>
    <div className="header">     
       <h2>Proyectos</h2>
    </div>
    <div className="gallery">
    <Card
      img={images.resto}
      title="Delilah Resto"
      description="Delilah Restó API es una API Rest que interactúa con un sistema de base de datos NoSQL construida con el objetivo de garantizar una gestión persistente del restaurante ficticio Delilah Resto."
      demo={true}
      urlCode={'https://github.com/santieb/delilah-resto'}
      urlDemo={''}>
    </Card>
    <Card
      img={images.auth}
      title="Authentication App"
      description="Es una aplicacion de autenticacion de usuarios desarrollada con el stack MERN. Incluye registro, login con facebook y google, recuperar contraseña, activacion de email, entre otras funcionalidades."
      urlCode={'https://github.com/santieb/Authentication-app'}
      urlDemo={''}>
    </Card>
    </div>
    Más proyetos en <a className="githuburl" href="https://github.com/santieb">github.com/santieb</a>
  </div>
  )
}

export default Projects