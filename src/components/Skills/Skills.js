import './Skills.css'
import '../../index.css';

function Skill(){
    return(
        <section class="skills">
              <h1>Main Skills</h1>
                <div class="icons">
            
                    <div class="rectangle">
                        <div class="circle">
                            <i class="fa-solid fa-pen-clip"></i>
                        </div>

                        <div class="skills-subtitle">
                            <h3>Design</h3>
                        </div>
                        
                    </div>
                    <div class="rectangle second">
                        <div class="circle second">
                            <i class="fa-solid fa-display"></i>
                    
                        </div>
                        
                        <div class="skills-subtitle">
                            <h3>Tech management</h3>
                        </div>
                        
                    </div>

                    <div class="rectangle">
                        <div class="circle">
                            <i class="fa-solid fa-gauge-simple-high"></i>
                        </div>
                        
                        <div class="skills-subtitle">
                            <h3>Fast learning</h3>
                        </div>
                        
                    </div>
                
                    <div class="rectangle">
                        <div class="circle">
                            <i class="fa-solid fa-language"></i>
                        </div>
                        
                        <div class="skills-subtitle">
                            <h3>Billingual</h3>
                        </div>
                        
                    </div>
              </div>
        </section>
    )
}

export default Skill;