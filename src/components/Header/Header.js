import { Link } from 'react-router-dom'
import './Header.css'
import '../../index.css'
import Logo from'./logo.svg'
function Header(){
    return(
        <header>
        <div className="logo">
            <img src={Logo} alt="LogoKmilaC"></img>
        </div>
        <nav>
        <div className="items">
              <Link to="/aboutme"><h3 className="item">About me</h3></Link>
              <Link to="/skills"><h3 className="item">Skills</h3></Link>
              <Link to="/tools"><h3 className="item">Tools</h3></Link>
              <Link to="/studies"><h3 className="item">Studies</h3></Link>
              <Link to="/portfolio"><h3 className="item">Portfolio</h3></Link>
              <Link to="/contact-me"><h3 className="item">Contact me</h3></Link>
              <div className="item">
              <i className="fa-solid fa-magnifying-glass"></i>
                </div>
          </div>
        </nav>
    </header>
    )
}

export default Header