import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo_emmanuelle_rey.webp"

function Header() {

  function getNavLinkClass(props) {
    return props.isActive ? "header__link header__linkActive" : "header__link header__linkInactive";
  }

  return (
    <>
    <div className='header'>
      <Link to={"/portfolio"}>
        <div className='header__logoContainer'>
          <img className='header__logo' src={logo} alt="Emmanuelle Rey" />
        </div>
      </Link>
      <div className='header__navigation'>
      <NavLink 
          className={getNavLinkClass}
          to={"/portfolio"}
        > Accueil
      </NavLink>
      <NavLink 
          /* className="header__link"  */
          to={"/portfolio-a-propos"}
          className={getNavLinkClass}
        > A propos
      </NavLink>
      <NavLink 
          to={"/portfolio-contact"}
          className={getNavLinkClass}
          >Contact
      </NavLink>
      </div>
    </div>
    </>
  )
}

export default Header
