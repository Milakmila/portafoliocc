import '../../index.css'
import './Projects.css'
import shoes from './shoesroom.svg'
import animalandia from './bootstrap-animalandia.png'
import forja from './Forja.png';
import prototipoforja from './deseignthinkingForja.png';
import dualipa from './DuaLipa.png'
import prototipo from './figma.svg' 

function Project(){
    return(
        <section class="projects">
        <h1>Recent Projects</h1>
      
        <div class="row">
            <div class="column">
                  <a class="image" href="https://www.figma.com/proto/Fv9Txo25JQUPNo68Mb7zUX/High-fidelity-Wireframe_-Shoes-room?node-id=3%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2&show-proto-sidebar=1">
                  <img src={shoes} alt="ShoesRoom Figma"></img>
                  </a>
                  <a class="image" href="https://milakmila.github.io/Bootstrap-Animalandia/">
                  <img src={animalandia} alt="ANIMALANDIA"></img>
                  </a>
                  <a class="image" href="https://milakmila.github.io/DuaLipa/">
                  <img src={dualipa} alt="Dualipa"></img>
                  </a>
              
              </div>
              <div class="column">
                 
                  <a class="image"href="https://milakmila.github.io/Forja-empresas-m3/">
                  <img src={forja} alt="Forja"></img>
                  </a>
                  <a class="image"href="https://www.figma.com/proto/qY9egtj1F7GnwJUCiZLtXm/Protipo_ejemplo?node-id=0%3A1&scaling=scale-down&page-id=0%3A1">
                  <img src={prototipo} alt="DuaLipa"></img>
                  </a>
                  <a href="https://www.canva.com/design/DAE4oLSLy9I/DDvx8nS7-311YleVmz-c3Q/edit?utm_content=DAE4oLSLy9I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                    <img src={prototipoforja} alt="Protipo-figma"></img>
                  </a>
          
              </div>
              <div class="column">
                  
          
              </div>
        </div>
    </section>
    )}

export default Project