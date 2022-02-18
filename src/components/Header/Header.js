import './Header.css'
import icons from '../../assets/icons/icons'

const Header = () => {
  return (
      <div class="me">
      <img class="header__me__img" src={icons.me} alt="me"></img>
      <h2 class="header__title">Santiago Barreto</h2>
      <h3 class="header__des">Desarrollador web</h3>
        <div class="list">
          <ul>
            <li> <a title="github" href="https://github.com/santieb">
            <img src={icons.github} alt="github" /></a></li>
            <li>
            <a title="linkedin" href="https://www.linkedin.com/in/santiagobarreto-/">
            <img src={icons.linkedin} alt="linkedin" /></a></li>
          </ul>
        </div>
      </div>
  )
}

export default Header
