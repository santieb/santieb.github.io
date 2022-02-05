import './Projects.css'
import Card from "../Card/Card"
import images from '../../assets/img/images'

const Projects = () => {
  return (
    <div>
    <div className="header">     
       <h2 classname="section-title" >PROYECTOS</h2>
    </div>
    <div className="gallery">
    <Card
      img={images.resto}
      title="Delilah Resto"
      description="Delilah Restó API es una API Rest que interactúa con un sistema de base de datos NoSQL construida con el objetivo de garantizar una gestión persistente del restaurante ficticio Delilah Resto."
      demo={true}
      urlCode={'https://github.com/santieb/delilah-resto'}
      urlDemo={''}
      >
    </Card>
    <Card
      img={images.auth}
      title="Authentication App"
      subtitle="API REST">
    </Card>
    </div>
  </div>
  )
}

export default Projects