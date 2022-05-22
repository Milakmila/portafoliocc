import { Link } from 'react-router-dom'
import './Aboutme.css'
import '../../index.css'
import Camila from './fotoCamila.png'

function Aboutme() {
    return(
        <section class="principal">
            <div class="social">
                <a href="https://www.instagram.com/solentuventana/?hl=es">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/camila-cipagauta-14988a238/">
                <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Milakmila">
                <i class="fa-brands fa-github"></i>
                </a>
              </div>
              <h1 class="title-one">Camila Cipagauta</h1>
              <h2 class="title-two">Frontend Developer</h2>
              <div class="btn-one">
              <Link to="/contact-me">
                <button class="btn"><h4>Contact me</h4></button>
              </Link>
              <a href="https://www.linkedin.com/in/camila-cipagauta-14988a238/">
              <button class="btn-outline" ><h4>CV</h4></button>
              </a>
            </div>

              <div class="left">

                  <button class="btn-color btn-left button "><h4>Tools</h4></button>

                  <img src={Camila} alt="camilafoto" class="foto"></img>
                  <div className="parentDiv">
                  <button class=" btn-color  btn-right "><h4>Skills</h4>
                  </button>
                  </div>
              </div>

          </section>
    )};

export default Aboutme;
