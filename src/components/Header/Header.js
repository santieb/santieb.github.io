import './Header.css'
import icons from '../../assets/icons/icons'

const Header = () => {
  return (
    <div class="header__me">
      <div class="me">
      <img class="header__me__img" src={icons.me} alt="me"></img>
      <h2 class="header__title">Santiago Barreto</h2>
      <h3 class="header__des">Desarrollador web</h3>
        <div class="links">
          <a class="icons" title="github" href="https://github.com/santieb">
          <img src={icons.github} alt="github" />
          </a>
          <a class="icons" title="linkedin" href="https://www.linkedin.com/in/santiagobarreto-/">
          <img src={icons.linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
