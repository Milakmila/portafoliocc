import '../../index.css';
import './Tools.css';
import tools from "./tools.svg"

function Tool(){
    return(
        <section class="tools">
        <div class="text-tool">
        <h1>Languange & Tools</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus cumque ipsum inventore assumenda, voluptatibus porro ut laborum suscipit rem ex corrupti. Nisi amet porro earum sed odio impedit magnam?</p>
        </div>
        <img class="tools-img" src={tools} alt="tools"></img>
        </section>

    )}
export default Tool
