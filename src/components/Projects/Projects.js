import '../../index.css'
import './Projects.css'
import shoes from './shoesroom.svg'
import animalandia from './bootstrap-animalandia.png'
import forja from './Forja.png';

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
                 
                  <a class="image" href="https://milakmila.github.io/Forja-empresas-m3/">
                  <img src={forja} alt="Forja"></img>
                  </a>
                  <a class="image" href="https://www.figma.com/proto/qY9egtj1F7GnwJUCiZLtXm/Protipo_ejemplo?node-id=0%3A1&scaling=scale-down&page-id=0%3A1">
                  <img src={prototipo} alt="DuaLipa"></img>
                  </a>
                  
          
              </div>
           
        </div>
    </section>
    )}

export default Project