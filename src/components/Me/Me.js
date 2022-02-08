import icons from '../../assets/icons/icons.js'
import Tech from './Tech'

const Me = () => {
  return (
  <>
  <div className="header">     
    <h2>Sobre mi</h2>
  </div>
  <div>
    <p className="me__description">
      Hola! Mi nombre es Santiago Barreto, y soy de Argentina. Soy una persona que siempre está buscando aprender nuevas cosas, que le apasiona la programación y la tecnologia. Me especializo principalmente en el desarrollo web backend 
    </p>
  </div>

  <div>
  <h3 className="me_title">Tecnologías</h3>
    <div className="technologies">
      <Tech name="HTML" icon={icons.html} ></Tech>
      <Tech name="CSS" icon={icons.css} ></Tech>
      <Tech name="JS" icon={icons.js} ></Tech>
      <Tech name="Node" icon={icons.node} ></Tech>
      <Tech name="MongoDB" icon={icons.mongo} ></Tech>
      <Tech name="MariaDB" icon={icons.mariadb} ></Tech>
      <Tech name="AWS" icon={icons.aws} ></Tech>
      <Tech name="Docker" icon={icons.docker} ></Tech>
    </div>
  </div>
  </>
  )
}

export default Me