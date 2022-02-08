import icons from '../../assets/icons/icons.js'
import Tech from './Tech'
import Carousel from 'react-elastic-carousel'

const Me = () => {

  return (
  <>
  <div className="header">     
    <h2>Sobre mi</h2>
  </div>
  <div>
    <p className="me__description">
      lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis
    </p>
  </div>
  <div className="me_technologies">
    <div>
      <h3 className="me_title">Tecnologías</h3>
    </div>
    <Carousel itemsToShow={3} itemsToScroll={3} infiniteLoop={true} className="carousel">
      <Tech name="HTML" icon={icons.html} ></Tech>
      <Tech name="CSS" icon={icons.css} ></Tech>
      <Tech name="JS" icon={icons.js} ></Tech>
      <Tech name="Node" icon={icons.node} ></Tech>
      <Tech name="MongoDB" icon={icons.mongo} ></Tech>
      <Tech name="MariaDB" icon={icons.mariadb} ></Tech>
      <Tech name="AWS" icon={icons.aws} ></Tech>
      <Tech name="Docker" icon={icons.docker} ></Tech>
    </Carousel>
  </div>
  </>
  )
}

export default Me